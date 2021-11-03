'use strict';

var mouse = require('./mouse.js');

/**
 * @module globals
 * @desc Provides internal storage for all of the [biPartite class object's]{@link biPartite} options.
 */

/**
 * @typedef globals
 * @desc Stores all of the default options for the [biPartite class object]{@link biPartite}
 * and keeps track of changes made to them.
 * @property {biPartite} graph The [biPartite class object]{@link biPartite}. This property
 * is set when the [biPartite constructor]{@link biPartite#constrctor} is called. **Default**: undefined.
 * @property {Array} data A two-dimensional array of source (string), target (string),
 * and value (number) tuples. **Default**: []. 
 * @property {HTML.div} container The element in which the graph is to be rendered.
 * **Default**: undefined.
 * @property {Array} fillColors An array of strings for the colors of the bars and edges.
 * **Default**: ['#66c2a5','#fc8d62','#8da0cb','#e78ac3','#a6d854','#ffd92f','#e5c494','#b3b3b3']
 * @property {string} sort The sorting method for the bars. One of [alpha | barycentric
 * | sh | none]. **Default**: 'alpha'.
 * @property {Array} sourceKeys The text labels for the source bars. **Default**: [].
 * @property {Array} targetKeys The text labels for the target bars. **Default**: [].
 * @property {string} orient The orientation of the graph. One of [vertical | horizontal].
 * **Default**: 'vertical'.
 * @property {number} pad The amount of padding in pixels between each bar. **Default**: 1.
 * @property {number} duration The duration of transitions in milliseconds, **Default**: 750.
 * @property {number} edgeOpacity The opacity of the edges [0..1]. **Default**: 0.4.
 * @property {string} edgeMode How the edges are to be rendered. One of [curved | straight].
 * **Default**: 'curved'.
 * @property {boolean} refresh True of the graph needs to be drawn, false otherwise.
 * This property is set internally and is not exposed by the
 * [biPartie class object]{@link biPartite}. **Default**: true.
 * @property {number} width The width of the container in pixels. This property is set
 * internally by the [containerListener]{@link module:container~containerListener} function
 * and is not exposed by the [biPartie class object]{@link biPartite}. **Default**: 0.
 * @property {number} height The height of the container in pixels. This property is set
 * internally by the [containerListener]{@link module:container~containerListener} function
 * and is not exposed by the [biPartie class object]{@link biPartite}. **Default**: 0.
 * @property {number} minWidth The minimum width of the bars to accommodate label size
 * and font style. This property is set internally by the
 * [getMargins]{@link module:utilities~getMargins} function and is not exposed by
 * the [biPartie class object]{@link biPartite}. **Default**: 0.
 * @property {number} minHeight The minimum height of the bars to accommodate label
 * size and font style. This property is set internally by the
 * [getMargins]{@link module:utilities~getMargins} function and is not exposed by the
 * [biPartie class object]{@link biPartite}. **Default**: 0.
 * @property {number} labelOffset How far the label is offset from the edge of each bar. **Default**: 0;
 * @property {string} eventTypeOver The type of event which triggers interaction. One of
 * ['mouseenter' | 'click' | 'dblclick']. This property is set through the
 * [biPartie class object's]{@link biPartite} [event]{@link biPartite#event} method.
 * **Default**: 'mouseenter'.
 * @property {string} eventTypeOut The type of event which un-triggers interaction. One of
 * ['mouseleave' | 'click' | 'dblclick']. This property is set through the
 * [biPartie class object's]{@link biPartite} [event]{@link biPartite#event} method.
 * **Default**: 'hover'.
 * @property {function} eventListenerOver The function called by the event listener which
 * triggers interaction.One of [mouseOver | click]. This property is set through the
 * [biPartie class object's]{@link biPartite} [event]{@link biPartite#event} method.
 * **Default**: mouseover.
 * @property {function} eventListenerOut The function called by the event listener which
 * un-triggers interaction. One of [mouseOut | click]. This property is set through the
 * [biPartie class object's]{@link biPartite} [event]{@link biPartite#event} method.
 * **Default**: mouseOut.
 */
var glb = {
    graph: undefined,
    data: [],
    container: undefined, 
    fillColors: ['#66c2a5','#fc8d62','#8da0cb','#e78ac3','#a6d854','#ffd92f','#e5c494','#b3b3b3'], 
    sort: 'alpha',
    sourceKeys: [],
    targetKeys: [],
    orient: 'vertical', 
    pad: 1, 
    duration: 750, 
    edgeOpacity: 0.4, 
    edgeMode: 'curved', 
    refresh: true,
    width: 0,
    height: 0,
    minWidth: 0,
    minHeight: 0,
    labelOffset: 0,
    eventTypeOver: 'mouseenter',
    eventTypeOut: 'mouseleave',
    eventListenerOver: mouse.mouseOver,
    eventListenerOut: mouse.mouseOut
};

module.exports = glb;
