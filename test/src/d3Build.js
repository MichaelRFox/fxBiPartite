'use strict';

require('./node_modules/d3-transition/src/selection/index.js');
var index = require('./node_modules/d3-transition/src/transition/index.js');
var select = require('./node_modules/d3-selection/src/select.js');
var selectAll = require('./node_modules/d3-selection/src/selectAll.js');
var linear = require('./node_modules/d3-ease/src/linear.js');

var d3 = {
    select,
    selectAll,
    transition: index["default"],
    easeLinear: linear.linear
};

module.exports = d3;
