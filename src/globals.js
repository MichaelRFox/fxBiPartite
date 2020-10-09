import { default as d3 } from './d3Build.js';

import { mouseOver, mouseOut, click } from './mouse.js';

var data = [];

var container = document.body;

var fillColors = [ '#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3' ];

var sort = 'alpha';

var sourceKeys = [];

var targetKeys = [];

var orient = 'vertical';

var pad = 1;

var duration = 750;

var edgeOpacity = .4;

var edgeMode = 'curved';

var refresh = true;

var width = 0;

var height = 0;

var minWidth = 0;

var minHeight = 0;

var labelOffset = 0;

var eventTypeOver = 'mouseenter';

var eventTypeOut = 'mouseleave';

var eventListenerOver = mouseOver;

var eventListenerOut = mouseOut;

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
};