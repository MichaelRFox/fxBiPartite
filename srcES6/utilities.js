import {default as d3} from './d3Build.js';
import {textDimensions} from './text.js';
import {biPartite} from './biPartite.js';
import {calculateMainBars, calculateSubBars, calculateEdges} from './calculate.js';
import {default as glb} from './globals.js';
import {getFont} from './font.js';

export function getLabelLengths (data, font) {

    let primary = data.reduce( (a, b) => {return a.concat(textDimensions(b[0], font).width)}, []);
    let secondary = data.reduce( (a, b) => {return a.concat(textDimensions(b[1], font).width)}, []);
    primary = primary.reduce( (a, b) => {return Math.max(a, b)}, 0);
    secondary = secondary.reduce( (a, b) => {return Math.max(a, b)}, 0);

    return {primary: primary, secondary: secondary};

}

export function formatPercent (value) {

    return value < 0.01 ? '< 1%' : `${parseFloat(value * 100).toFixed(0)}%`
}

export function getMargins(data) {
    
    let font = getFont('.biPartite-label'); // for label margins
    let dimensions = getLabelLengths(data, font);
    let minHeight = textDimensions('Mg', font).height;
    font = getFont('.biPartite-percentage'); //for minWidth

    return {
        primary: dimensions['primary'] + biPartite.pad(),
        secondary: dimensions['secondary'] + biPartite.pad(),
        minHeight: minHeight,
        minWidth: textDimensions('100%', font)['width']
    };

}

export function graphSize () {

        const labelMargin = 10;
        const margins = getMargins(biPartite.data());
        const minHeight = margins.minHeight;
        const minWidth = margins.minWidth;
        const labelOffset = (minWidth / 2) + labelMargin;

        let width;
        let height;
        if (biPartite.orient() == 'vertical') {
            width = biPartite.container().getBoundingClientRect().width - margins.primary - margins.secondary - (labelMargin * 2) - (minWidth / 2);
            d3.select('#svgG').attr('transform', `translate(${margins.primary + labelOffset}, ${0})`);
            height = biPartite.container().getBoundingClientRect().height;
        } else {
            width = biPartite.container().getBoundingClientRect().width;
            d3.select('#svgG').attr('transform', `translate(0, ${margins.primary + labelOffset})`);
            height = biPartite.container().getBoundingClientRect().height - margins.primary - margins.secondary - (labelMargin * 2) - (minWidth / 2);
        }

        return [width, height, minWidth, minHeight, labelOffset];
}

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

export function bars (mb) {

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

export function fill (d) {
    
    const key = d.primary == undefined ? d.key : d.primary;
    let index = glb.sourceKeys.indexOf(key);
    index = index % (glb.fillColors.length); //wrao around
    return glb.fillColors[index];
}

export function initArray (n) {

    let a = new Array(n);
    for (let i = 0; i < n; ++i) {
        a[i] = 0
    };

    return a;

};

export function getKeys (data) {

    let sourceKeys = [... new Set(data.reduce((a,b) => {return a.concat(keyPrimary(b))}, []))];
    let targetKeys = [... new Set(data.reduce((a,b) => {return a.concat(keySecondary(b))}, []))];

    return {sourceKeys: sourceKeys, targetKeys: targetKeys};
}

export function keyPrimary (d) {return d[0]};
export function keySecondary (d) {return d[1]};
export function value (d) {return d[2]};
export function fx (d) {return -d.width};
export function fy (d) {return -d.height};
export function fw (d) {return 2 * d.width};
export function fh (d) {return 2 * d.height};
