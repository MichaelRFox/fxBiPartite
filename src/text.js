/**
 * @module text
 * @desc Provides functions to compute text dimensions and
 * the maximum size of the graph labels.
 */

import {insertPseudoDiv} from './utilities.js';

/**
 * @function textDimensions
 * @desc Gets the width and height of a string as rendered with a particular font.
 * @param {string} text The text to be evaluated.
 * @param {string} font A CSS font specification.
 * @returns {Object} An object with key/value pairs for the computed width and height.
 */
export function textDimensions (text, font) {

    let returnDimension = {};
    let pseudoDiv = insertPseudoDiv(text);
    pseudoDiv.style.font = font;
    let textNode = document.createTextNode(text);
    pseudoDiv.appendChild(textNode);      
    returnDimension = {width: pseudoDiv.getBoundingClientRect()['width'], height: pseudoDiv.getBoundingClientRect()['height']};

    document.body.removeChild(pseudoDiv);
    return returnDimension;
};


/**
 * @function getLabelLengths
 * @desc Determines the maximum length of primary (source) and secondary
 * (target) bar labels as displayed.
 * @param {Array} data A two-dimensional array of source (string), target (string),
 * and value (number) tuples.
 * @param {string} font A CSS font specification.
 * @returns {Object} An object with the longest primary and secondary label lengths
 */
export function getLabelLengths (data, font) {

    let primary = data.reduce( (a, b) => {return a.concat(textDimensions(b[0], font).width)}, []);
    let secondary = data.reduce( (a, b) => {return a.concat(textDimensions(b[1], font).width)}, []);
    primary = primary.reduce( (a, b) => {return Math.max(a, b)}, 0);
    secondary = secondary.reduce( (a, b) => {return Math.max(a, b)}, 0);

    return {primary: primary, secondary: secondary}
}
