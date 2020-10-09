import { default as d3 } from './d3Build.js';

export function getTransitions(duration, name) {
    var t = d3.transition(name).duration(duration);
    var t1 = d3.transition(name).duration(duration / 2).ease(d3.easeLinear);
    var t2 = d3.transition(name).ease(d3.easeLinear);
    return [ t, t1, t2 ];
}