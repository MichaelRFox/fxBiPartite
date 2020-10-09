import { biPartite } from './biPartite.js';

import { default as glb } from './globals.js';

var start;

var active = false;

var width;

var height;

export function startListener() {
    active = true;
    window.requestAnimationFrame(containerListener);
}

export function stopListener() {
    active = false;
}

function containerListener(timeStamp) {
    start = void 0 == start ? timeStamp : start;
    var threshold = 60;
    var elapsed = timeStamp - start;
    if (elapsed > threshold) {
        start = timeStamp;
        newWidth = biPartite.container().getBoundingClientRect().width;
        newHeight = biPartite.container().getBoundingClientRect().height;
        width = void 0 == width ? newWidth : width;
        height = void 0 == height ? newHeight : height;
        if (width != newWidth || height != newHeight) {
            width = newWidth;
            height = newHeight;
            glb.refresh = true;
            biPartite.update(true);
        }
    }
    if (true == active) requestAnimationFrame(containerListener);
}