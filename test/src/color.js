'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var globals = require('./globals.js');

/**
 * @module color
 * @desc Provides functions to determine the optimal text color based on
 * the background and determine which fill color to apply to which bar, sub bar, or edge.
 */

/**
 * @function fill
 * @desc Determies which color from the fill colors set by the
 * [biPartite class object's]{@link biPartite} [fillColorsMethod]{@link biPartite#fillColors}
 * or the default fill colors. If there are more bars than fill colors they are reused in order.
 * @param {Object} d An object containing key/value pairs for the height (number), width (number),
 * x (number), y (number), value (number), percent (number), key (string), and part (string) for
 * a single bar.
 * @returns {string} A CSS hex-formatted color string.
 */ 
function fill (d) {
    
    const key = d.primary == undefined ? d.key : d.primary;
    let index = globals.sourceKeys.indexOf(key);
    if (index == -1) return '#000000';
    index = index % (globals.fillColors.length); //wrap around
    return globals.fillColors[index];
}

exports.fill = fill;
