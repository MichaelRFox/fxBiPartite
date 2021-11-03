/**
 * @module mouse
 * @desc Provides listeners for interaction and updates the graph accordingly.
 */

import {default as d3} from './d3Build';
import {default as glb} from './globals';
import {fx, fy, fh, fw, formatPercent} from './utilities';
import {bars} from './calculate';
import {getTransitions} from './transitions';

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
export function click (event) {

    if (state == 'unclicked') {
        state = 'clicked';
        mouseOver (event);
    } else {
        state = 'unclicked';
        mouseOut (event);
    };
}

/**
 * @function mouseOver
 * @desc Handler for *mouseenter* events. Processes the datum for the
 * current target of the event and updates the dimensions of main bar
 * and sub bar rectangles, as well as the paths for the edges.
 * @param {Object} event The DOM event being processed.
 * @event
 */
export function mouseOver (event) {

    let d = d3.select(event.currentTarget).datum();

    let newbars = bars(d);
    let [t, t1, t2] = getTransitions(glb.graph.duration(), 'mouse');

    d3.selectAll('.biPartite-mainBar')
        .filter(function(r){ return r.part===d.part && r.key === d.key})
        .select('rect')
        .style('stroke-opacity', 1);
      
    d3.selectAll('.biPartite-subBar')
        .data(newbars.subBars)
        .transition(t)
            .attr('transform', d => {return `translate(${d.x},${d.y})`})
            .select('rect')
            .attr('x', fx)
            .attr('y', fy)
            .attr('width', fw)
            .attr('height', fh);
    
    let e = d3.selectAll('.biPartite-edge')
        .data(newbars.edges);
    
    e.filter(function(t){ return t[d.part] === d.key;})
        .transition(t)
            .style('fill-opacity', glb.graph.edgeOpacity())
            .attr('d',function(d){ return d.path}); 
    
    e.filter(function(t){ return t[d.part] !== d.key;})
        .transition(t)
            .style('fill-opacity',0)
            .attr('d',function(d){ return d.path});
    
    let mainBars = d3.selectAll('.biPartite-mainBar')
        .data(newbars.mainBars)
    
    mainBars.transition(t)
        .attr('transform', d => {return `translate(${d.x},${d.y})`})
        .select('rect')
        .attr('x', fx)
        .attr('y', fy)
        .attr('width', fw)
        .attr('height', fh);

    mainBars.select('.biPartite-percentage.white')
        .transition(t1)
            .style('opacity', element => {return d.part == element.part ? 1: 0})
        .transition(t2)
            .text(element => {return element.value == 0 ? '' : formatPercent(element.percent)})
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
export function mouseOut (event) {

    let d = d3.select(event.currentTarget).datum();

    let newBars = bars();
    let [t, t1, t2] = getTransitions(glb.graph.duration(), 'mouse');

    d3.selectAll('.biPartite-mainBar')
        .filter(r => {return r.part===d.part && r.key === d.key})
        .select('rect')
        .style('stroke-opacity', 0)
      
    d3.selectAll('.biPartite-subBar')
        .data(newBars.subBars)
        .transition(t)
            .attr('transform', d => {return `translate(${d.x},${d.y})`})
            .select('rect')
            .attr('x',fx)
            .attr('y',fy)
            .attr('width',fw)
            .attr('height',fh);
        
    d3.selectAll('.biPartite-edge')
        .data(newBars.edges)
        .transition(t)
        .style('fill-opacity', glb.graph.edgeOpacity())
        .attr('d', d => {return d.path});
        
    let mainBars = d3.selectAll('.biPartite-mainBar')
        .data(newBars.mainBars)

    mainBars
        .transition(t)
            .attr('transform', d => {return `translate(${d.x},${d.y})`})
            .select('rect')
            .attr('x', fx)
            .attr('y', fy)
            .attr('width', fw)
            .attr('height', fh);

    mainBars.select('.biPartite-percentage.white')
        .transition(t1)
            .style('opacity', element => {return d.part == element.part ? 1: 0})
        .transition(t2)
            .text(element => {return element.value == 0 ? '' : formatPercent(element.percent) })
            .style('opacity', element => {return element.value == 0 ? 0 : 1});

    mainBars.select('.biPartite-label')
        .transition(t)
            .style('opacity', 1);

}