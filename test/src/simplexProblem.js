'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @module simplexProblem
 * @desc Provides one function to create an objective and constraints for a simplex
 * optimization to maximize graph usage within the confines of its container's dimensions.
 */

/**
 * @function buildSimplexProblem
 * @desc Constructs an objective function and a set of constraints in the proper form
 * to invoke fxSimplex.
 * @param {Array} data A two-dimensional array containing the biPartite data.
 * @param {number} min The minimum width or height of the bars.
 * @param {number} available The total vertical or horizontal space available to stack the bars.
 * @returns {Array} A two dimensional array containing the objective function (string) and
 * the constraints (two-dimensional array of strings).
 */
function buildSimplexProblem (data, min, available) {

	if (data.length == 0) return [[],[]];
    
    let sum = data.reduce((a, b) => {return a + b});
    let objective = 'Maximize Z = r';
    let constraints = [];
    let totalConstraint = `${sum}r`;

    data.forEach ((d, i) => {
    	constraints.push(`${d}r + x${i} >= ${min}`);
    	totalConstraint += ` + x${i}`;
    });
    constraints.push(`${totalConstraint} <= ${available}`);

    return [objective, constraints];

}

exports.buildSimplexProblem = buildSimplexProblem;
