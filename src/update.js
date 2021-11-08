/**
 * @module update
 * @desc Provides a function to update the DOM with the current bars, sub bars, and edges computations.
 */

import {default as d3} from './d3Build';
import {formatPercent, fx, fy, fh, fw, collapsePath} from './utilities';
import {interpolatePath} from 'd3-interpolate-path';
import {getTransitions} from './transitions';
import {default as glb} from './globals';
import {textColor, fill, subBarColors} from './color';
import {getFont} from './font';

/**
 * @function update
 * @desc Takes the computed positions of the graph elements and updates the DOM as appropriate.
 * @param {Array} bars An array of objects containing key/value pairs for the height (number), width (number),
 * x (number), y (number), value (number), percent (number), key (string), and part (string) for each bar and sub bar.
 * @param {boolean} noDelay Whether to use transitions during the update. This is set to true during container size changes.
 */
export function update (bars, noDelay = false) {
    let [t, t1, t2] = noDelay == true ? getTransitions(0, 'update') : getTransitions(glb.graph.duration(), 'update');

    let subBars = d3.select('#biPartite-subBar')
        .selectAll('.biPartite-subBar')
            .data(bars.subBars);

    subBars.enter()
        .append('g')
            .attr('class', 'biPartite-subBar')
            .attr('transform', d => `translate(${d.x}, ${d.y})`)
            .append('rect')
                .style('fill', d => fill(d))
                .style('shape-rendering', 'crispEdges')
                .transition(t)
                    .attr('x', fx)
                    .attr('y', fy)
                    .attr('width', fw)
                    .attr('height', fh);

    subBars.exit()
        .transition(t)
            .on('start', (d, i, nodes) => {
                d3.select(nodes[i]).remove();
            });

    subBars
        .transition(t)
        .attr('transform', d => `translate(${d.x}, ${d.y})`)
        .select('rect')
            .style('fill', d => fill(d))
            .attr('x', fx)
            .attr('y', fy)
            .attr('width', fw)
            .attr('height', fh);

    let edges = d3.select('#biPartite-edge')
        .selectAll('.biPartite-edge')
        .data(bars.edges);
  
    edges.enter()
        .append('path')
        // .merge(edges)
        .attr('class','biPartite-edge')
        .style('fill', d => fill(d))
        .style('fill-opacity', glb.graph.edgeOpacity())
        .attr('d', d => collapsePath(d.path))
        .transition(t)
            .attrTween('d', (d, i, nodes) => {
                return interpolatePath(d3.select(nodes[i]).attr('d'), d.path);                
            });

    edges.exit()
        .transition(t)
            .on('start', (d, i, nodes) => {
                d3.select(nodes[i]).remove();
            });

    edges
        .transition(t)
            .style('fill', d => fill(d))
            .attrTween('d', (d, i, nodes) => {
                return interpolatePath(d3.select(nodes[i]).attr('d'), d.path);                
            });

    let mainBars = d3.select('#biPartite-mainBar')
        .selectAll('.biPartite-mainBar')
        .data(bars.mainBars)
       
    let mainBarsEnter = mainBars.enter()
        .append('g')
            .attr('transform', d => `translate(${d.x}, ${d.y})`)
            .attr('class','biPartite-mainBar')
            .on(glb.eventTypeOver, glb.eventListenerOver)
            .on(glb.eventTypeOut, glb.eventListenerOut);

    mainBarsEnter
        .append('rect')
            .attr('id', (d, i) => `mainBar${i}`)
            .attr('x', fx)
            .attr('y', fy)
            .attr('width', fw)
            .attr('height', fh)
            .style('fill-opacity', 0);

    mainBarsEnter
        .append('text')
            .attr('class','biPartite-label')
            .attr('x', d => (d.part == 'primary'? -glb.LabelOffset : glb.LabelOffset))
            .attr('dy', '0.35em')
            .style('opacity', 0)
            .style('fill', glb.labelColor)
            .style('user-select', 'none')
            .text(d => d.key)
                .attr('text-anchor', d => (d.part == 'primary' ? 'end': 'start'))
                .attr('transform', d => glb.graph.orient() == 'vertical' ? 'rotate(0)' : 'rotate(90)')
                .transition(t)
                    .style('opacity', 1);

    mainBarsEnter.each ((d, i) => {
            d3.select('#percentBlackG')
                .append('g')
                    .attr('id', `percentBlack${i}`)
                    .attr('transform', `translate(${d.x}, ${d.y})`)
                    .append('text')
                        .attr('class', 'biPartite-percentage black')
                        .attr('dy', '0.35em')
                        .style('fill', glb.labelColor)
                        .style('opacity', 0)
                        .style('pointer-events', 'none')
                        .style('user-select', 'none')
                        .style('font', getFont('biPartite-percentage'))
                        .text(formatPercent(d.percent))
                            .attr('transform', glb.graph.orient() == 'vertical' ? 'rotate(0)' : 'rotate(90)')
                            .attr('text-anchor', 'middle')
                            .transition(t)
                                .style('opacity', 1);
    });

    mainBarsEnter
        .append('text')
            .attr('class', 'biPartite-percentage white')
            .attr('dy', '0.35em')
            .style('font', getFont('biPartite-percentage'))
            .style('opacity', 0)
            .style('fill', d => {
                if (d.part == 'primary') {
                    return textColor([fill(d)]);            
                } else {
                    return textColor(subBarColors(bars.subBars, d));
                };
            })
            .style('pointer-events', 'none')
            .style('user-select', 'none')
            .style('clip-path', (d, i) => `url(#clip${i})`)
            .text(function(d){ return formatPercent(d.percent)})
                .attr('transform', d => glb.graph.orient() == 'vertical' ? 'rotate(0)' : 'rotate(90)')
                .attr('text-anchor', 'middle')
                .transition(t)
                    .style('opacity', 1);

    mainBars.each ((d, i) => {
            d3.select(`#percentBlack${i}`)
                .attr('transform', `translate(${d.x}, ${d.y})`)
                .select('text')
                    .text(formatPercent(d.percent));
    });

    mainBars
        .attr('transform', d => `translate(${d.x}, ${d.y})`)
        .select('rect')
            .attr('x', fx)
            .attr('y', fy)
            .attr('width', fw)
            .attr('height', fh);

    mainBars
        .select('.biPartite-label')
            .transition(t1)
                .style('opacity', 0)
            .transition(t2)
                .attr('x', d => d.part == 'primary'? -glb.LabelOffset : glb.LabelOffset)
                .attr('text-anchor', d => (d.part == 'primary' ? 'end': 'start'))
                .text(d => d.key)
                .style('opacity', 1);

    mainBars
        .select('.biPartite-percentage.white')
            .text(d => formatPercent(d.percent));

    mainBarsEnter.each ((d, i) => {
            d3.select('#svg').select('defs')
                .append('clipPath')
                    .attr('id', `clip${i}`)
                    .append('use')
                        .attr('xlink:href', `#mainBar${i}`);
    });

    mainBars.exit()
        .transition(t)
            .on('start', (d, i, nodes) => {
                d3.select(nodes[i]).remove()
            });

    mainBars.exit().each ((d, i) => {
            d3.select(`#clip${i}`)
                .remove();
            d3.select(`#percentBlack${i}`)
                .remove();
    });

 }

