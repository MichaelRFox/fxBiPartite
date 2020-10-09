import {default as d3} from './d3Build.js';
import {initArray, keyPrimary, keySecondary, getKeys} from './utilities.js';
import {default as glb} from './globals.js';

export function sortKeys (data) {

    switch (glb.sort) {
        case 'alpha':
            sortAlpha (data);
            break;
        case 'barycentric':
            sortBaryCentric (data);
            break;
        case 'sh':
            sortSH (data);
            break;
        default:
            glb.sourceKeys = [... new Set(data.reduce((a,b) => {return a.concat(keyPrimary(b))}, []))];
            glb.targetKeys = [... new Set(data.reduce((a,b) => {return a.concat(keySecondary(b))}, []))];
    };
}

function sortAlpha (data) {

    let sourceKeys = [... new Set(data.reduce((a,b) => {return a.concat(keyPrimary(b))}, []))];
    let targetKeys = [... new Set(data.reduce((a,b) => {return a.concat(keySecondary(b))}, []))];
    glb.sourceKeys = sourceKeys.sort();
    glb.targetKeys = targetKeys.sort();
    
    // let [graph, source, target] = adjacencyGraph(data);
    // let [pairs, keyPairs] = graphPairs(graph, source, target);
    // let crossings = edgeCrossings(pairs);
 
    // console.log('alpha crossings: ', crossings);

}

function sortBaryCentric (data) {

    // const sourceKeys = [... new Set(data.reduce((a,b) => {return a.concat(b[0])}, []))];
    // const targetKeys = [... new Set(data.reduce((a,b) => {return a.concat(b[1])}, []))];
    const {sourceKeys, targetKeys} = getKeys(data);

    let matrix = [];

    sourceKeys.forEach ((sourceKey, row) => {
        let tmp = [];
        targetKeys.forEach ((targetKey, column) => {
            let value = data.filter(d => {return d[0] == sourceKey && d[1] == targetKey}).length;
            tmp.push(value);
        });
        let count = tmp.reduce((a,b) => {return b == 1 ? a + b : a}, 0);
        let rowCenter = tmp.reduce((a,b,i) => {return b == 1 ? a + i : a}, 0) / count;
        tmp.push(rowCenter);
        matrix.push(tmp);
    });
    
    let lastRow = targetKeys.length;
    let rowOrderedMatrix = [];
    let orderedSourceKeys = [];

    while (matrix.length > 0) {
        let lowIndex = matrix.reduce((a,b,i) => {
            return b[lastRow] < a[1] ? [i, b[lastRow]] : a}, [0, 1e10])[0];
        rowOrderedMatrix.push(matrix.splice(lowIndex, 1)[0].slice(0, -1)); // don't need the row barycenters anymore
        orderedSourceKeys.push(sourceKeys.splice(lowIndex, 1)[0]);
    };

    let columnSums = initArray(targetKeys.length);
    let columnIndexSums = initArray(targetKeys.length);

    rowOrderedMatrix.forEach ((row, rowIndex) => {
        row.forEach ((item, column) => {
            columnSums[column] += item;
            columnIndexSums[column] += item == 1 ? rowIndex + 1 : 0;
        });
    });

    let columnCenters = columnIndexSums.map((d, i) => {return d / columnSums[i] - 1});
    let orderedTargetKeys = [];

    while (columnCenters.length > 0) {
        let lowIndex = columnCenters.indexOf(Math.min(...columnCenters));
        columnCenters.splice(lowIndex, 1);
        orderedTargetKeys.push(targetKeys.splice(lowIndex, 1)[0]);
    };

    glb.sourceKeys = orderedSourceKeys;
    glb.targetKeys = orderedTargetKeys;

}

//Newton, M., Sýkora, O., Withall, M., & Vrt’o, I. (2003, June). A parallel approach to row-based VLSI layout using stochastic hill-climbing. In International Conference on Industrial, Engineering and Other Applications of Applied Intelligent Systems (pp. 750-758). Springer, Berlin, Heidelberg.

function sortSH (data) {

    function randBetween (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function randPairs (min, max) { // min and max included 

        let ret = new Array(2);

        let sequence = Array.apply(null, {length: max + 1 - min})
            .map((d, i) => {
                return i + min;
            });

        let index = randBetween(min, max);
        ret[0] = sequence.splice(index, 1)[0];
        max--;
        index = randBetween(min, max);
        ret[1] = sequence[index];

        return ret;
    };

    function resortData(keys, index, data) {
        let ret = [];
        keys.forEach (key => {
            data.forEach (row => {
                if (row[index] == key) ret.push(row);
            });
        });
        return ret;
    }

    const alpha = data.length**2; //1350;
    const beta = data.length; //65;
    let dataCopy = data.slice();
    let [graph, sourceKeys, targetKeys] = adjacencyGraph(dataCopy);
    const density = data.length / (sourceKeys.length + targetKeys.length);
    const stoppingCount = (alpha * density) / (beta + density);
    let currentCount = 0;
    let [pairs, keyPairs] = graphPairs(graph, sourceKeys, targetKeys);
    let crossings = edgeCrossings(pairs);


    while (currentCount < stoppingCount && crossings > 0) {
        let tmpData;
        let leftKeys = sourceKeys.slice();
        let rightKeys = targetKeys.slice();
        let side = randBetween(0, 1);
        let [index1, index2] = side == 0 ? randPairs(0, leftKeys.length - 1) : randPairs(0, rightKeys.length - 1);
        if (side == 0) {
            [leftKeys[index1], leftKeys[index2]] = [leftKeys[index2], leftKeys[index1]];
            tmpData = resortData(leftKeys, 0, dataCopy)
        } else {
            [rightKeys[index1], rightKeys[index2]] = [rightKeys[index2], rightKeys[index1]];
            tmpData = resortData(rightKeys, 1, dataCopy)
        };

        [graph, leftKeys, rightKeys] = adjacencyGraph(tmpData);
        [pairs, keyPairs] = graphPairs(graph, leftKeys, rightKeys);
        let newCrossings = edgeCrossings(pairs);
        
        if (newCrossings < crossings) {
            crossings = newCrossings;
            currentCount = 0;
            sourceKeys = leftKeys;
            targetKeys = rightKeys;
            dataCopy = tmpData;
        } else {
            currentCount += 1;
        };
    };

    glb.sourceKeys = sourceKeys;
    glb.targetKeys = targetKeys;

    console.log ('sh crossings:', crossings);

}

function adjacencyGraph (data) { //convert data to an adjacency graph

    let {sourceKeys, targetKeys} = getKeys(data);

    let graph = [];

    sourceKeys.forEach ((sourceKey, row) => {
        let tmp = [];
        targetKeys.forEach ((targetKey, column) => {
            let value = data.filter(d => {return d[0] == sourceKey && d[1] == targetKey}).length;
            tmp.push(value);
        });
        graph.push(tmp);
    });

    return [graph, sourceKeys, targetKeys];
}

function graphPairs (graph, sourceKeys, targetKeys) {

    let pairs = [];
    let keyPairs = [];

    graph.forEach ((vector, row) => {
        vector.forEach((item, column) => {
            if (item == 1) {
                pairs.push([row, column]);
                keyPairs.push([sourceKeys[row], targetKeys[column]]);
            };
        });
    });

    return [pairs, keyPairs];
}

function edgeCrossings (pairs) {

    let crossings = 0;

    pairs.forEach ((pair, row) => {
        for (let i = row + 1; i < pairs.length; i++) {
            if (pair[0] < pairs[i][0] && pair[1] > pairs[i][1]) crossings += 1;
        };
    });

    return crossings;
}
