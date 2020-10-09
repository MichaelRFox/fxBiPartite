import {default as d3} from './d3Build.js';
import {biPartite} from './biPartite.js';
import {update} from './update.js';
import {fx, fy, fh, fw, formatPercent, bars} from './utilities.js';
import {getTransitions} from './transitions.js';

let state = 'unclicked';

export function click (d) {

    if (state == 'unclicked') {
        state = 'clicked';
        mouseOver (d);
    } else {
        state = 'unclicked';
        mouseOut (d);
    };

}

export function mouseOver (d) {

    let newbars = bars(d);
    let [t, t1, t2] = getTransitions(biPartite.duration(), 'mouse');

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
            .style('fill-opacity',biPartite.edgeOpacity())
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
            .style('opacity', 0)
        .transition(t2)
            .text(function(d){ return d.value == 0 ? '' : formatPercent(d.percent) })
            .style('opacity', d => {return d.value == 0 ? 0 : 1});

    // mainBars.select('.biPartite-percentage.black')
    //     .transition(t1)
    //         .style('opacity', 0)
    //     .transition(t2)
    //         .text(function(d){ return d.value == 0 ? '' : formatPercent(d.percent) })
    //         .style('opacity', d => {return d.value == 0 ? 0 : 1});

    mainBars.select('.biPartite-label')
        .transition(t)
            .style('opacity', d => {return d.value == 0 ? 0 : 1});

}

export function mouseOut (d) {

    // assembling = true;

    let newBars = bars();
    let [t, t1, t2] = getTransitions(biPartite.duration(), 'mouse');

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
        .style('fill-opacity', biPartite.edgeOpacity())
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
            .style('opacity', 0)
        .transition(t2)
            .text(function(d){ return d.value == 0 ? '' : formatPercent(d.percent) })
            .style('opacity', d => {return d.value == 0 ? 0 : 1});

    // mainBars.select('.biPartite-percentage.black')
    //     .transition(t1)
    //         .style('opacity', 0)
    //     .transition(t2)
    //         .text(function(d){ return d.value == 0 ? '' : formatPercent(d.percent) })
    //         .style('opacity', d => {return d.value == 0 ? 0 : 1});

    mainBars.select('.biPartite-label')
        .transition(t)
            .style('opacity', 1);

    // setTimeout(d => {
    //     assembling = false;
    // }, biPartite.duration());

}