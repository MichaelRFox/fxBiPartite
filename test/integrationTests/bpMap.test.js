// import {jest} from '@jest/globals';
// import {bpMap} from '../../src/bpMap.js'

require ('jest');
var bpMap = require('../src/bpMap');
console.log (typeof bpMap);
// waiting for node.js  to be able to handle named exports

test.each ([
    {
        array: [{"key": "Lite", "value": 1738}, {"key": "Small", "value": 12925}, {"key": "Medium", "value": 15413}],
        pad: 0,
        min: 0,
        start: 2,
        end: 66.51903519999999,
        expected: [{"s": 2, "e": 5.6982902, "p": 0.05778693975262668}, {"s": 5.6982902, "e": 33.2013977, "p": 0.42974464689453384}, {"s": 33.2013977, "e": 65.9987204, "p": 0.5124684133528394}]
    },
    {
        array: [{"key": "Lite", "value": 5453}, {"key": "Small", "value": 683}, {"key": "Medium", "value": 862}, {"key": "Grand", "value": 6228}],
        pad: 0,
        min: 0,
        start: 70.51903519999999,
        end: 98.8914504,
        expected: [{"s": 70.51903519999999, "e": 82.06303619999998, "p": 0.4122939664297596}, {"s": 82.06303619999998, "e": 83.50894719999998, "p": 0.05164070769696053}, {"s": 83.50894719999998, "e": 85.33380119999998, "p": 0.06517465598064419 }, {"s": 85.33380119999998, "e": 98.51847719999998, "p": 0.4708906698926357}]
    },
    {
        array: [{"key": "Small", "value": 351}, {"key": "Grand", "value": 405}],
        pad: 0,
        min: 0,
        start: 340.14674279999997,
        end: 341.768514,
        expected: [{"s": 340.14674279999997, "e": 340.61104559999995, "p": 0.4642857142857143}, {"s": 340.61104559999995, "e": 341.14677959999995, "p": 0.5357142857142857}]
    }])('bpMap test - returns $expected when array is $array, pad is $pad, min is $min, start is $start, and end is $end', ({array, pad, min, start, end, expected}) => {
        expect(bpMap.bpMap(array, pad, min, start, end)).toStrictEqual(expected);
});

