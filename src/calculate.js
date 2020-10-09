import { bpMap } from './bpMap.js';

import { biPartite } from './biPartite.js';

import { default as glb } from './globals.js';

import { keyPrimary, keySecondary, value } from './utilities.js';

export function calculateMainBars(part, mb) {
    var mainBars = [];
    var orient = biPartite.orient();
    var ps = [];
    var mbData = biPartite.data().slice();
    var keys = 'primary' == part ? glb.sourceKeys : glb.targetKeys;
    var key = 'primary' == part ? keyPrimary : keySecondary;
    var altKey = 'primary' == part ? keySecondary : keyPrimary;
    keys.forEach(function(d) {
        var sum = void 0 != mb && mb.part != part ? mbData.reduce(function(a, b) {
            return key(b) == d && altKey(b) == mb.key ? a + value(b) : a;
        }, 0) : mbData.reduce(function(a, b) {
            return key(b) == d ? a + value(b) : a;
        }, 0);
        ps.push({
            key: d,
            value: sum
        });
    });
    var bars = bpMap(ps, biPartite.pad(), glb.minHeight, 0, 'vertical' == orient ? glb.height : glb.width);
    ps.forEach(function(d, i) {
        mainBars.push({
            x: 'horizontal' == orient ? (bars[i].s + bars[i].e) / 2 : 'primary' == part ? 0 : glb.width - glb.minWidth / 2,
            y: 'vertical' == orient ? (bars[i].s + bars[i].e) / 2 : 'primary' == part ? 0 : glb.height - glb.minWidth / 2,
            height: 'vertical' == orient ? (bars[i].e - bars[i].s) / 2 : glb.minWidth / 2,
            width: 'horizontal' == orient ? (bars[i].e - bars[i].s) / 2 : glb.minWidth / 2,
            part,
            key: d.key,
            value: d.value,
            percent: bars[i].p
        });
    });
    return mainBars;
}

export function calculateSubBars(part, mb, mainBars) {
    var orient = biPartite.orient();
    var subBars = [];
    var ps = [];
    var sbData = biPartite.data().slice();
    var keys = 'primary' == part ? glb.sourceKeys : glb.targetKeys;
    var key = 'primary' == part ? keyPrimary : keySecondary;
    var altKey = 'primary' == part ? keySecondary : keyPrimary;
    keys.forEach(function(d) {
        var values = void 0 != mb && mb.part != part ? sbData.reduce(function(a, b) {
            return key(b) == d ? altKey(b) == mb.key ? a.concat({
                key: altKey(b),
                value: value(b)
            }) : a.concat({
                key: altKey(b),
                value: 0
            }) : a;
        }, []) : sbData.reduce(function(a, b) {
            return key(b) == d ? a.concat({
                key: altKey(b),
                value: value(b)
            }) : a;
        }, []);
        ps.push({
            key: d,
            values
        });
    });
    ps.forEach(function(d) {
        var g = mainBars[part].filter(function(e) {
            return e.key == d.key;
        })[0];
        var bars = bpMap(d.values, 0, 0, 'vertical' == orient ? g.y - g.height : g.x - g.width, 'vertical' == orient ? g.y + g.height : g.x + g.width);
        d.values.forEach(function(t, i) {
            subBars.push({
                x: 'vertical' == orient ? 'primary' == part ? 0 : glb.width - glb.minWidth / 2 : (bars[i].s + bars[i].e) / 2,
                y: 'horizontal' == orient ? 'primary' == part ? 0 : glb.height - glb.minWidth / 2 : (bars[i].s + bars[i].e) / 2,
                height: ('vertical' == orient ? bars[i].e - bars[i].s : glb.minWidth) / 2,
                width: ('horizontal' == orient ? bars[i].e - bars[i].s : glb.minWidth) / 2,
                part,
                primary: 'primary' == part ? d.key : t.key,
                secondary: 'primary' == part ? t.key : d.key,
                value: t.value,
                percent: bars[i].p * g.percent,
                index: 'primary' == part ? ''.concat(d.key, '|').concat(t.key) : ''.concat(t.key, '|').concat(d.key)
            });
        });
    });
    return subBars;
}

export function calculateEdges(subBars) {
    return subBars.primary.map(function(d) {
        var g = subBars.secondary.filter(function(e) {
            return e.index == d.index;
        })[0];
        return {
            path: 'vertical' == biPartite.orient() ? edgeVert(d.x + d.width, d.y + d.height, g.x - g.width, g.y + g.height, g.x - g.width, g.y - g.height, d.x + d.width, d.y - d.height) : edgeHoriz(d.x - d.width, d.y + d.height, g.x - g.width, g.y - g.height, g.x + g.width, g.y - g.height, d.x + d.width, d.y + d.height),
            primary: d.primary,
            secondary: d.secondary,
            value: d.value,
            percent: d.percent
        };
    });
}

export function edgeVert(x1, y1, x2, y2, x3, y3, x4, y4) {
    if ('straight' == biPartite.edgeMode()) return 'M'.concat(x1, ',').concat(y1, 'L').concat(x2, ',').concat(y2, 'L').concat(x3, ',').concat(y3, 'L').concat(x4, ',').concat(y4, 'z'); else {
        var mx1 = (x1 + x2) / 2;
        var mx3 = (x3 + x4) / 2;
        return 'M'.concat(x1, ',').concat(y1, 'C').concat(mx1, ',').concat(y1, ' ').concat(mx1, ',').concat(y2, ',').concat(x2, ',').concat(y2, 'L').concat(x3, ',').concat(y3, 'C').concat(mx3, ',').concat(y3, ' ').concat(mx3, ',').concat(y4, ',').concat(x4, ',').concat(y4, 'z');
    }
}

export function edgeHoriz(x1, y1, x2, y2, x3, y3, x4, y4) {
    if ('straight' == biPartite.edgeMode()) return 'M'.concat(x1, ',').concat(y1, 'L').concat(x2, ',').concat(y2, 'L').concat(x3, ',').concat(y3, 'L').concat(x4, ',').concat(y4, 'z'); else {
        var my1 = (y1 + y2) / 2;
        var my3 = (y3 + y4) / 2;
        return 'M'.concat(x1, ',').concat(y1, 'C').concat(x1, ',').concat(my1, ' ').concat(x2, ',').concat(my1, ',').concat(x2, ',').concat(y2, 'L').concat(x3, ',').concat(y3, 'C').concat(x3, ',').concat(my3, ' ').concat(x4, ',').concat(my3, ',').concat(x4, ',').concat(y4, 'z');
    }
}