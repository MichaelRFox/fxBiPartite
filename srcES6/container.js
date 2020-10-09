import {biPartite} from './biPartite.js';
import {default as glb} from './globals.js';

let start;
let active = false;
let width;
let height;

export function startListener () {

    active = true;
    window.requestAnimationFrame(containerListener);
}

export function stopListener () {
    active = false;
}

function containerListener (timeStamp) {

    start = start == undefined ? timeStamp : start;

    const threshold = 60;
    const elapsed = timeStamp - start;

    if (elapsed > threshold) {
        start = timeStamp;
        newWidth = biPartite.container().getBoundingClientRect().width;
        newHeight = biPartite.container().getBoundingClientRect().height;
        width = width == undefined ? newWidth : width;
        height = height == undefined ? newHeight : height;
        if (width != newWidth || height != newHeight) {
            width = newWidth;
            height = newHeight;
            glb.refresh = true;
            biPartite.update(true);
        };
    };
    if (active == true) requestAnimationFrame(containerListener);
    
}

