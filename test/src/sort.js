'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utilities = require('./utilities.js');
var globals = require('./globals.js');

/**
 * @module sort
 * @desc Provides sorting algorithms to minimize edge crossings.
 */

/**
 * @function sortKeys
 * @desc Entry point to select the appropriate sorting algorithm.
 * @param {Array} data A two-dimensional array of source (string), target (string),
 * and value (number) tuples.
 */
function sortKeys (data) {

    switch (globals.sort) {
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
            globals.sourceKeys = [... new Set(data.reduce((a,b) => {return a.concat(utilities.keyPrimary(b))}, []))];
            globals.targetKeys = [... new Set(data.reduce((a,b) => {return a.concat(utilities.keySecondary(b))}, []))];
    }}

/**
 * @function sortAlpha
 * @desc Sorts the source and target keys alphanumerically.
 * @param {Array} data A two-dimensional array of source (string), target (string),
 * and value (number) tuples.
 */
function sortAlpha (data) {
    const {sourceKeys, targetKeys} = utilities.getKeys(data);
    globals.sourceKeys = sourceKeys.sort();
    globals.targetKeys = targetKeys.sort();
}

/**
 * @function sortBaryCentric
 * @desc Sorts the data to minimize edge crossings using the barycentric method. See
 * [K. Sugiyama,S. Tagawa and M. Toda, 1981]{@link https://ieeexplore.ieee.org/abstract/document/4308636}.
 * @param {Array} data A two-dimensional array of source (string), target (string),
 * and value (number) tuples.
 */
function sortBaryCentric (data) {
    const {sourceKeys, targetKeys} = utilities.getKeys(data);

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
    }
    let columnSums = utilities.initArray(targetKeys.length);
    let columnIndexSums = utilities.initArray(targetKeys.length);

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
    }
    globals.sourceKeys = orderedSourceKeys;
    globals.targetKeys = orderedTargetKeys;

}

/**
 * @function sortSH
 * @desc Sorts the data to minimize edge crossings using the stochastic hill climbing method.
 * See [Newton, M., Sýkora, O., Withall, M., & Vrt’o, I., 2003]{@link https://link.springer.com/chapter/10.1007/3-540-45034-3_76}.
 * @param {Array} data A two-dimensional array of source (string), target (string),
 * and value (number) tuples.
 */
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
    }
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
            tmpData = resortData(leftKeys, 0, dataCopy);
        } else {
            [rightKeys[index1], rightKeys[index2]] = [rightKeys[index2], rightKeys[index1]];
            tmpData = resortData(rightKeys, 1, dataCopy);
        }
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
        }    }
    globals.sourceKeys = sourceKeys;
    globals.targetKeys = targetKeys;

    // console.log ('sh crossings:', crossings);

}

/**
 * @function adjacencyGraph
 * @desc Converts the data into an adjacency graph. Called by
 * [sortSH]{@link module:sort~sortSH}.
 * @param {Array} data A two-dimensional array of source (string), target (string),
 * and value (number) tuples.
 * @returns {Array} An array containing the adjacency graph (two-dimensional array),
 * and the corresponding source keys (Array of strings), and target keys (array of strings).
 */
function adjacencyGraph (data) { //convert data to an adjacency graph

    let {sourceKeys, targetKeys} = utilities.getKeys(data);

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

/**
 * @function graphPairs
 * @desc Determines the pairs of column/row intersections in the adjacency graph
 * that have a 1. Called by [sortSH]{@link module:sort~sortSH}.
 * @param {Array} graph The adjacency graph computed by
 * [adjacencyGraph]{@link module:sort~adjacencyGraph}.
 * @param {Array} sourceKeys An array of strings containing the source keys.
 * @param {Array} targetKeys An array of strings containing the target keys.
 * @returns {Array} An array containing the pairs (two-dimensional array of row
 * and column indices) and their corresponding key pairs (two-dimensional array of strings).
 */
function graphPairs (graph, sourceKeys, targetKeys) {

    let pairs = [];
    let keyPairs = [];

    graph.forEach ((vector, row) => {
        vector.forEach((item, column) => {
            if (item == 1) {
                pairs.push([row, column]);
                keyPairs.push([sourceKeys[row], targetKeys[column]]);
            }        });
    });

    return [pairs, keyPairs];
}

/**
 * @function edgeCrossings
 * @desc Determines the number of edge crossings in the graph.
 * Called by [sortSH]{@link module:sort~sortSH}.
 * @param {Array} pairs A two-dimensional array of row
 * and column indices returned by [graphPairs]{@link module:sort~graphPairs}.
 * @returns {number} The count of edge crossings.
 */
function edgeCrossings (pairs) {

    let crossings = 0;

    pairs.forEach ((pair, row) => {
        for (let i = row + 1; i < pairs.length; i++) {
            if (pair[0] < pairs[i][0] && pair[1] > pairs[i][1]) crossings += 1;
        }    });

    return crossings;
}

exports.sortKeys = sortKeys;
