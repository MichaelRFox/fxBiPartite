'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var d3Build = require('./d3Build.js');
var globals = require('./globals.js');

/**
 * @module init
 * @desc Provides one function to initialize the svg environment.
 */

/**
 * @function init
 * @desc Initializes the svg for the graph.
 */
function init () {
    let svg = d3Build.select(globals.graph.container())
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

exports.init = init;
