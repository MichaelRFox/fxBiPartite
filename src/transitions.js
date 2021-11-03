/**
 * @module transitions
 * @desc Provides a function for establishing D3 transition objects.
 */

import {default as d3} from './d3Build';

/**
 * @function getTransitions
 * @desc Retrieves three D3 transition objects for use in interaction and graph rendering.
 * @param {Object} t D3 transition object for bars and edges.
 * @param {Object} t1 D3 transition object for first half of label transition.
 * @param {Object} t2 D3 transition object for second half of label transition.
 * @returns {Array} An Array with three D3 transition objects.
 */
export function getTransitions(duration, name) {

    let t = d3.transition(name).duration(duration);
    let t1 = d3.transition(name).duration(duration / 2).ease(d3.easeLinear);
    let t2 = d3.transition(name).ease(d3.easeLinear);

    return [t, t1, t2];
}
