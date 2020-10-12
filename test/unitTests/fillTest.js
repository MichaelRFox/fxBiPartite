import test from 'tape';
import {fill} from '../../srcES6/utilities.js';
import {default as glb} from '../../srcES6/globals.js';

var d = {};

glb.sourceKeys = ['key1', 'key2', 'key3', 'key4', 'key5', 'key6', 'key7', 'key8', 'key9', 'key10'];

test('fill test - valid key', function(t) {

    d.key = 'key2';
    var expected = '#fc8d62';
    var actual = fill(d);

    t.deepEqual(actual, expected);
    t.end();
});

test('fill test - valid primary', function(t) {

    d.primary = 'key3';
    var expected = '#8da0cb';
    var actual = fill(d);

    t.deepEqual(actual, expected);
    t.end();
});

test('fill test - invalid primary', function(t) {

    d.primary = 'key10';
    var expected = '#fc8d62';
    var actual = fill(d);

    t.deepEqual(actual, expected);
    t.end();
});

test('fill test - lower boundary', function(t) {

    d.primary = 'key1';
    var expected = '#66c2a5';
    var actual = fill(d);

    t.deepEqual(actual, expected);
    t.end();
});

test('fill test - upper boundary', function(t) {

    d.primary = 'key8';
    var expected = '#b3b3b3';
    var actual = fill(d);

    t.deepEqual(actual, expected);
    t.end();
});


