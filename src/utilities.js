function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if ('string' === typeof o) return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if ('Object' === n && o.constructor) n = o.constructor.name;
    if ('Map' === n || 'Set' === n) return Array.from(o);
    if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
    if ('undefined' !== typeof Symbol && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
    if (null == len || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
}

import { default as d3 } from './d3Build.js';

import { textDimensions } from './text.js';

import { biPartite } from './biPartite.js';

import { calculateMainBars, calculateSubBars, calculateEdges } from './calculate.js';

import { default as glb } from './globals.js';

import { getFont } from './font.js';

export function getLabelLengths(data, font) {
    var primary = data.reduce(function(a, b) {
        return a.concat(textDimensions(b[0], font).width);
    }, []);
    var secondary = data.reduce(function(a, b) {
        return a.concat(textDimensions(b[1], font).width);
    }, []);
    primary = primary.reduce(function(a, b) {
        return Math.max(a, b);
    }, 0);
    secondary = secondary.reduce(function(a, b) {
        return Math.max(a, b);
    }, 0);
    return {
        primary,
        secondary
    };
}

export function formatPercent(value) {
    return value < .01 ? '< 1%' : ''.concat(parseFloat(100 * value).toFixed(0), '%');
}

export function getMargins(data) {
    var font = getFont('.biPartite-label');
    var dimensions = getLabelLengths(data, font);
    var minHeight = textDimensions('Mg', font).height;
    font = getFont('.biPartite-percentage');
    return {
        primary: dimensions['primary'] + biPartite.pad(),
        secondary: dimensions['secondary'] + biPartite.pad(),
        minHeight,
        minWidth: textDimensions('100%', font)['width']
    };
}

export function graphSize() {
    var labelMargin = 10;
    var margins = getMargins(biPartite.data());
    var minHeight = margins.minHeight;
    var minWidth = margins.minWidth;
    var labelOffset = minWidth / 2 + labelMargin;
    var width;
    var height;
    if ('vertical' == biPartite.orient()) {
        width = biPartite.container().getBoundingClientRect().width - margins.primary - margins.secondary - 2 * labelMargin - minWidth / 2;
        d3.select('#svgG').attr('transform', 'translate('.concat(margins.primary + labelOffset, ', ', 0, ')'));
        height = biPartite.container().getBoundingClientRect().height;
    } else {
        width = biPartite.container().getBoundingClientRect().width;
        d3.select('#svgG').attr('transform', 'translate(0, '.concat(margins.primary + labelOffset, ')'));
        height = biPartite.container().getBoundingClientRect().height - margins.primary - margins.secondary - 2 * labelMargin - minWidth / 2;
    }
    return [ width, height, minWidth, minHeight, labelOffset ];
}

export function collapsePath(path) {
    var origin = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'left';
    var regex = /[,\s]|[a-z]/gi;
    var pathSplit = path.split(regex);
    var pathType = 18 == pathSplit.length ? 'curved' : 'straight';
    return 'left' == origin ? 'curved' == pathType ? 'M'.concat(pathSplit[1], ' ').concat(pathSplit[2], ' L').concat(pathSplit[15], ' ').concat(pathSplit[16], 'z') : 'M'.concat(pathSplit[1], ' ').concat(pathSplit[2], ' L').concat(pathSplit[7], ' ').concat(pathSplit[8], 'z') : 'curved' == pathType ? 'M'.concat(pathSplit[7], ' ').concat(pathSplit[8], ' L').concat(pathSplit[9], ' ').concat(pathSplit[10], 'z') : 'M'.concat(pathSplit[3], ' ').concat(pathSplit[4], ' L').concat(pathSplit[5], ' ').concat(pathSplit[6], 'z');
}

export function bars(mb) {
    var mainBars = {
        primary: [],
        secondary: []
    };
    var subBars = {
        primary: [],
        secondary: []
    };
    mainBars['primary'] = calculateMainBars('primary', mb);
    mainBars['secondary'] = calculateMainBars('secondary', mb);
    subBars['primary'] = calculateSubBars('primary', mb, mainBars);
    subBars['secondary'] = calculateSubBars('secondary', mb, mainBars);
    return {
        mainBars: mainBars.primary.concat(mainBars.secondary),
        subBars: subBars.primary.concat(subBars.secondary),
        edges: calculateEdges(subBars)
    };
}

export function fill(d) {
    var key = void 0 == d.primary ? d.key : d.primary;
    var index = glb.sourceKeys.indexOf(key);
    return glb.fillColors[index];
}

export function initArray(n) {
    var a = new Array(n);
    for (var i = 0; i < n; ++i) a[i] = 0;
    return a;
}

export function getKeys(data) {
    var sourceKeys = _toConsumableArray(new Set(data.reduce(function(a, b) {
        return a.concat(keyPrimary(b));
    }, [])));
    var targetKeys = _toConsumableArray(new Set(data.reduce(function(a, b) {
        return a.concat(keySecondary(b));
    }, [])));
    return {
        sourceKeys,
        targetKeys
    };
}

export function keyPrimary(d) {
    return d[0];
}

export function keySecondary(d) {
    return d[1];
}

export function value(d) {
    return d[2];
}

export function fx(d) {
    return -d.width;
}

export function fy(d) {
    return -d.height;
}

export function fw(d) {
    return 2 * d.width;
}

export function fh(d) {
    return 2 * d.height;
}