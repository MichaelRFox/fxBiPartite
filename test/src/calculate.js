'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bpMap = require('./bpMap.js');
var globals = require('./globals.js');
var utilities = require('./utilities.js');

/**
 * @module calculate
 * @desc Performs the calculations to position the main bars, sub bars and edges.
 */

/**
 * @function bars
 * @desc The main entry point to calculate the screen positions of the main bars, sub bars, and edges.
 * @param {Object} mb During interaction contains key/value pairs for the height (number), width (number),
 * x (number), y (number), value (number), percent (number), key (string), and part (string) of the
 * main bar being interacted with. Undefined at all other times.
 * @returns {Object} An object containing three key/value pairs for the main bars, sub bars, and edges.
 * The main and sub bars are arrays of objects containing key/value pairs for the height (number), width (number),
 * x (number), y (number), value (number), percent (number), key (string), and part (string) for each bar or sub bar.
 * The edges are an array of objects with key/value pairs for the path (string), primary (string), secondary (string),
 * and percent (number) of each edge.
 */
function bars (mb) {

    let mainBars = {primary:[], secondary:[]};
    let subBars = {primary:[], secondary:[]};

    mainBars['primary'] = calculateMainBars('primary', mb);
    mainBars['secondary'] = calculateMainBars("secondary", mb);
    subBars['primary'] = calculateSubBars("primary", mb, mainBars);    
    subBars['secondary'] = calculateSubBars("secondary", mb, mainBars);

    return {
         mainBars: mainBars.primary.concat(mainBars.secondary),
         subBars: subBars.primary.concat(subBars.secondary),
         edges: calculateEdges(subBars)
    };
}

/**
 * @function calculateMainBars
 * @desc Performs calculations to determine positioning parameters for each main bar.
 * @param {string} part Whether the bar being calculated is primary (source) or
 * secondary (target).
 * @param {Object} mb During interaction contains key/value pairs for the height (number), width (number),
 * x (number), y (number), value (number), percent (number), key (string), and part (string) of the
 * main bar being interacted with. Undefined at all other times.
 * @returns {Array} An Array of objects containing key/value pairs for the height (number), width (number),
 * x (number), y (number), value (number), percent (number), key (string), and part (string) for each main bar.
 */
function calculateMainBars (part, mb) {
    
    let mainBars = [];
    let orient = globals.graph.orient();
    let ps = [];

    let mbData = globals.graph.data().slice();

    let keys = part == 'primary' ? globals.sourceKeys : globals.targetKeys;
    
    let key = part == 'primary' ? utilities.keyPrimary : utilities.keySecondary;
    let altKey = part == 'primary' ?  utilities.keySecondary: utilities.keyPrimary;
    
    keys.forEach(d => {
        let sum =  (mb != undefined && mb.part != part)
            ? mbData.reduce((a,b) => {return key(b) == d && altKey(b) == mb.key ? a + utilities.value(b) : a}, 0)
            : mbData.reduce((a,b) => {return key(b) == d ? a + utilities.value(b) : a}, 0);
        ps.push({key: d, value: sum});
    });
    
    let bars = bpMap.bpMap (ps, globals.graph.pad(), globals.minHeight, 0, orient == 'vertical' 
                        ? globals.height 
                        : globals.width);

    ps.forEach ((d,i) => { 
        mainBars.push({
            x: orient == 'horizontal' ? (bars[i].s + bars[i].e) / 2 : (part == 'primary' ? 0 : globals.width - globals.minWidth / 2),
            y: orient == 'vertical' ? (bars[i].s + bars[i].e) / 2 : (part == 'primary' ? 0 : globals.height - globals.minWidth / 2),
            height: orient == 'vertical' ? (bars[i].e - bars[i].s) / 2 : globals.minWidth / 2,
            width: orient == 'horizontal' ? (bars[i].e - bars[i].s) / 2 : globals.minWidth / 2,
            part: part,
            key: d.key,
            value: d.value,
            percent: bars[i].p
        });
    });

    return mainBars
}

/**
 * @function calculateSubBars
 * @desc Performs calculations to determine positioning parameters for each sub bar.
 * @param {string} part Whether the sub bar being calculated is primary (source) or
 * secondary (target).
 * @param {Object} mb During interaction contains key/value pairs for the height (number), width (number),
 * x (number), y (number), value (number), percent (number), key (string), and part (string) of the
 * main bar being interacted with. Undefined at all other times.
 * @param {Array} mainBars The associated array of main bars as returned by the
 * [calculateMainBars]{@link module:calculate~calculateMainBars} function.
 * @returns {Array} An Array of objects containing key/value pairs for the path (string),
 * primary (string), secondary (string),and percent (number) of each edge.
 */
