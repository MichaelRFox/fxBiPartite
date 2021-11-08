/**
 * @module mouse
 * @desc Provides listeners for interaction and updates the graph accordingly.
 */

import {default as d3} from './d3Build';
import {default as glb} from './globals';
import {fx, fy, fh, fw, formatPercent} from './utilities';
import {bars} from './calculate';
import {getTransitions} from './transitions';
import {fill, textColor, subBarColors} from './color.js';

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

    let datum = d3.select(event.currentTarget).datum();
    interact (datum, 'in');
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

    let datum = d3.select(event.currentTarget).datum();
    interact(datum, 'out');
}

/**
 * @function interact
 * @desc Transitions the filtering of bars and edges in response to mouse over and mouse out events.
 * @param {Object} datum The data object selected for interaction.
 * @param {string} state The state of the interaction, one of ['in' | 'out'].
 * @since v2.0.0
 */
function interact (datum, state) {

    let newBars = state == 'in' ? bars(datum) : bars();
    let [t, t1, t2] = getTransitions(glb.graph.duration(), 'mouse');

    d3.selectAll('.biPartite-mainBar')
        .filter(r => r.part === datum.part && r.key === datum.key)
        .select('rect')
        .style('stroke-opacity', state == 'in' ? 1 : 0)
      
    d3.selectAll('.biPartite-subBar')
        .data(newBars.subBars)
        .transition(t)
            .attr('transform', d => `translate(${d.x},${d.y})`)
            .select('rect')
            .attr('x', fx)
            .attr('y', fy)
            .attr('width', fw)
            .attr('height', fh);
        
    if (state == 'in') {
        let edges = d3.selectAll('.biPartite-edge')
            .data(newBars.edges);
        
        edges.filter(t => t[datum.part] === datum.key)
            .transition(t)
                .style('fill-opacity', glb.graph.edgeOpacity())
                .attr('d', d => d.path); 
        
        edges.filter(t => t[datum.part] !== datum.key)
            .transition(t)
                .style('fill-opacity', 0)
                .attr('d', d => d.path);

    } else {
        d3.selectAll('.biPartite-edge')
            .data(newBars.edges)
            .transition(t)
                .style('fill-opacity', glb.graph.edgeOpacity())
                .attr('d', d => d.path);
    };
        
    let mainBars = d3.selectAll('.biPartite-mainBar')
        .data(newBars.mainBars)

    mainBars
        .transition(t)
            .attr('transform', d => `translate(${d.x},${d.y})`)
            .select('rect')
            .attr('x', fx)
            .attr('y', fy)
            .attr('width', fw)
            .attr('height', fh);

    mainBars.select('.biPartite-percentage.white')
        .transition(t1)
            .style('opacity', element => datum.part == element.part ? 1: 0)
        .transition(t2)
            .text(element => element.value == 0 ? '' : formatPercent(element.percent))
            .style('fill', d => {
                return d.part == 'secondary' ? textColor(subBarColors(newBars.subBars, d)) : textColor([fill(d)]);
            })
            .style('opacity', element => element.value == 0 ? 0 : 1);

    mainBars.each ((d, i) => {
            d3.select(`#percentBlack${i}`)
                .transition(t)
                .attr('transform', `translate(${d.x},${d.y})`);
            d3.select(`#percentBlack${i}`).select('text')
                .transition(t1)
                    .style('opacity', 0)
                .transition(t2)
                    .text(d.value == 0 ? '' : formatPercent(d.percent))
                    .style('opacity', d.value == 0 ? 0 : 1);
    });

    mainBars.select('.biPartite-label')
        .transition(t)
            .style('opacity', d => d.value == 0 ? 0 : 1);


}