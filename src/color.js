/**
 * @module color
 * @desc Provides functions to determine the optimal text color based on
 * the background and determine which fill color to apply to which bar, sub bar, or edge.
 */

import {default as glb} from './globals';
import {overlap, insertPseudoDiv} from './utilities.js';

/**
 * @function splitRgb
 * @desc Splits a CSS rgb string into array with red, green, and blue components.
 * @param {string} rgb A valid CSS rgb color string.
 * @returns {Array} An array of rgb color components.
 * @since v2.0.0
 */
export function splitRgb (rgb) {
    // const regex = /^(?:rgba?)\((\d+),\s*(\d+),\s*(\d+),?\s*(\d+\.?\d+)?\)$/i;
    const regex = /^(?:rgba?)\((\d+),\s*(\d+),\s*(\d+),?\s*(\d?\.?\d+)?\)$/i
    const regexResult = rgb.match(regex);
    let result = [+regexResult[1], +regexResult[2], +regexResult[3]];
    if (regexResult[4] != null) result.push(+regexResult[4]);
    return result;
}

/**
 * @function hexToRgb
 * @desc Converts a CSS string formatted as hex to rgb format.
 * @param {string} hex The hex representation of the CSS color
 * @returns {string} The color formatted as an rgb string.
 * @since v2.0.0
 */
export function hexToRgb(hex) {
    const regex = /^#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})$/i;
    let rgb = hex.match(regex);
    return [parseInt(rgb[1], 16), parseInt(rgb[2], 16), parseInt(rgb[3], 16)];
}

/**
 * @function parseColor
 * @desc Parses any valid CSS color.
 * @param {string} color Any valid CSS color.
 * @returns {string} The CSS color formatted as an rgb string.
 * If opacity values (e.g., rgba) are passed, the opacity is
 * stripped out and simple rgb is returned.
 * @since v2.0.0
 */
export function parseColor(color) {
    let pseudoDiv = insertPseudoDiv();
    pseudoDiv.style.color = color;
    let rgb = window.getComputedStyle(pseudoDiv, null).getPropertyValue('color');
    if (rgb.indexOf('#') !== -1) { 
        rgb = hexToRgb(rgb);
    } else rgb = rgb.match(/\d+/g);
    pseudoDiv.remove()
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

/**
 * @function textColor
 * @desc Computes a text color with the greatest contrast with the background.
 * @param {Array} bgColors An array of background colors in CSS rgb format;
 * @returns {string} Either the global lightTextColor or the global darkTextColor.
 */
export function textColor(bgColors) {

    let contrasts = [];

    bgColors.forEach (d => {
        const rgb = splitRgb(d);
        contrasts.push(contrast(rgb[0], rgb[1], rgb[2]));
    });

    const darks = contrasts.reduce((a, b) => {return a.concat(b.dark)}, []);
    const lights = contrasts.reduce((a, b) => {return a.concat(b.light)}, []);

    if (darks.every(d => d >= 7)) return  glb.darkTextColor;
    if (lights.every(d => d >= 7)) return glb.lightTextColor;

    const darkMean = darks.reduce((a, b) => a + b) / darks.length;
    const lightMean = lights.reduce((a, b) => a + b) / lights.length;

    return darkMean >= lightMean ? glb.darkTextColor : glb.lightTextColor;
}

/**
 * @function luminance
 * @desc Computes the luminance of an rgb color.
 * @param {number} r The red component [ 0..255].
 * @param {number} g The green component [ 0..255].
 * @param {number} b The blue component [ 0..255].
 * @returns {number} The luminance
 * @since v2.0.0
 */
export function luminance(r, g, b) {
    const a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

/**
 * @function contrast
 * @desc Computes the contrast between a give color and both black and white IAW
 * [WCAG 2.0]{@link https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-procedure}.
 * @param {number} r The red component [ 0..255].
 * @param {number} g The green component [ 0..255].
 * @param {number} b The blue component [ 0..255].
 * @returns {Object} An object with key/value pairs for the contrast of black
 * and white with the input color.
 * @since v2.0.0
 */
export function contrast(r, g, b) {
    const l = luminance(r, g, b);
    return {
        dark: (Math.max(glb.darkTextLuminance, l) + 0.05) / (Math.min(glb.darkTextLuminance, l) + 0.05),
        light: (Math.max(glb.lightTextLuminance, l) + 0.05) / (Math.min(glb.lightTextLuminance, l) + 0.05)
    };
}

/**
 * @function fill
 * @desc Determines which color from the fill colors set by the
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
    if (index == -1) return 'rgb(0, 0, 0)';
    index = index % (glb.fillColors.length); //wrap around
    return glb.fillColors[index];
}

/**
 * @function subBarColors
 * @dec Determines which sub bars overlap a particular secondary key.
 * @param {Array} subBars An array of objects each containing key/value pairs for the x (number), y (number),
 * height (number), width (number), percent (number), value (number), index (string), part (string), 
 * primary (string), and secondary (string).
 * @param {Object} keyBar The sub bar being searched.
 * @returns {Array} An array of sub bars that overlap the key sub bar each containing key/value pairs for the x (number), y (number),
 * height (number), width (number), percent (number), value (number), index (string), part (string), 
 * primary (string), and secondary (string).
 * @since v2.0.0
 */
 export function subBarColors (subBars, keyBar) {
    let colors = [];
    const bars = subBars.reduce((a,b) => b.part == 'secondary' && b.secondary == keyBar.key && overlap(b, keyBar) ? a.concat(b) : a, []);
    if (bars == undefined) return [fill(glb.containerBackground)];
    bars.forEach (bar => {
        colors.push(fill(bar));
    });
    return colors;
 }
