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

import { biPartite } from './biPartite.js';

import { update } from './update.js';

import { fx, fy, fh, fw, formatPercent, bars } from './utilities.js';

import { getTransitions } from './transitions.js';

var state = 'unclicked';

export function click(d) {
    if ('unclicked' == state) {
        state = 'clicked';
        mouseOver(d);
    } else {
        state = 'unclicked';
        mouseOut(d);
    }
}

export function mouseOver(d) {
    var newbars = bars(d);
    var _getTransitions = getTransitions(biPartite.duration(), 'mouse'), _getTransitions2 = _slicedToArray(_getTransitions, 3), t = _getTransitions2[0], t1 = _getTransitions2[1], t2 = _getTransitions2[2];
    d3.selectAll('.biPartite-mainBar').filter(function(r) {
        return r.part === d.part && r.key === d.key;
    }).select('rect').style('stroke-opacity', 1);
    d3.selectAll('.biPartite-subBar').data(newbars.subBars).transition(t).attr('transform', function(d) {
        return 'translate('.concat(d.x, ',').concat(d.y, ')');
    }).select('rect').attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
    var e = d3.selectAll('.biPartite-edge').data(newbars.edges);
    e.filter(function(t) {
        return t[d.part] === d.key;
    }).transition(t).style('fill-opacity', biPartite.edgeOpacity()).attr('d', function(d) {
        return d.path;
    });
    e.filter(function(t) {
        return t[d.part] !== d.key;
    }).transition(t).style('fill-opacity', 0).attr('d', function(d) {
        return d.path;
    });
    var mainBars = d3.selectAll('.biPartite-mainBar').data(newbars.mainBars);
    mainBars.transition(t).attr('transform', function(d) {
        return 'translate('.concat(d.x, ',').concat(d.y, ')');
    }).select('rect').attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
    mainBars.select('.biPartite-percentage.white').transition(t1).style('opacity', 0).transition(t2).text(function(d) {
        return 0 == d.value ? '' : formatPercent(d.percent);
    }).style('opacity', function(d) {
        return 0 == d.value ? 0 : 1;
    });
    mainBars.select('.biPartite-label').transition(t).style('opacity', function(d) {
        return 0 == d.value ? 0 : 1;
    });
}

export function mouseOut(d) {
    var newBars = bars();
    var _getTransitions3 = getTransitions(biPartite.duration(), 'mouse'), _getTransitions4 = _slicedToArray(_getTransitions3, 3), t = _getTransitions4[0], t1 = _getTransitions4[1], t2 = _getTransitions4[2];
    d3.selectAll('.biPartite-mainBar').filter(function(r) {
        return r.part === d.part && r.key === d.key;
    }).select('rect').style('stroke-opacity', 0);
    d3.selectAll('.biPartite-subBar').data(newBars.subBars).transition(t).attr('transform', function(d) {
        return 'translate('.concat(d.x, ',').concat(d.y, ')');
    }).select('rect').attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
    d3.selectAll('.biPartite-edge').data(newBars.edges).transition(t).style('fill-opacity', biPartite.edgeOpacity()).attr('d', function(d) {
        return d.path;
    });
    var mainBars = d3.selectAll('.biPartite-mainBar').data(newBars.mainBars);
    mainBars.transition(t).attr('transform', function(d) {
        return 'translate('.concat(d.x, ',').concat(d.y, ')');
    }).select('rect').attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
    mainBars.select('.biPartite-percentage.white').transition(t1).style('opacity', 0).transition(t2).text(function(d) {
        return 0 == d.value ? '' : formatPercent(d.percent);
    }).style('opacity', function(d) {
        return 0 == d.value ? 0 : 1;
    });
    mainBars.select('.biPartite-label').transition(t).style('opacity', 1);
}