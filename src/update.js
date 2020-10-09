function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
    throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if ('string' === typeof o) return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if ('Object' === n && o.constructor) n = o.constructor.name;
    if ('Map' === n || 'Set' === n) return Array.from(o);
    if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
    if (null == len || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
}

function _iterableToArrayLimit(arr, i) {
    if ('undefined' === typeof Symbol || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally {
        try {
            if (!_n && null != _i['return']) _i['return']();
        } finally {
            if (_d) throw _e;
        }
    }
    return _arr;
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}

import { default as d3 } from './d3Build.js';

import { formatPercent, fx, fy, fh, fw, collapsePath, fill } from './utilities.js';

import { biPartite } from './biPartite.js';

import { edgeVert, edgeHoriz } from './calculate.js';

import { interpolatePath } from 'd3-interpolate-path';

import { getTransitions } from './transitions.js';

import { default as glb } from './globals.js';

import { mouseOver, mouseOut, click } from './mouse.js';

import { textColor } from './color.js';

import { getFont } from './font.js';

export function update(bars) {
    var noDelay = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
    var _ref = true == noDelay ? getTransitions(0, 'update') : getTransitions(biPartite.duration(), 'update'), _ref2 = _slicedToArray(_ref, 3), t = _ref2[0], t1 = _ref2[1], t2 = _ref2[2];
    var subBars = d3.select('#biPartite-subBar').selectAll('.biPartite-subBar').data(bars.subBars);
    subBars.enter().append('g').attr('class', 'biPartite-subBar').attr('transform', function(d) {
        return 'translate('.concat(d.x, ', ').concat(d.y, ')');
    }).append('rect').style('fill', function(d) {
        return fill(d);
    }).style('shape-rendering', 'crispEdges').transition(t).attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
    subBars.exit().transition(t).on('start', function(d, i, nodes) {
        d3.select(nodes[i]).remove();
    });
    subBars.transition(t).attr('transform', function(d) {
        return 'translate('.concat(d.x, ', ').concat(d.y, ')');
    }).select('rect').style('fill', function(d) {
        return fill(d);
    }).attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
    var edges = d3.select('#biPartite-edge').selectAll('.biPartite-edge').data(bars.edges);
    edges.enter().append('path').merge(edges).attr('class', 'biPartite-edge').style('fill', function(d) {
        return fill(d);
    }).style('fill-opacity', biPartite.edgeOpacity()).attr('d', function(d) {
        return collapsePath(d.path);
    }).transition(t).attrTween('d', function(d) {
        return interpolatePath(d3.select(this).attr('d'), d.path);
    });
    edges.exit().transition(t).on('start', function(d, i, nodes) {
        d3.select(nodes[i]).remove();
    });
    edges.transition(t).style('fill', function(d) {
        return fill(d);
    }).attrTween('d', function(d, i, nodes) {
        return interpolatePath(d3.select(nodes[i]).attr('d'), d.path);
    });
    var mainBars = d3.select('#biPartite-mainBar').selectAll('.biPartite-mainBar').data(bars.mainBars);
    var mainBarsEnter = mainBars.enter().append('g').attr('transform', function(d) {
        return 'translate('.concat(d.x, ', ').concat(d.y, ')');
    }).attr('class', 'biPartite-mainBar').on(glb.eventTypeOver, glb.eventListenerOver).on(glb.eventTypeOut, glb.eventListenerOut);
    mainBarsEnter.append('rect').attr('id', function(d, i) {
        return 'mainBar'.concat(i);
    }).attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh).style('fill-opacity', 0);
    mainBarsEnter.append('text').attr('class', 'biPartite-label').attr('x', function(d) {
        return 'primary' == d.part ? -glb.LabelOffset : glb.LabelOffset;
    }).attr('dy', '0.35em').style('opacity', 0).text(function(d) {
        return d.key;
    }).attr('text-anchor', function(d) {
        return 'primary' == d.part ? 'end' : 'start';
    }).attr('transform', function(d) {
        return 'vertical' == biPartite.orient() ? 'rotate(0)' : 'rotate(90)';
    }).transition(t).style('opacity', 1);
    mainBarsEnter.append('text').attr('class', 'biPartite-percentage white').attr('dy', '0.35em').style('font', getFont('biPartite-percentage')).style('opacity', 0).style('pointer-events', 'none').style('clip-path', function(d, i) {
        return 'url(#clip'.concat(i, ')');
    }).text(function(d) {
        return formatPercent(d.percent);
    }).attr('transform', function(d) {
        return 'vertical' == biPartite.orient() ? 'rotate(0)' : 'rotate(90)';
    }).transition(t).style('opacity', 1);
    mainBars.attr('transform', function(d) {
        return 'translate('.concat(d.x, ', ').concat(d.y, ')');
    }).select('rect').attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
    mainBars.select('.biPartite-label').transition(t1).style('opacity', 0).transition(t2).attr('x', function(d) {
        return 'primary' == d.part ? -glb.LabelOffset : glb.LabelOffset;
    }).attr('text-anchor', function(d) {
        return 'primary' == d.part ? 'end' : 'start';
    }).text(function(d) {
        return d.key;
    }).style('opacity', 1);
    mainBars.select('.biPartite-percentage.white').text(function(d) {
        return formatPercent(d.percent);
    });
    mainBars.exit().transition(t).on('start', function(d, i, nodes) {
        d3.select(nodes[i]).remove();
    });
}