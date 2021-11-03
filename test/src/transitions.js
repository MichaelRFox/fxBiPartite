'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var d3Build = require('./d3Build.js');

/**
 * @module transitions
 * @desc Provides a function for establishing D3 transition objects.
 */

/**
 * @function getTransitions
 * @desc Retrieves three D3 transition objects for use in interaction and graph rendering.
 * @param {Object} t D3 transition object for bars and edges.
 * @param {Object} t1 D3 transition object for first half of label transition.
 * @param {Object} t2 D3 transition object for second half of label transition.
 * @returns {Array} An Array with three D3 transition objects.
 */
function getTransitions(duration, name) {

    let t = d3Build.transition(name).duration(duration);
    let t1 = d3Build.transition(name).duration(duration / 2).ease(d3Build.easeLinear);
    let t2 = d3Build.transition(name).ease(d3Build.easeLinear);

    return [t, t1, t2];
}

exports.getTransitions = getTransitions;
