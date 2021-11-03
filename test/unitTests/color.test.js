// import {jest} from '@jest/globals';
// import {fill, textColor} from '../../src/color.js';
// import {default as glb} from '../../src/globals.js';

require ('jest');
var color = require ('../src/color');
var glb = require ('../src/globals')


var d = {};

glb.sourceKeys = ['key1', 'key2', 'key3', 'key4', 'key5', 'key6', 'key7', 'key8', 'key9', 'key10'];

test.each`
    input       |   expected
    ${'key2'}   |   ${'#fc8d62'}
    ${'key3'}   |   ${'#8da0cb'}
    ${'key10'}  |   ${'#fc8d62'}
    ${'key1'}   |   ${'#66c2a5'}
    ${'key8'}   |   ${'#b3b3b3'}
    ${'key11'}  |   ${'#000000'}
    `('fill Function Test - returns $expected when input is $input', ({input, expected}) => {
        d.key = input
        expect(color.fill(d)).toBe(expected);
});

// test.each`
//     input           |   expected
//     ${'#587E72'}    |   ${'#000000'}
//     ${'#747781'}    |   ${'#000000'}
//     ${'#536797'}    |   ${'#FFFFFF'}
//     ${'#8F7677'}    |   ${'#000000'}
//     ${'#82595A'}    |   ${'#FFFFFF'}
//     ${'#538888'}    |   ${'#000000'}
//     ${'#477171'}    |   ${'#FFFFFF'}
//     `('textColor Function Test - returns $expected when input is $input', ({input, expected}) => {
//         d.key = input
//         expect(color.textColor(input)).toBe(expected);
// });