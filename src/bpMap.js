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

import { buildSimplexProblem } from './simplexProblem.js';

import { simplex } from 'fxsimplex';

export function bpMap(a, p, m, s, e) {
    var ret = [];
    var data = a.reduce(function(a, b) {
        return b.value > 1e-5 ? a.concat(b.value) : a;
    }, []);
    var len = data.length;
    var totalPad = len * p * 2;
    var availableSize = e - s - totalPad;
    var t = data.reduce(function(a, b) {
        return a + b;
    }, 0);
    var _buildSimplexProblem = buildSimplexProblem(data, m, availableSize), _buildSimplexProblem2 = _slicedToArray(_buildSimplexProblem, 2), objective = _buildSimplexProblem2[0], constraints = _buildSimplexProblem2[1];
    var _simplex = simplex(objective, constraints), solution = _simplex.solution, result = _simplex.result;
    var ratio;
    switch (result) {
      case 'unbounded':
      case 'infeasible':
        ratio = availableSize / t;
        break;

      case '':
        ratio = 0;
        break;

      default:
        ratio = solution.reduce(function(a, b) {
            return 'r' == b[0] ? b[1] : a;
        }, 0);
    }
    var b = s;
    var o = ratio;
    a.forEach(function(d) {
        var v = d.value * o;
        var adjustedMin = d.value < 1e-5 ? 0 : m;
        var adjustedP = d.value < 1e-5 ? 0 : p;
        ret.push({
            s: b + adjustedP + (v < adjustedMin ? .5 * (adjustedMin - v) : 0),
            e: b + adjustedP + (v < adjustedMin ? .5 * (adjustedMin + v) : v),
            p: t < 1e-5 ? 0 : d.value / t
        });
        b += 2 * adjustedP + (v < adjustedMin ? adjustedMin : v);
    });
    return ret;
}