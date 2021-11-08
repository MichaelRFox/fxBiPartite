require ('jest');
var color = require ('../src/color');
var glb = require ('../src/globals')

var d = {};

glb.sourceKeys = ['key1', 'key2', 'key3', 'key4', 'key5', 'key6', 'key7', 'key8', 'key9', 'key10'];

test.each`
    input       |   expected
    ${'key2'}   |   ${'rgb(252, 141, 98)'}
    ${'key3'}   |   ${'rgb(141, 160, 203)'}
    ${'key10'}  |   ${'rgb(252, 141, 98)'}
    ${'key1'}   |   ${'rgb(102, 194, 165)'}
    ${'key8'}   |   ${'rgb(179, 179, 179)'}
    ${'key11'}  |   ${'rgb(0, 0, 0)'}
    `('fill Function Test - returns $expected when input is $input', ({input, expected}) => {
        d.key = input
        expect(color.fill(d)).toBe(expected);
});

test.each`
    input                       |   expected
    ${['rgb(88, 126, 114)']}    |   ${'rgb(0, 0, 0)'}
    ${['rgb(116, 119, 129)']}   |   ${'rgb(0, 0, 0)'}
    ${['rgb(83, 103, 151)']}    |   ${'rgb(255, 255, 255)'}
    ${['rgb(143, 118, 119)']}   |   ${'rgb(0, 0, 0)'}
    ${['rgb(130, 89, 90)']}     |   ${'rgb(255, 255, 255)'}
    ${['rgb(83, 136, 136)']}    |   ${'rgb(0, 0, 0)'}
    ${['rgb(71, 113, 113)']}    |   ${'rgb(255, 255, 255)'}
    `('textColor Function Test - returns $expected when input is $input', ({input, expected}) => {
        expect(color.textColor(input)).toBe(expected);
});


test.each`
    r       |   g       |   b          |   luminance
    ${43}   |   ${117}  |   ${177}}    |   ${0.164104955721358}
    ${124}  |   ${61}   |   ${82}}     |   ${0.08231769177831301}
    ${47}   |   ${138}  |   ${129}}    |   ${0.2036627454845004}
    ${186}  |   ${172}  |   ${50}}     |   ${0.40174440342920925}
    ${0}    |   ${0}    |   ${0}}      |   ${0}
    ${255}  |   ${255}  |   ${255}}    |   ${1}

    `('Luminance Function Test - returns $luminance when r = $r, g = $g, and b = $b', ({r, g, b, luminance}) => {
        expect(color.luminance(r, g, b)).toBe(luminance);
});

test.each`
    r       |   g       |   b          |   dark     |   light
    ${43}   |   ${117}  |   ${177}}    |   ${4.28}  |   ${4.9}
    ${124}  |   ${61}   |   ${82}}     |   ${2.65}  |   ${7.94}
    ${47}   |   ${138}  |   ${129}}    |   ${5.07}  |   ${4.14}
    ${186}  |   ${172}  |   ${50}}     |   ${9.03}  |   ${2.32}
    ${0}    |   ${0}    |   ${0}}      |   ${1}     |   ${21}
    ${255}  |   ${255}  |   ${255}}    |   ${21}    |   ${1}

    `('Contrast Function Test - returns $contrast when r = $r, g = $g, and b = $b', ({r, g, b, dark, light}) => {
        expect(color.contrast(r, g, b).dark).toBeCloseTo(dark, 2);
        expect(color.contrast(r, g, b).light).toBeCloseTo(light, 2);
});

test.each`
    hex             |   rgb
    ${'#fd8724'}    |   ${[253, 135, 36]}
    ${'#dddddd'}    |   ${[221, 221, 221]}
    ${'#FFFFFF'}    |   ${[255, 255, 255]}
    ${'#458362'}    |   ${[69, 131, 98]}
    ${'#000'}       |   ${[0, 0, 0]}
    `('textColor Function Test - returns $expected when input is $input', ({hex, rgb}) => {
        expect(color.hexToRgb(hex)).toStrictEqual(rgb);
});


test.each`
    input                       |   expected
    ${'#fd8724'}                |   ${'rgb(253, 135, 36)'}
    ${'rgba(252, 141, 98, 0)'}  |   ${'rgb(252, 141, 98)'}
    ${'rgb(102, 194, 165)'}     |   ${'rgb(102, 194, 165)'}
    ${'#000'}                   |   ${'rgb(0, 0, 0)'}
    `('parseColor Test - returns $expected when input is $input', ({input, expected}) => {
        expect(color.parseColor(input)).toBe(expected);
});

test.each`
    rgb                             |   result
    ${'rgb(253, 135, 36)'}          |   ${[253, 135, 36]}
    ${'rgb(221, 221, 221)'}         |   ${[221, 221, 221]}
    ${'rgba(255, 255, 255, 0.5)'}   |   ${[255, 255, 255, 0.5]}
    ${'rgb(69, 131, 98)'}           |   ${[69, 131, 98]}
    ${'rgb(0, 0, 0)'}               |   ${[0, 0, 0]}
    `('splitRgb Function Test - returns $expected when input is $input', ({rgb, result}) => {
        expect(color.splitRgb(rgb)).toStrictEqual(result);
});