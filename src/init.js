/**
 * @module init
 * @desc Provides one function to initialize the svg environment.
 */
import {default as d3} from './d3Build.js';
import {default as glb} from './globals.js';

/**
 * @function init
 * @desc Initializes the svg for the graph.
 */
export function init () {
    let svg = d3.select(glb.graph.container())
        .append('svg')
            .attr('id', 'svg')
            .attr('width', '100%')
            .attr('height', '100%');

    svg.append('defs')

    let svgG = svg
        .append('g')
        .attr('class', 'biPartite')
        .attr('id', 'svgG');

    svgG.append('g').attr('id', 'percentBlackG');

    svgG.append('g').attr('id', 'biPartite-subBar');

    svgG.append('g').attr('id','biPartite-edge');

    svgG.append('g').attr('id','biPartite-mainBar');

    return svgG;
}