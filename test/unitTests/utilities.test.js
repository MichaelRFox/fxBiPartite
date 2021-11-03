// import {jest} from '@jest/globals';
// import {formatPercent, collapsePath, initArray, getKeys} from '../../src/utilities.js';
require('jest');
var utilities = require('../src/utilities')

test.each`
    input    |   expected
    ${0.1}   |   ${'10%'}
    ${100}   |   ${'10000%'}
    ${0.001} |   ${'< 1%'}
    ${0.5}   |   ${'50%'}
    `('formatPercent - returns $expected when input is $input', ({input, expected}) => {
        expect(utilities.formatPercent(input)).toBe(expected);
});


test.each ([
    {input: 'M28.7890625,2.0781456C768.4375,2.0781456 768.4375,275.6949345999999,1508.0859375,275.6949345999999L1508.0859375,275.66367379999997C768.4375,275.66367379999997 768.4375,2,28.7890625,2z',
    expected: 'M28.7890625 2.0781456 L28.7890625 2z'},
    {input: 'M2,28.7890625C2,357.5859375 827.94304915,357.5859375,827.94304915,686.3828125L828.0680891499999,686.3828125C828.0680891499999,357.5859375 2.1512048000000004,357.5859375,2.1512048000000004,28.7890625z',
    expected: 'M2 28.7890625 L2.1512048000000004 28.7890625z'},
    {input: 'M28.7890625,2.0781456L1508.0859375,275.6949345999999L1508.0859375,275.66367379999997L28.7890625,2z',
    expected: 'M28.7890625 2.0781456 L28.7890625 2z'},
    {input: 'M2,28.7890625L827.94304915,686.3828125L828.0680891499999,686.3828125L2.1512048000000004,28.7890625z',
    expected: 'M2 28.7890625 L2.1512048000000004 28.7890625z'}
    ])('collapsePath - returns $expected when input is $input', ({input, expected}) => {
        expect(utilities.collapsePath(input)).toBe(expected);
});

test.each`
    input  |   expected
    ${5}   |   ${[0,0,0,0,0]}
    ${10}  |   ${[0,0,0,0,0,0,0,0,0,0]}
    ${7}   |   ${[0,0,0,0,0,0,0]}
    `('initArray - returns $expected when input is $input', ({input, expected}) => {
        expect(utilities.initArray(input)).toStrictEqual(expected);
});

const data = [
                ["Lite", "CA", 16 ],
                ["Small", "CA", 1278 ],
                ["Medium", "CA", 27 ],
                ["Plus", "CA", 58 ],
                ["Grand", "CA", 1551 ],
                ["Elite", "CA", 141 ],
                ["Lite", "AZ", 5453 ],
                ["Small", "AZ", 683 ],
                ["Medium", "AZ", 862 ],
                ["Grand", "AZ", 6228 ],
                ["Lite", "AL", 15001 ],
                ["Small", "AL", 527 ],
                ["Medium", "AL", 836 ],
                ["Plus", "AL", 28648 ],
                ["Grand", "AL", 3 ],
                ["Lite", "CO", 13 ],
                ["Small", "CO", 396 ],
                ["Medium", "CO", 362 ],
                ["Plus", "CO", 78 ],
                ["Grand", "CO", 2473 ],
                ["Elite", "CO", 2063 ],
                ["Medium", "DE", 203 ],
                ["Grand", "DE", 686 ],
                ["Elite", "DE", 826 ]
            ];

const expected = {sourceKeys: ["Lite", "Small", "Medium", "Plus", "Grand", "Elite"] , targetKeys: ["CA", "AZ", "AL", "CO", "DE"]};

test('getKeys Test', () => {
  expect(utilities.getKeys(data)).toStrictEqual(expected);
});