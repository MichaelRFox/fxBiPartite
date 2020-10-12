import test from 'tape';

import {buildSimplexProblem} from '../../srcES6/simplexProblem.js'

test('Simplex Problem Build', function(t) {

    var data =  [16, 1278, 27, 58, 1551, 141, 5453, 683, 862, 6228, 15001, 527, 836, 28648 ]; 
    var min = 20;
    var available = 800

    var expected = ['Maximize Z = r', 
                    [   '16r + x0 >= 20',
                        '1278r + x1 >= 20', 
                        '27r + x2 >= 20', 
                        '58r + x3 >= 20', 
                        '1551r + x4 >= 20', 
                        '141r + x5 >= 20', 
                        '5453r + x6 >= 20', 
                        '683r + x7 >= 20', 
                        '862r + x8 >= 20', 
                        '6228r + x9 >= 20', 
                        '15001r + x10 >= 20', 
                        '527r + x11 >= 20', 
                        '836r + x12 >= 20', 
                        '28648r + x13 >= 20',
                        '61309r + x0 + x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9 + x10 + x11 + x12 + x13 <= 800']
                    ];

    var actual = buildSimplexProblem (data, min, available)
    t.deepEqual(actual, expected);
    t.end();
});

