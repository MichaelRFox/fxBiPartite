'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var simplexProblem = require('./simplexProblem.js');
var simplex = require('./node_modules/fxsimplex/src/simplex.js');

/**
 * @module bpMap
 * @desc Provides a single function to map data values to coordinates.
 */

/**
 * @function bpMap
 * @desc Uses a simplex function to optimize the layout of the biPartite graph nodes.
 * @param {Array} array An array of objects, each containing two key/value pairs for
 * the key (string) and value (number) for each bar.
 * @param {number} pad The spacing in pixels between each bar.
 * @param {number} min The minimum height in pixels for each bar.
 * @param {number} start The starting position...usually 0.
 * @param {number} end The ending position in pixels...normally the container height.
 * @returns {Array} An array of objects, each containing key/value pairs for the computed
 * start, end, and pad for each bar.
 */
function bpMap (array, pad, min, start, end) {

    let ret = [];

    let data = array.reduce((a, b) => {return b.value > 1e-5 ? a.concat(b.value) : a}, []);
    let len = data.length;
    let totalPad = len * pad * 2;
    let availableSize = end - start - totalPad;
    let totalSize = data.reduce((a, b) => {return a + b}, 0);

    const [objective, constraints] = simplexProblem.buildSimplexProblem(data, min, availableSize);
    let {solution, result} = simplex(objective, constraints);
   
    let ratio;
    switch (result) {
        case 'unbounded':
        case 'infeasible': 
            ratio = availableSize / totalSize;
            break;
        case '':
            ratio = 0;
            break;
        default:
            ratio = solution.reduce((a,b) => {return b[0] == 'r' ? b[1] : a}, 0);
    }
    let b = start;
    let o = ratio;
    array.forEach (d => { 
        let v = d.value * o;
        let adjustedMin = d.value < 1e-5 ? 0 : min;
        let adjustedP = d.value < 1e-5 ? 0 : pad;
        ret.push({
            s: b + adjustedP + (v < adjustedMin ? 0.5 * (adjustedMin - v) : 0),
            e: b + adjustedP + (v < adjustedMin ? 0.5 * (adjustedMin + v) : v),
            p: totalSize < 1e-5 ? 0 : d.value / totalSize
        }); 
        b += 2 * adjustedP + (v < adjustedMin ? adjustedMin : v); 
    }); 
    return ret;
}

exports.bpMap = bpMap;
