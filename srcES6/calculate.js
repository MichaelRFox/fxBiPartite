// import {default as d3} from './d3Build.js';
import {bpMap} from './bpMap.js';
import {biPartite} from './biPartite.js';
import {default as glb} from './globals.js';
import {keyPrimary, keySecondary, value} from './utilities.js';

export function calculateMainBars (part, mb) {
    
    let mainBars = [];
    let orient = biPartite.orient();
    let ps = [];

    let mbData = biPartite.data().slice();

    let keys = part == 'primary' ? glb.sourceKeys : glb.targetKeys;
    
    let key = part == 'primary' ? keyPrimary : keySecondary;
    let altKey = part == 'primary' ?  keySecondary: keyPrimary;
    
    keys.forEach(d => {
        let sum =  (mb != undefined && mb.part != part)
            ? mbData.reduce((a,b) => {return key(b) == d && altKey(b) == mb.key ? a + value(b) : a}, 0)
            : mbData.reduce((a,b) => {return key(b) == d ? a + value(b) : a}, 0);
        ps.push({key: d, value: sum});
    });
    
    let bars = bpMap (ps, biPartite.pad(), glb.minHeight, 0, orient == 'vertical' 
                        ? glb.height 
                        : glb.width);

    ps.forEach ((d,i) => { 
        mainBars.push({
            x: orient == 'horizontal' ? (bars[i].s + bars[i].e) / 2 : (part == 'primary' ? 0 : glb.width - glb.minWidth / 2),
            y: orient == 'vertical' ? (bars[i].s + bars[i].e) / 2 : (part == 'primary' ? 0 : glb.height - glb.minWidth / 2),
            height: orient == 'vertical' ? (bars[i].e - bars[i].s) / 2 : glb.minWidth / 2,
            width: orient == 'horizontal' ? (bars[i].e - bars[i].s) / 2 : glb.minWidth / 2,
            part: part,
            key: d.key,
            value: d.value,
            percent: bars[i].p
        });
    });

    return mainBars
}

export function calculateSubBars (part, mb, mainBars) {
   
    let orient = biPartite.orient();
    let subBars = [];
    let ps = [];

    let sbData = biPartite.data().slice();
    
    let keys = part == 'primary' 
        ? glb.sourceKeys
        : glb.targetKeys;
    
    let key = part == 'primary' ? keyPrimary : keySecondary;
    let altKey = part == 'primary' ?  keySecondary : keyPrimary;
    
    keys.forEach (d => {
        let values = (mb != undefined && mb.part != part)
            ? sbData.reduce((a,b) => {return key(b) == d 
                ? altKey(b) == mb.key
                    ? a.concat({key: altKey(b), value: value(b)})
                    : a.concat({key: altKey(b), value: 0})
                : a}, [])
            : sbData.reduce((a,b) => {return key(b) == d 
                ? a.concat({key: altKey(b), value: value(b)}) 
                : a}, []);
        ps.push({key: d, values: values});
    });

    ps.forEach (d => {
        let g = mainBars[part].filter(e => {return e.key == d.key})[0];
        let bars = bpMap(d.values, 0, 0,
                orient == 'vertical' ? g.y - g.height : g.x - g.width,
                orient == 'vertical' ? g.y + g.height : g.x + g.width);
         
        d.values.forEach((t, i) => { 
            subBars.push({
                x: orient == 'vertical' ? part == 'primary' ? 0 : glb.width - glb.minWidth / 2 : (bars[i].s + bars[i].e) / 2,
                y: orient == 'horizontal' ? part == 'primary' ? 0 : glb.height - glb.minWidth / 2 : (bars[i].s + bars[i].e) / 2,
                height: (orient == 'vertical' ? bars[i].e - bars[i].s : glb.minWidth) / 2,
                width: (orient == 'horizontal' ? bars[i].e - bars[i].s : glb.minWidth) / 2,
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

export function calculateEdges (subBars) {  
    
    return subBars.primary.map(d => {
        let g = subBars.secondary.filter(e => {return e.index == d.index})[0];
        return {
            path:  biPartite.orient() == 'vertical' 
                ? edgeVert(d.x+d.width,d.y+d.height,g.x-g.width,g.y+g.height,g.x-g.width,g.y-g.height,d.x+d.width,d.y-d.height)
                : edgeHoriz(d.x-d.width,d.y+d.height,g.x-g.width,g.y-g.height,g.x+g.width,g.y-g.height,d.x+d.width,d.y+d.height),
            primary:d.primary,
            secondary:d.secondary,
            value:d.value,
            percent:d.percent
        };
    });
    

}

export function edgeVert (x1,y1,x2,y2,x3,y3,x4,y4) {
    if (biPartite.edgeMode() == 'straight') {
        return `M${x1},${y1}L${x2},${y2}L${x3},${y3}L${x4},${y4}z`;
    } else {
        let mx1 = (x1 + x2) / 2;
        let mx3 = (x3 + x4) / 2;
        return `M${x1},${y1}C${mx1},${y1} ${mx1},${y2},${x2},${y2}L${x3},${y3}C${mx3},${y3} ${mx3},${y4},${x4},${y4}z`;
    };
}

export function edgeHoriz (x1,y1,x2,y2,x3,y3,x4,y4) {
    if (biPartite.edgeMode() =='straight') {
        return `M${x1},${y1}L${x2},${y2}L${x3},${y3}L${x4},${y4}z`;
    } else {
        let my1 = (y1 + y2) / 2;
        let my3 = (y3 + y4) / 2;
        return `M${x1},${y1}C${x1},${my1} ${x2},${my1},${x2},${y2}L${x3},${y3}C${x3},${my3} ${x4},${my3},${x4},${y4}z`;
    };
}