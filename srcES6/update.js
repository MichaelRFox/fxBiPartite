import {default as d3} from './d3Build.js';
import {formatPercent, fx, fy, fh, fw, collapsePath, fill} from './utilities.js';
import {biPartite} from './biPartite.js';
import {edgeVert, edgeHoriz} from './calculate.js';
import {interpolatePath} from 'd3-interpolate-path';
import {getTransitions} from './transitions.js';
import {default as glb} from './globals.js';
import {mouseOver, mouseOut, click} from './mouse.js';
import {textColor} from './color.js';
import {getFont} from './font.js';

export function update (bars, noDelay = false) {

    let [t, t1, t2] = noDelay == true ? getTransitions(0, 'update') : getTransitions(biPartite.duration(), 'update');

    let subBars = d3.select('#biPartite-subBar')
        .selectAll('.biPartite-subBar')
            .data(bars.subBars);

    subBars.enter()
        .append('g')
            .attr('class', 'biPartite-subBar')
            .attr('transform', d => {return `translate(${d.x}, ${d.y})`})
            .append('rect')
                .style('fill', d => {return fill(d)})
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
        .attr('transform', d => {return `translate(${d.x}, ${d.y})`})
        .select('rect')
            .style('fill', d => {return fill(d)})
            .attr('x', fx)
            .attr('y', fy)
            .attr('width', fw)
            .attr('height', fh);

    let edges = d3.select('#biPartite-edge')
        .selectAll('.biPartite-edge')
        .data(bars.edges);
  
    edges.enter()
        .append('path')
        .merge(edges)
        .attr('class','biPartite-edge')
        .style('fill', d => {return fill(d)})
        .style('fill-opacity', biPartite.edgeOpacity())
        .attr('d', d => {return collapsePath(d.path)})
        .transition(t)
            .attrTween('d', function (d) {
                return interpolatePath(d3.select(this).attr('d'), d.path);                
            });

    edges.exit()
        .transition(t)
            .on('start', (d, i, nodes) => {
                d3.select(nodes[i]).remove();
            });

    edges
        .transition(t)
            .style('fill', d => {return fill(d)})
            .attrTween('d', (d, i, nodes) => {
                return interpolatePath(d3.select(nodes[i]).attr('d'), d.path);                
            });

    let mainBars = d3.select('#biPartite-mainBar')
        .selectAll('.biPartite-mainBar')
        .data(bars.mainBars)
       
    let mainBarsEnter = mainBars.enter()
        .append('g')
            .attr('transform', d => {return `translate(${d.x}, ${d.y})`})
            .attr('class','biPartite-mainBar')
            .on(glb.eventTypeOver, glb.eventListenerOver)
            .on(glb.eventTypeOut, glb.eventListenerOut);

    mainBarsEnter
        .append('rect')
            .attr('id', (d, i) => {return `mainBar${i}`})
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
            .text(d => d.key)
                .attr('text-anchor', d => (d.part == 'primary' ? 'end': 'start'))
                .attr('transform', d => {return biPartite.orient() == 'vertical' ? 'rotate(0)' : 'rotate(90)'})
                .transition(t)
                    .style('opacity', 1);

    // mainBarsEnter
    //     .append('text')
    //         .attr('class', 'biPartite-percentage black')
    //         .attr('dy', '0.35em')
    //         //.style('fill', 'black')
    //         .style('opacity', 0)
    //         .style('pointer-events', 'none')
    //         .style('font', getFont('biPartite-percentage'))
    //         .text(function(d) {return formatPercent(d.percent)})
    //             .attr('transform', d => {return biPartite.orient() == 'vertical' ? 'rotate(0)' : 'rotate(90)'})
    //             .transition(t)
    //                 .style('opacity', 1);

    mainBarsEnter
        .append('text')
            .attr('class', 'biPartite-percentage white')
            .attr('dy', '0.35em')
            //.style('fill', 'white')
            // .style('fill', d => {textColor(fill(d))})
            .style('font', getFont('biPartite-percentage'))
            .style('opacity', 0)
            .style('pointer-events', 'none')
            .style('clip-path', (d, i) => {return `url(#clip${i})`})
            .text(function(d){ return formatPercent(d.percent)})
                .attr('transform', d => {return biPartite.orient() == 'vertical' ? 'rotate(0)' : 'rotate(90)'})
                .transition(t)
                    .style('opacity', 1);

    mainBars
        .attr('transform', d => {return `translate(${d.x}, ${d.y})`})
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
                .attr('x', d => (d.part == 'primary'? -glb.LabelOffset : glb.LabelOffset))
                .attr('text-anchor', d => (d.part == 'primary' ? 'end': 'start'))
                .text(d => d.key)
                .style('opacity', 1);

    // mainBars
    //     .select('.biPartite-percentage.black')
    //         .text(function(d) {return formatPercent(d.percent)})

    mainBars
        .select('.biPartite-percentage.white')
            .text(function(d) {return formatPercent(d.percent)})


    // mainBarsEnter.each ((d, i) => {
    //     d3.select('#svg')
    //         .append('clipPath')
    //             .attr('id', `clip${i}`)
    //             .append('use')
    //             .attr('xlink:href', `#mainBar${i}`); 
    //     });

    mainBars.exit()
        .transition(t)
            .on('start', (d, i, nodes) => {
                d3.select(nodes[i]).remove()
            });

    // mainBars.exit().each ((d, i) => {
    //     d3.select(`#clip${i}`)
    //     .remove()
    // })
 }

