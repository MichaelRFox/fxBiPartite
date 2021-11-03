'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var d3Build = require('./d3Build.js');
var utilities = require('./utilities.js');
var d3InterpolatePath = require('./node_modules/d3-interpolate-path/build/d3-interpolate-path.mjs.js');
var transitions = require('./transitions.js');
var globals = require('./globals.js');
var color = require('./color.js');
var font = require('./font.js');

/**
 * @module update
 * @desc Provides a function to update the DOM with the current bars, sub bars, and edges computations.
 */

/**
 * @function update
 * @desc Takes the computed positions of the graph elements and updates the DOM as appropriate.
 * @param {Array} bars An array of objects containing key/value pairs for the height (number), width (number),
 * x (number), y (number), value (number), percent (number), key (string), and part (string) for each bar and sub bar.
 * @param {boolean} noDelay Whether to use transitions during the update. This is set to true during container size changes.
 */
function update (bars, noDelay = false) {
    let [t, t1, t2] = noDelay == true ? transitions.getTransitions(0, 'update') : transitions.getTransitions(globals.graph.duration(), 'update');

    let subBars = d3Build.select('#biPartite-subBar')
        .selectAll('.biPartite-subBar')
            .data(bars.subBars);

    subBars.enter()
        .append('g')
            .attr('class', 'biPartite-subBar')
            .attr('transform', d => {return `translate(${d.x}, ${d.y})`})
            .append('rect')
                .style('fill', d => {return color.fill(d)})
                .style('shape-rendering', 'crispEdges')
                .transition(t)
                    .attr('x', utilities.fx)
                    .attr('y', utilities.fy)
                    .attr('width', utilities.fw)
                    .attr('height', utilities.fh);

    subBars.exit()
        .transition(t)
            .on('start', (d, i, nodes) => {
                d3Build.select(nodes[i]).remove();
            });

    subBars
        .transition(t)
        .attr('transform', d => {return `translate(${d.x}, ${d.y})`})
        .select('rect')
            .style('fill', d => {return color.fill(d)})
            .attr('x', utilities.fx)
            .attr('y', utilities.fy)
            .attr('width', utilities.fw)
            .attr('height', utilities.fh);

    let edges = d3Build.select('#biPartite-edge')
        .selectAll('.biPartite-edge')
        .data(bars.edges);
  
    edges.enter()
        .append('path')
        // .merge(edges)
        .attr('class','biPartite-edge')
        .style('fill', d => {return color.fill(d)})
        .style('fill-opacity', globals.graph.edgeOpacity())
        .attr('d', d => {return utilities.collapsePath(d.path)})
        .transition(t)
            // .attrTween('d', function (d) {
            //     return interpolatePath(d3.select(this).attr('d'), d.path);                
            // });
            .attrTween('d', (d, i, nodes) => {
                return d3InterpolatePath.interpolatePath(d3Build.select(nodes[i]).attr('d'), d.path);                
            });

    edges.exit()
        .transition(t)
            .on('start', (d, i, nodes) => {
                d3Build.select(nodes[i]).remove();
            });

    edges
        .transition(t)
            .style('fill', d => {return color.fill(d)})
            .attrTween('d', (d, i, nodes) => {
                return d3InterpolatePath.interpolatePath(d3Build.select(nodes[i]).attr('d'), d.path);                
            });

    let mainBars = d3Build.select('#biPartite-mainBar')
        .selectAll('.biPartite-mainBar')
        .data(bars.mainBars);
       
    let mainBarsEnter = mainBars.enter()
        .append('g')
            .attr('transform', d => {return `translate(${d.x}, ${d.y})`})
            .attr('class','biPartite-mainBar')
            .on(globals.eventTypeOver, globals.eventListenerOver)
            .on(globals.eventTypeOut, globals.eventListenerOut);

    mainBarsEnter
        .append('rect')
            .attr('id', (d, i) => {return `mainBar${i}`})
            .attr('x', utilities.fx)
            .attr('y', utilities.fy)
            .attr('width', utilities.fw)
            .attr('height', utilities.fh)
            .style('fill-opacity', 0);

    mainBarsEnter
        .append('text')
            .attr('class','biPartite-label')
            .attr('x', d => (d.part == 'primary'? -globals.LabelOffset : globals.LabelOffset))
            .attr('dy', '0.35em')
            .style('opacity', 0)
            .text(d => d.key)
                .attr('text-anchor', d => (d.part == 'primary' ? 'end': 'start'))
                .attr('transform', d => {return globals.graph.orient() == 'vertical' ? 'rotate(0)' : 'rotate(90)'})
                .transition(t)
                    .style('opacity', 1);

    mainBarsEnter
        .append('text')
            .attr('class', 'biPartite-percentage white')
            .attr('dy', '0.35em')
            .style('font', font.getFont('biPartite-percentage'))
            .style('opacity', 0)
            .style('pointer-events', 'none')
            .style('clip-path', (d, i) => {return `url(#clip${i})`})
            .text(function(d){ return utilities.formatPercent(d.percent)})
                .attr('transform', d => {return globals.graph.orient() == 'vertical' ? 'rotate(0)' : 'rotate(90)'})
                .transition(t)
                    .style('opacity', 1);

    mainBars
        .attr('transform', d => {return `translate(${d.x}, ${d.y})`})
        .select('rect')
            .attr('x', utilities.fx)
            .attr('y', utilities.fy)
            .attr('width', utilities.fw)
            .attr('height', utilities.fh);

    mainBars
        .select('.biPartite-label')
            .transition(t1)
                .style('opacity', 0)
            .transition(t2)
                .attr('x', d => (d.part == 'primary'? -globals.LabelOffset : globals.LabelOffset))
                .attr('text-anchor', d => (d.part == 'primary' ? 'end': 'start'))
                .text(d => d.key)
                .style('opacity', 1);

    mainBars
        .select('.biPartite-percentage.white')
            .text(function(d) {return utilities.formatPercent(d.percent)});

    mainBars.exit()
        .transition(t)
            .on('start', (d, i, nodes) => {
                d3Build.select(nodes[i]).remove();
            });
 }

exports.update = update;
