function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
    throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function _iterableToArrayLimit(arr, i) {
    if ('undefined' === typeof Symbol || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally {
        try {
            if (!_n && null != _i['return']) _i['return']();
        } finally {
            if (_d) throw _e;
        }
    }
    return _arr;
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}

function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if ('string' === typeof o) return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if ('Object' === n && o.constructor) n = o.constructor.name;
    if ('Map' === n || 'Set' === n) return Array.from(o);
    if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
    if ('undefined' !== typeof Symbol && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
    if (null == len || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
}

import { default as d3 } from './d3Build.js';

import { initArray, keyPrimary, keySecondary, getKeys } from './utilities.js';

import { default as glb } from './globals.js';

export function sortKeys(data) {
    switch (glb.sort) {
      case 'alpha':
        sortAlpha(data);
        break;

      case 'barycentric':
        sortBaryCentric(data);
        break;

      case 'sh':
        sortSH(data);
        break;

      default:
        glb.sourceKeys = _toConsumableArray(new Set(data.reduce(function(a, b) {
            return a.concat(keyPrimary(b));
        }, [])));
        glb.targetKeys = _toConsumableArray(new Set(data.reduce(function(a, b) {
            return a.concat(keySecondary(b));
        }, [])));
    }
}

function sortAlpha(data) {
    var sourceKeys = _toConsumableArray(new Set(data.reduce(function(a, b) {
        return a.concat(keyPrimary(b));
    }, [])));
    var targetKeys = _toConsumableArray(new Set(data.reduce(function(a, b) {
        return a.concat(keySecondary(b));
    }, [])));
    glb.sourceKeys = sourceKeys.sort();
    glb.targetKeys = targetKeys.sort();
}

function sortBaryCentric(data) {
    var _getKeys = getKeys(data), sourceKeys = _getKeys.sourceKeys, targetKeys = _getKeys.targetKeys;
    var matrix = [];
    sourceKeys.forEach(function(sourceKey, row) {
        var tmp = [];
        targetKeys.forEach(function(targetKey, column) {
            var value = data.filter(function(d) {
                return d[0] == sourceKey && d[1] == targetKey;
            }).length;
            tmp.push(value);
        });
        var count = tmp.reduce(function(a, b) {
            return 1 == b ? a + b : a;
        }, 0);
        var rowCenter = tmp.reduce(function(a, b, i) {
            return 1 == b ? a + i : a;
        }, 0) / count;
        tmp.push(rowCenter);
        matrix.push(tmp);
    });
    var lastRow = targetKeys.length;
    var rowOrderedMatrix = [];
    var orderedSourceKeys = [];
    while (matrix.length > 0) {
        var lowIndex = matrix.reduce(function(a, b, i) {
            return b[lastRow] < a[1] ? [ i, b[lastRow] ] : a;
        }, [ 0, 1e10 ])[0];
        rowOrderedMatrix.push(matrix.splice(lowIndex, 1)[0].slice(0, -1));
        orderedSourceKeys.push(sourceKeys.splice(lowIndex, 1)[0]);
    }
    var columnSums = initArray(targetKeys.length);
    var columnIndexSums = initArray(targetKeys.length);
    rowOrderedMatrix.forEach(function(row, rowIndex) {
        row.forEach(function(item, column) {
            columnSums[column] += item;
            columnIndexSums[column] += 1 == item ? rowIndex + 1 : 0;
        });
    });
    var columnCenters = columnIndexSums.map(function(d, i) {
        return d / columnSums[i] - 1;
    });
    var orderedTargetKeys = [];
    while (columnCenters.length > 0) {
        var _lowIndex = columnCenters.indexOf(Math.min.apply(Math, _toConsumableArray(columnCenters)));
        columnCenters.splice(_lowIndex, 1);
        orderedTargetKeys.push(targetKeys.splice(_lowIndex, 1)[0]);
    }
    glb.sourceKeys = orderedSourceKeys;
    glb.targetKeys = orderedTargetKeys;
}

function sortSH(data) {
    function randBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function randPairs(min, max) {
        var ret = new Array(2);
        var sequence = Array.apply(null, {
            length: max + 1 - min
        }).map(function(d, i) {
            return i + min;
        });
        var index = randBetween(min, max);
        ret[0] = sequence.splice(index, 1)[0];
        max--;
        index = randBetween(min, max);
        ret[1] = sequence[index];
        return ret;
    }
    function resortData(keys, index, data) {
        var ret = [];
        keys.forEach(function(key) {
            data.forEach(function(row) {
                if (row[index] == key) ret.push(row);
            });
        });
        return ret;
    }
    var alpha = Math.pow(data.length, 2);
    var beta = data.length;
    var dataCopy = data.slice();
    var _adjacencyGraph = adjacencyGraph(dataCopy), _adjacencyGraph2 = _slicedToArray(_adjacencyGraph, 3), graph = _adjacencyGraph2[0], sourceKeys = _adjacencyGraph2[1], targetKeys = _adjacencyGraph2[2];
    var density = data.length / (sourceKeys.length + targetKeys.length);
    var stoppingCount = alpha * density / (beta + density);
    var currentCount = 0;
    var _graphPairs = graphPairs(graph, sourceKeys, targetKeys), _graphPairs2 = _slicedToArray(_graphPairs, 2), pairs = _graphPairs2[0], keyPairs = _graphPairs2[1];
    var crossings = edgeCrossings(pairs);
    while (currentCount < stoppingCount && crossings > 0) {
        var tmpData = void 0;
        var leftKeys = sourceKeys.slice();
        var rightKeys = targetKeys.slice();
        var side = randBetween(0, 1);
        var _ref = 0 == side ? randPairs(0, leftKeys.length - 1) : randPairs(0, rightKeys.length - 1), _ref2 = _slicedToArray(_ref, 2), index1 = _ref2[0], index2 = _ref2[1];
        if (0 == side) {
            var _ref3 = [ leftKeys[index2], leftKeys[index1] ];
            leftKeys[index1] = _ref3[0];
            leftKeys[index2] = _ref3[1];
            tmpData = resortData(leftKeys, 0, dataCopy);
        } else {
            var _ref4 = [ rightKeys[index2], rightKeys[index1] ];
            rightKeys[index1] = _ref4[0];
            rightKeys[index2] = _ref4[1];
            tmpData = resortData(rightKeys, 1, dataCopy);
        }
        var _adjacencyGraph3 = adjacencyGraph(tmpData);
        var _adjacencyGraph4 = _slicedToArray(_adjacencyGraph3, 3);
        graph = _adjacencyGraph4[0];
        leftKeys = _adjacencyGraph4[1];
        rightKeys = _adjacencyGraph4[2];
        var _graphPairs3 = graphPairs(graph, leftKeys, rightKeys);
        var _graphPairs4 = _slicedToArray(_graphPairs3, 2);
        pairs = _graphPairs4[0];
        keyPairs = _graphPairs4[1];
        var newCrossings = edgeCrossings(pairs);
        if (newCrossings < crossings) {
            crossings = newCrossings;
            currentCount = 0;
            sourceKeys = leftKeys;
            targetKeys = rightKeys;
            dataCopy = tmpData;
        } else currentCount += 1;
    }
    glb.sourceKeys = sourceKeys;
    glb.targetKeys = targetKeys;
    void 0;
}

function adjacencyGraph(data) {
    var _getKeys2 = getKeys(data), sourceKeys = _getKeys2.sourceKeys, targetKeys = _getKeys2.targetKeys;
    var graph = [];
    sourceKeys.forEach(function(sourceKey, row) {
        var tmp = [];
        targetKeys.forEach(function(targetKey, column) {
            var value = data.filter(function(d) {
                return d[0] == sourceKey && d[1] == targetKey;
            }).length;
            tmp.push(value);
        });
        graph.push(tmp);
    });
    return [ graph, sourceKeys, targetKeys ];
}

function graphPairs(graph, sourceKeys, targetKeys) {
    var pairs = [];
    var keyPairs = [];
    graph.forEach(function(vector, row) {
        vector.forEach(function(item, column) {
            if (1 == item) {
                pairs.push([ row, column ]);
                keyPairs.push([ sourceKeys[row], targetKeys[column] ]);
            }
        });
    });
    return [ pairs, keyPairs ];
}

function edgeCrossings(pairs) {
    var crossings = 0;
    pairs.forEach(function(pair, row) {
        for (var i = row + 1; i < pairs.length; i++) if (pair[0] < pairs[i][0] && pair[1] > pairs[i][1]) crossings += 1;
    });
    return crossings;
}