'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var globals = require('./globals.js');

/**
 * @module container
 * @desc Provides the event listener for the container.
 */

/**
 * Holds the last timestamp
 * @type number
 * @inner
 */
let start;

/**
 * Whether listening has been activated
 * @type boolean
 * @inner
 */
let active = false;

/**
 * The old width of the container
 * @type number
 * @inner
 */
let width;

/**
 * The old height of the container
 * @type number
 * @inner
 */
let height;

/**
 * @function startListener
 * @desc called when the container is instantiated to start an animation frame.
 */
function startListener () {
    active = true;
    window.requestAnimationFrame(containerListener);
}

/**
 * @function containerListener
 * @desc Called by the animation frame every 60 milliseconds. Determines if the
 * container's size has changed, and if so updates the appropriate global parameters and refreshes the graph.
 * @param {number} timeStamp The clock time of the event.
 * @event
 */
function containerListener (timeStamp) {

    start = start == undefined ? timeStamp : start;

    const threshold = 60;
    const elapsed = timeStamp - start;

    if (elapsed > threshold) {
        start = timeStamp;
        let newWidth = globals.graph.container().getBoundingClientRect().width;
        let newHeight = globals.graph.container().getBoundingClientRect().height;
        width = width == undefined ? newWidth : width;
        height = height == undefined ? newHeight : height;
        if (width != newWidth || height != newHeight) {
            width = newWidth;
            height = newHeight;
            globals.refresh = true;
            globals.graph.update(true);
        }    }    if (active == true) requestAnimationFrame(containerListener);
    
}

exports.startListener = startListener;
