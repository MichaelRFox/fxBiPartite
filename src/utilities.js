/**
 * @module utilities
 * @desc Utility functions for fxBiPartite.
 */
import {default as d3} from './d3Build';
import {textDimensions, getLabelLengths} from './text';
import {default as glb} from './globals';
import {getFont} from './font';

/**
 * @function formatPercent
 * @desc Takes a number and returns a string formatted as a percentage.
 * @param {number} value The number to be transformed.
 * @returns {string} The value formatted as a percentage.
 */
export function formatPercent (value) {

    return value < 0.01 ? '< 1%' : `${parseFloat(value * 100).toFixed(0)}%`
}

/**
 * @function getMargins
 * @desc Determines the margins necessary to accommodate the bar labels.
 * @param {Array} data A two-dimensional array of source (string), target (string),
 * and value (number) tuples.
 * @returns {Object} An object with key/value pairs for the primary
 * (source) margin, the secondary (target) margin, the man bar minimum height,
 * and the main bar minimum width. 
 */
export function getMargins (data) {
    
    let font = getFont('.biPartite-label'); // for label margins
    const dimensions = getLabelLengths(data, font);
    const minHeight = textDimensions('Mg', font).height;
    font = getFont('.biPartite-percentage'); //for minWidth

    return {
        primary: dimensions['primary'] + glb.graph.pad(),
        secondary: dimensions['secondary'] + glb.graph.pad(),
        minHeight: minHeight,
        minWidth: textDimensions('100%', font)['width']
    };
}

/**
 * @function graphSize
 * @desc Determines the size of the graph based on container size and label margins,
 * and then sets the appropriate transform on the svg group element.
 * @returns {Array} An array of numbers with the width, height, minimum width,
 * minimum height, and label offset.
 */
export function graphSize () {

    const labelMargin = 10;
    const margins = getMargins(glb.graph.data());
    const minHeight = margins.minHeight;
    const minWidth = margins.minWidth;
    const labelOffset = (minWidth / 2) + labelMargin;

    let width;
    let height;

    if (glb.graph.orient() == 'vertical') {
        width = glb.graph.container().getBoundingClientRect().width - margins.primary - margins.secondary - (labelMargin * 2) - (minWidth / 2);
        d3.select('#svgG').attr('transform', `translate(${margins.primary + labelOffset}, ${0})`);
        height = glb.graph.container().getBoundingClientRect().height;
    } else {
        width = glb.graph.container().getBoundingClientRect().width;
        d3.select('#svgG').attr('transform', `translate(0, ${margins.primary + labelOffset})`);
        height = glb.graph.container().getBoundingClientRect().height - margins.primary - margins.secondary - (labelMargin * 2) - (minWidth / 2);
    };

    return [width, height, minWidth, minHeight, labelOffset];
}

/**
 * @function collapsePath
 * @desc Takes an edge path description and returns a single line or curve
 * from which the edge can be animated to grow from left or top to its full extent. 
 * @param {string} path An svg path string.
 * @param {string} origin The origin of the graph ['left | 'top]. Optional.
 * **Default**: 'left'.
 * @returns {string} The path collapsed to its leftmost or topmost line or curve.
 */
export function collapsePath(path, origin = 'left') {

    const regex = /[,\s]|[a-z]/gi;
    const pathSplit = path.split(regex);
    const pathType = pathSplit.length == 18 ? 'curved' : 'straight';

    return origin == 'left'
        ? pathType == 'curved' 
            ? `M${pathSplit[1]} ${pathSplit[2]} L${pathSplit[15]} ${pathSplit[16]}z` 
            : `M${pathSplit[1]} ${pathSplit[2]} L${pathSplit[7]} ${pathSplit[8]}z`
        : pathType == 'curved' 
            ? `M${pathSplit[7]} ${pathSplit[8]} L${pathSplit[9]} ${pathSplit[10]}z` 
            : `M${pathSplit[3]} ${pathSplit[4]} L${pathSplit[5]} ${pathSplit[6]}z`;
}

/**
 * @function buildArray
 * @desc Creates a one-dimensional array of size n filled with zeros.
 * @param {number} n The size of the array
 * @returns {Array} The requested array.
 */
export function initArray (n) {

    let a = new Array(n);
    for (let i = 0; i < n; ++i) {
        a[i] = 0
    };

    return a;
};

/**
 * @function getKeys
 * @desc Gets the source and target keys from the data.
 * @param {Array} data A two-dimensional array of source (string), target (string),
 * and value (number) tuples.
 * @returns {Object} An object with key/value pairs for source keys (array of strings)
 * and target keys (array of strings).
 */
export function getKeys (data) {

    let sourceKeys = [... new Set(data.reduce((a,b) => {return a.concat(keyPrimary(b))}, []))];
    let targetKeys = [... new Set(data.reduce((a,b) => {return a.concat(keySecondary(b))}, []))];

    return {sourceKeys: sourceKeys, targetKeys: targetKeys};
}

/**
 * @function keyPrimary
 * @desc Retrieves the primary (source) key for a single data entry.
 * @param {Array} d An array with three elements: source (string), target (string),
 * and value (number).
 * @returns {string} The primary key.
 */
export function keyPrimary (d) {return d[0]};

/**
 * @function keySecondary
 * @desc Retrieves the secondary (target) key for a single data entry.
 * @param {Array} d An array with three elements: source (string), target (string),
 * and value (number).
 * @returns {string} The secondary key.
 */
export function keySecondary (d) {return d[1]};

/**
 * @function value
 * @desc Retrieves the value for a single data entry.
 * @param {Array} d An array with three elements: source (string), target (string),
 * and value (number).
 * @returns {number} The value.
 */
export function value (d) {return d[2]};

/**
 * @function fx
 * @desc Computes the x coordinate for bars and sub bar rectangles.
 * @param {Object} d The datum from a single bar or sub bar containing key/value
 * pairs for the height (number), width (number), x (number), y (number), value
 * (number), percent (number), key (string), and part (string), and value (number).
 * @returns {number} The x coordinate.
 */
export function fx (d) {return -d.width};

/**
 * @function fy
 * @desc Computes the y coordinate for bars and sub bar rectangles.
 * @param {Object} d The datum from a single bar or sub bar containing key/value
 * pairs for the height (number), width (number), x (number), y (number), value
 * (number), percent (number), key (string), and part (string), and value (number).
 * @returns {number} The y coordinate.
 */
export function fy (d) {return -d.height};

/**
 * @function fw
 * @desc Computes the width for bars and sub bar rectangles.
 * @param {Object} d The datum from a single bar or sub bar containing key/value
 * pairs for the height (number), width (number), x (number), y (number), value
 * (number), percent (number), key (string), and part (string), and value (number).
 * @returns {number} The width.
 */
export function fw (d) {return 2 * d.width};

/**
 * @function fh
 * @desc Computes theheight for bars and sub bar rectangles.
 * @param {Object} d The datum from a single bar or sub bar containing key/value
 * pairs for the height (number), width (number), x (number), y (number), value
 * (number), percent (number), key (string), and part (string), and value (number).
 * @returns {number} The height.
 */
export function fh (d) {return 2 * d.height};
