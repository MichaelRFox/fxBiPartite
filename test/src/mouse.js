'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var d3Build = require('./d3Build.js');
var globals = require('./globals.js');
var utilities = require('./utilities.js');
var calculate = require('./calculate.js');
var transitions = require('./transitions.js');

/**
 * @module mouse
 * @desc Provides listeners for interaction and updates the graph accordingly.
 */

/**
 * Holds the current state of the interaction
 * @type boolean
 * @inner
 */
let state = 'unclicked';

/**
 * @function click
 * @desc Handler for click and double click events. passes off to
 * [mouseOver]{@link module:mouse~mouseOver} and
 * [mouseOut]{@link module:mouse~mouseOut} functions as appropriate.
 * @param {Object} event The DOM event being processed.
 * @event
 */
function click (event) {

    if (state == 'unclicked') {
        state = 'clicked';
        mouseOver (event);
    } else {
        state = 'unclicked';
        mouseOut (event);
    }}

/**
 * @function mouseOver
 * @desc Handler for *mouseenter* events. Processes the datum for the
 * current target of the event and updates the dimensions of main bar
 * and sub bar rectangles, as well as the paths for the edges.
 * @param {Object} event The DOM event being processed.
 * @event
 */
function mouseOver (event) {

    let d = d3Build.select(event.currentTarget).datum();

    let newbars = calculate.bars(d);
    let [t, t1, t2] = transitions.getTransitions(globals.graph.duration(), 'mouse');

    d3Build.selectAll('.biPartite-mainBar')
        .filter(function(r){ return r.part===d.part && r.key === d.key})
        .select('rect')
        .style('stroke-opacity', 1);
      
    d3Build.selectAll('.biPartite-subBar')
        .data(newbars.subBars)
        .transition(t)
            .attr('transform', d => {return `translate(${d.x},${d.y})`})
            .select('rect')
            .attr('x', utilities.fx)
            .attr('y', utilities.fy)
            .attr('width', utilities.fw)
            .attr('height', utilities.fh);
    
    let e = d3Build.selectAll('.biPartite-edge')
        .data(newbars.edges);
    
    e.filter(function(t){ return t[d.part] === d.key;})
        .transition(t)
            .style('fill-opacity', globals.graph.edgeOpacity())
            .attr('d',function(d){ return d.path}); 
    
    e.filter(function(t){ return t[d.part] !== d.key;})
        .transition(t)
            .style('fill-opacity',0)
            .attr('d',function(d){ return d.path});
    
    let mainBars = d3Build.selectAll('.biPartite-mainBar')
        .data(newbars.mainBars);
    
    mainBars.transition(t)
        .attr('transform', d => {return `translate(${d.x},${d.y})`})
        .select('rect')
        .attr('x', utilities.fx)
        .attr('y', utilities.fy)
        .attr('width', utilities.fw)
        .attr('height', utilities.fh);

    mainBars.select('.biPartite-percentage.white')
        .transition(t1)
            .style('opacity', element => {return d.part == element.part ? 1: 0})
        .transition(t2)
            .text(element => {return element.value == 0 ? '' : utilities.formatPercent(element.percent)})
            .style('opacity', element => {return element.value == 0 ? 0 : 1});

    mainBars.select('.biPartite-label')
        .transition(t)
            .style('opacity', d => {return d.value == 0 ? 0 : 1});

}

/**
 * @function mouseOut
 * @desc Handler for *mouseleave* events. Processes the datum for the
 * current target of the event and updates the dimensions of main bar
 * and sub bar rectangles, as well as the paths for the edges.
 * @param {Object} event The DOM event being processed.
 * @event
 */
function mouseOut (event) {

    let d = d3Build.select(event.currentTarget).datum();

    let newBars = calculate.bars();
    let [t, t1, t2] = transitions.getTransitions(globals.graph.duration(), 'mouse');

    d3Build.selectAll('.biPartite-mainBar')
        .filter(r => {return r.part===d.part && r.key === d.key})
        .select('rect')
        .style('stroke-opacity', 0);
      
    d3Build.selectAll('.biPartite-subBar')
        .data(newBars.subBars)
        .transition(t)
            .attr('transform', d => {return `translate(${d.x},${d.y})`})
            .select('rect')
            .attr('x',utilities.fx)
            .attr('y',utilities.fy)
            .attr('width',utilities.fw)
            .attr('height',utilities.fh);
        
    d3Build.selectAll('.biPartite-edge')
        .data(newBars.edges)
        .transition(t)
        .style('fill-opacity', globals.graph.edgeOpacity())
        .attr('d', d => {return d.path});
        
    let mainBars = d3Build.selectAll('.biPartite-mainBar')
        .data(newBars.mainBars);

    mainBars
        .transition(t)
            .attr('transform', d => {return `translate(${d.x},${d.y})`})
            .select('rect')
            .attr('x', utilities.fx)
            .attr('y', utilities.fy)
            .attr('width', utilities.fw)
            .attr('height', utilities.fh);

    mainBars.select('.biPartite-percentage.white')
        .transition(t1)
            .style('opacity', element => {return d.part == element.part ? 1: 0})
        .transition(t2)
            .text(element => {return element.value == 0 ? '' : utilities.formatPercent(element.percent) })
            .style('opacity', element => {return element.value == 0 ? 0 : 1});

    mainBars.select('.biPartite-label')
        .transition(t)
            .style('opacity', 1);

}

exports.click = click;
exports.mouseOut = mouseOut;
exports.mouseOver = mouseOver;
