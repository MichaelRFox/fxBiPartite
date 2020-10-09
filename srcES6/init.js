import {default as d3} from './d3Build.js';
import {biPartite} from './biPartite.js';

export function init () {
 
    let svg = d3.select(biPartite.container())
        .append('svg')
            .attr('id', 'svg')
            .attr('width', '100%')
            .attr('height', '100%');

    let svgG = svg
        .append('g')
        .attr('class', 'biPartite')
        .attr('id', 'svgG');

    svgG
        .append('g')
        .attr('id', 'biPartite-subBar');

    svgG
        .append('g')
        .attr('id','biPartite-edge');

    svgG
        .append('g')
        .attr('id','biPartite-mainBar');

    return svgG;

}