import {default as d3} from './d3Build.js';
import {mouseOver, mouseOut, click} from './mouse.js';

let data = [];
let container;
let fillColors = ['#66c2a5','#fc8d62','#8da0cb','#e78ac3','#a6d854','#ffd92f','#e5c494','#b3b3b3'];
let sort = 'alpha'; // [alpha | barycentric | sh | none]
let sourceKeys = [];
let targetKeys = [];
let orient = 'vertical'; // vertical | horizontal
let pad = 1;
let duration = 750;
let edgeOpacity = 0.4;
let edgeMode = 'curved'; // curved | straight
let refresh = true;
let width = 0;
let height = 0;
let minWidth = 0;
let minHeight = 0;
let labelOffset = 0;
let eventTypeOver = 'mouseenter';
let eventTypeOut = 'mouseleave';
let eventListenerOver = mouseOver;
let eventListenerOut = mouseOut;

export default {
    data,
    container, 
    fillColors, 
    sort,
    sourceKeys,
    targetKeys,
    orient, 
    pad, 
    duration, 
    edgeOpacity, 
    edgeMode, 
    refresh,
    width,
    height,
    minWidth,
    minHeight,
    labelOffset,
    eventTypeOver,
    eventTypeOut,
    eventListenerOver,
    eventListenerOut
}