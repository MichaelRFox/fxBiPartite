'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @module text
 * @desc Provides functions to compute text dimensions and
 * the maximum size of the graph labels.
 */


/**
 * @function textDimensions
 * @desc Gets the width and height of a string as rendered with a particular font.
 * @param {string} text The text to be evaluated.
 * @param {string} font A CSS font specification.
 * @returns {Object} An object with key/value pairs for the computed width and height.
 */
function textDimensions (text, font) {

    let returnDimension = {};
    let pseudoDiv = insertPseudoDiv(text, font);

    returnDimension = {width: pseudoDiv.getBoundingClientRect()['width'], height: pseudoDiv.getBoundingClientRect()['height']};

    document.body.removeChild(pseudoDiv);
    return returnDimension;
}
/**
 * @function insertPseudoDiv
 * @desc Inserts a temporary HTML div element into the DOM for use in determining
 * the width and height of text.
 * @param {string} text The text to be evaluated.
 * @param {string} font A CSS font specification.
 * @returns {HTML.div} A dive element formatted with the specified font and
 * containing a text node with the supplied text.
 */
function insertPseudoDiv(text, font) {

    let pseudoDiv;

    if (document.getElementById('pseudoDiv') == null) {
        pseudoDiv = document.createElement('div');
        document.body.insertBefore(pseudoDiv, document.body.firstChild);
        pseudoDiv.setAttribute('id', 'pseudoDiv');
        pseudoDiv.style.visibility = 'hidden';
        pseudoDiv.style.position = 'absolute';
        pseudoDiv.style.display = 'inline-block';
    } else {
        pseudoDiv = document.getElementById('pseudoDiv');
    }
    pseudoDiv.style.font = font;

    let textNode = document.createTextNode(text);
    pseudoDiv.appendChild(textNode);      
    
    return pseudoDiv;

}

/**
 * @function getLabelLengths
 * @desc Determines the maximum length of primary (source) and secondary
 * (target) bar labels as displayed.
 * @param {Array} data A two-dimensional array of source (string), target (string),
 * and value (number) tuples.
 * @param {string} font A CSS font specification.
 * @returns {Object} An object with the longest primary and secondary label lengths
 */
function getLabelLengths (data, font) {

    let primary = data.reduce( (a, b) => {return a.concat(textDimensions(b[0], font).width)}, []);
    let secondary = data.reduce( (a, b) => {return a.concat(textDimensions(b[1], font).width)}, []);
    primary = primary.reduce( (a, b) => {return Math.max(a, b)}, 0);
    secondary = secondary.reduce( (a, b) => {return Math.max(a, b)}, 0);

    return {primary: primary, secondary: secondary}
}

exports.getLabelLengths = getLabelLengths;
exports.textDimensions = textDimensions;