function calculateSubBars (part, mb, mainBars) {
   
    let orient = globals.graph.orient();
    let subBars = [];
    let ps = [];

    let sbData = globals.graph.data().slice();
    
    let keys = part == 'primary' 
        ? globals.sourceKeys
        : globals.targetKeys;
    
    let key = part == 'primary' ? utilities.keyPrimary : utilities.keySecondary;
    let altKey = part == 'primary' ?  utilities.keySecondary : utilities.keyPrimary;
    
    keys.forEach (d => {
        let values = (mb != undefined && mb.part != part)
            ? sbData.reduce((a,b) => {return key(b) == d 
                ? altKey(b) == mb.key
                    ? a.concat({key: altKey(b), value: utilities.value(b)})
                    : a.concat({key: altKey(b), value: 0})
                : a}, [])
            : sbData.reduce((a,b) => {return key(b) == d 
                ? a.concat({key: altKey(b), value: utilities.value(b)}) 
                : a}, []);
        ps.push({key: d, values: values});
    });

    ps.forEach (d => {
        let g = mainBars[part].filter(e => {return e.key == d.key})[0];
        let bars = bpMap.bpMap(d.values, 0, 0,
                orient == 'vertical' ? g.y - g.height : g.x - g.width,
                orient == 'vertical' ? g.y + g.height : g.x + g.width);
         
        d.values.forEach((t, i) => { 
            subBars.push({
                x: orient == 'vertical' ? part == 'primary' ? 0 : globals.width - globals.minWidth / 2 : (bars[i].s + bars[i].e) / 2,
                y: orient == 'horizontal' ? part == 'primary' ? 0 : globals.height - globals.minWidth / 2 : (bars[i].s + bars[i].e) / 2,
                height: (orient == 'vertical' ? bars[i].e - bars[i].s : globals.minWidth) / 2,
                width: (orient == 'horizontal' ? bars[i].e - bars[i].s : globals.minWidth) / 2,
                part: part,
                primary: part=='primary'? d.key : t.key,
                secondary: part=='primary'? t.key : d.key,   
                value: t.value,
                percent: bars[i].p*g.percent,
                index: part == 'primary' ? `${d.key}|${t.key}` : `${t.key}|${d.key}`
           });
        });       
    });

    return subBars;
}

/**
 * @function calculateEdges
 * @desc Performs calculations to determine positioning and path parameters for each edge.
 * @param {Array} subBars The associated array of sub bars as returned by the
 * [calculateSubBars]{@link module:calculate~calculateSubBars} function.
 * @returns {Array} An Array of objects containing key/value pairs for the height (number), width (number),
 * x (number), y (number), value (number), percent (number), key (string), and part (string) for each sub bar.
 */
function calculateEdges (subBars) {  
    
    return subBars.primary.map(d => {
        let g = subBars.secondary.filter(e => {return e.index == d.index})[0];
        return { 
            path:  globals.graph.orient() == 'vertical' 
                ? edgeVert(d.x+d.width,d.y+d.height,g.x-g.width,g.y+g.height,g.x-g.width,g.y-g.height,d.x+d.width,d.y-d.height)
                : edgeHoriz(d.x-d.width,d.y+d.height,g.x-g.width,g.y-g.height,g.x+g.width,g.y-g.height,d.x+d.width,d.y+d.height),
            primary:d.primary,
            secondary:d.secondary,
            value:d.value,
            percent:d.percent
        };
    });
}

/**
 * @function edgeVert
 * @desc Helper function to convert edge parameters for a vertical graph to a path string.
 * @param {number} x1 The upper left horizontal coordinate.
 * @param {number} y1 The upper left vertical coordinate.
 * @param {number} x2 The upper right horizontal coordinate.
 * @param {number} y2 The upper right vertical coordinate.
 * @param {number} x3 The lower left horizontal coordinate.
 * @param {number} y3 The lower left vertical coordinate.
 * @param {number} x4 The lower right horizontal coordinate.
 * @param {number} y4 The lower right vertical coordinate.
 * @returns {string} An svg path string. 
 */
function edgeVert (x1,y1,x2,y2,x3,y3,x4,y4) {
    // if (biPartite.edgeMode() == 'straight') {
    if (globals.graph.edgeMode() == 'straight') {
        return `M${x1},${y1}L${x2},${y2}L${x3},${y3}L${x4},${y4}z`;
    } else {
        let mx1 = (x1 + x2) / 2;
        let mx3 = (x3 + x4) / 2;
        return `M${x1},${y1}C${mx1},${y1} ${mx1},${y2},${x2},${y2}L${x3},${y3}C${mx3},${y3} ${mx3},${y4},${x4},${y4}z`;
    }}

/**
 * @function edgeHoriz
 * @desc Helper function to convert edge parameters for a horizontal graph to a path string.
 * @param {number} x1 The upper left horizontal coordinate.
 * @param {number} y1 The upper left vertical coordinate.
 * @param {number} x2 The upper right horizontal coordinate.
 * @param {number} y2 The upper right vertical coordinate.
 * @param {number} x3 The lower left horizontal coordinate.
 * @param {number} y3 The lower left vertical coordinate.
 * @param {number} x4 The lower right horizontal coordinate.
 * @param {number} y4 The lower right vertical coordinate.
 * @returns {string} An svg path string. 
 */
function edgeHoriz (x1,y1,x2,y2,x3,y3,x4,y4) {
    // if (biPartite.edgeMode() =='straight') {
    if (globals.graph.edgeMode() =='straight') {
        return `M${x1},${y1}L${x2},${y2}L${x3},${y3}L${x4},${y4}z`;
    } else {
        let my1 = (y1 + y2) / 2;
        let my3 = (y3 + y4) / 2;
        return `M${x1},${y1}C${x1},${my1} ${x2},${my1},${x2},${y2}L${x3},${y3}C${x3},${my3} ${x4},${my3},${x4},${y4}z`;
    }}

exports.bars = bars;
