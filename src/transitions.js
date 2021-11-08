/**
 * @module transitions
 * @desc Provides a function for establishing D3 transition objects.
 */

import {default as d3} from './d3Build';

/**
 * @function getTransitions
 * @desc Retrieves three D3 transition objects for use in interaction and graph rendering.
 * @param {number} duration The transition duration in milliseconds. **Default**: 750..
 * @param {string} name A unique name for the transitions.
 * @returns {Array} An Array with three D3 transition objects.
 */
export function getTransitions(duration, name) {

    let t = d3.transition(name).duration(duration);
    let t1 = d3.transition(name).duration(duration / 2).ease(d3.easeLinear);
    let t2 = d3.transition(name).ease(d3.easeLinear);

    return [t, t1, t2];
}
