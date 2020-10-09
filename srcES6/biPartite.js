import {update} from './update.js';
import {default as glb} from './globals.js';
import {init} from './init.js';
import {graphSize, bars} from './utilities.js';
import {startListener, stopListener} from './container.js';
import {mouseOver, mouseOut, click} from './mouse.js';
import {sortKeys} from './sort.js';


export let biPartite = {};

biPartite.show = function () {

    init();
    biPartite.update();
    return biPartite;
}

biPartite.data = function (data) {
    if (data == undefined) return glb.data;
    glb.data = data;
    glb.refresh = true;
    return biPartite;
}

biPartite.container = function (container) {
    if (container == undefined) return glb.container;
    glb.container = container;
    glb.refresh = true;
    startListener();
    return biPartite;
}

biPartite.fillColors = function (fillColors) {
    if (fillColors == undefined) return glb.fillColors;
    glb.fillColors = fillColors;
    glb.refresh = true;
    return biPartite;
}

biPartite.sort = function (sort) {
    if (sort == undefined) return glb.sort;
    glb.sort = sort;
    glb.refresh = true;
    return biPartite;
}

biPartite.orient = function (orient){
    if (orient == undefined) return glb.orient;
    glb.orient = orient;
    glb.refresh = true;
    return biPartite;
}

biPartite.pad = function (pad) {
    if (pad == undefined) return glb.pad;
    glb.pad = pad;
    glb.refresh = true;
    return biPartite;
}

biPartite.duration = function (duration) {
    if (duration == undefined) return glb.duration;
    glb.duration = duration;
    glb.refresh = true;
    return biPartite;
}

biPartite.edgeOpacity = function (edgeOpacity) {
    if (edgeOpacity == undefined) return glb.edgeOpacity;
    glb.edgeOpacity = edgeOpacity;
    glb.refresh = true;
    return biPartite;
}

biPartite.edgeMode = function (edgeMode) {
    if (edgeMode == undefined) return glb.edgeMode;
    glb.edgeMode = edgeMode;
    glb.refresh = true
    return biPartite;
}

biPartite.event = function (event) {
    if (event == undefined) return glb.event;
    glb.event = event;
    switch (event) {
        case 'hover' :
            glb.eventTypeOver = 'mouseenter';
            glb.eventTypeOut = 'mouseleave';
            glb.eventListenerOver = mouseOver;
            glb.eventListenerOut = mouseOut;
            break;
        case 'click' :
            glb.eventTypeOver = 'click';
            glb.eventTypeOut = 'click';
            glb.eventListenerOver = click;
            glb.eventListenerOut = click;
            break;
        case 'doubleClick' :
            glb.eventTypeOver = 'dblclick';
            glb.eventTypeOut = 'dblclick';
            glb.eventListenerOver = click;
            glb.eventListenerOut = click;
            break;
    };
    return biPartite;
}

biPartite.update = function (noDelay = false) {

    if (glb.refresh == false) return;

    [glb.width, glb.height, glb.minWidth, glb.minHeight, glb.LabelOffset] = graphSize();
    sortKeys(biPartite.data());
    update(bars(), noDelay);
    glb.refresh = false;

}

