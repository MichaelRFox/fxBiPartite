/**
 * @module container
 * @desc Provides the event listener for the container.
 */

import {default as glb} from './globals';

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
export function startListener () {
    active = true;
    window.requestAnimationFrame(containerListener);
}

/**
 * @function stopListener
 * @desc Stops polling of the container
 */
export function stopListener () {
    active = false;
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
        let newWidth = glb.graph.container().getBoundingClientRect().width;
        let newHeight = glb.graph.container().getBoundingClientRect().height;
        width = width == undefined ? newWidth : width;
        height = height == undefined ? newHeight : height;
        if (width != newWidth || height != newHeight) {
            width = newWidth;
            height = newHeight;
            glb.refresh = true;
            glb.graph.update(true);
        };
    };
    if (active == true) requestAnimationFrame(containerListener);
    
}

