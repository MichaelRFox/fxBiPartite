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

import { update } from './update.js';

import { default as glb } from './globals.js';

import { init } from './init.js';

import { graphSize, bars } from './utilities.js';

import { startListener, stopListener } from './container.js';

import { mouseOver, mouseOut, click } from './mouse.js';

import { sortKeys } from './sort.js';

export function biPartite() {
    init();
    biPartite.update();
    return biPartite;
}

biPartite.data = function(data) {
    if (void 0 == data) return glb.data;
    glb.data = data;
    glb.refresh = true;
    return biPartite;
};

biPartite.container = function(container) {
    if (void 0 == container) return glb.container;
    glb.container = container;
    refresh = true;
    startListener();
    return biPartite;
};

biPartite.fillColors = function(fillColors) {
    if (void 0 == fillColors) return glb.fillColors;
    glb.fillColors = fillColors;
    glb.refresh = true;
    return biPartite;
};

biPartite.sort = function(sort) {
    if (void 0 == sort) return glb.sort;
    glb.sort = sort;
    glb.refresh = true;
    return biPartite;
};

biPartite.orient = function(orient) {
    if (void 0 == orient) return glb.orient;
    glb.orient = orient;
    glb.refresh = true;
    return biPartite;
};

biPartite.pad = function(pad) {
    if (void 0 == pad) return glb.pad;
    glb.pad = pad;
    glb.refresh = true;
    return biPartite;
};

biPartite.duration = function(duration) {
    if (void 0 == duration) return glb.duration;
    glb.duration = duration;
    glb.refresh = true;
    return biPartite;
};

biPartite.edgeOpacity = function(edgeOpacity) {
    if (void 0 == edgeOpacity) return glb.edgeOpacity;
    glb.edgeOpacity = edgeOpacity;
    glb.refresh = true;
    return biPartite;
};

biPartite.edgeMode = function(edgeMode) {
    if (void 0 == edgeMode) return glb.edgeMode;
    glb.edgeMode = edgeMode;
    glb.refresh = true;
    return biPartite;
};

biPartite.event = function(event) {
    if (void 0 == event) return glb.event;
    glb.event = event;
    switch (event) {
      case 'hover':
        glb.eventTypeOver = 'mouseenter';
        glb.eventTypeOut = 'mouseleave';
        glb.eventListenerOver = mouseOver;
        glb.eventListenerOut = mouseOut;
        break;

      case 'click':
        glb.eventTypeOver = 'click';
        glb.eventTypeOut = 'click';
        glb.eventListenerOver = click;
        glb.eventListenerOut = click;
        break;

      case 'doubleClick':
        glb.eventTypeOver = 'dblclick';
        glb.eventTypeOut = 'dblclick';
        glb.eventListenerOver = click;
        glb.eventListenerOut = click;
        break;
    }
    return biPartite;
};

biPartite.update = function() {
    var noDelay = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : false;
    if (false == glb.refresh) return;
    var _graphSize = graphSize();
    var _graphSize2 = _slicedToArray(_graphSize, 5);
    glb.width = _graphSize2[0];
    glb.height = _graphSize2[1];
    glb.minWidth = _graphSize2[2];
    glb.minHeight = _graphSize2[3];
    glb.LabelOffset = _graphSize2[4];
    sortKeys(biPartite.data());
    update(bars(), noDelay);
    glb.refresh = false;
};