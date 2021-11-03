/**
 * @module color
 * @desc Provides functions to determine the optimal text color based on
 * the background and determine which fill color to apply to which bar, sub bar, or edge.
 */

import {default as glb} from './globals';

/**
 * @function textColor
 * @desc Computes a text color with the greatest contrast with the background.
 * @param {string} bgColor The background color in CSS hex format;
 * @param {string} lightColor The preferred color for darker backgrounds.
 * **Default**: '#FFFFFF'.
 * @param {string} darkColor The preferred color for light backgrounds.
 * **Default**: '#000000'.
 * @returns {string} Either the lightColor or the darkColor.
 */
export function textColor (bgColor, lightColor = '#FFFFFF', darkColor = '#000000') {

    let color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    let r = parseInt(color.substring(0, 2), 16); // hexToR
    let g = parseInt(color.substring(2, 4), 16); // hexToG
    let b = parseInt(color.substring(4, 6), 16); // hexToB
    let uicolors = [r / 255, g / 255, b / 255];
    let c = uicolors.map((col) => {
        if (col <= 0.03928) {
            return col / 12.92;
        }
        return Math.pow((col + 0.055) / 1.055, 2.4);
    });
    var L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
    return (L > 0.179) ? darkColor : lightColor;
}

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
export function fill (d) {
    
    const key = d.primary == undefined ? d.key : d.primary;
    let index = glb.sourceKeys.indexOf(key);
    if (index == -1) return '#000000';
    index = index % (glb.fillColors.length); //wrap around
    return glb.fillColors[index];
}
