

// function luminance (rgbColor) {
// for each c in r,g,b:
//     c = c / 255.0
//     if c <= 0.03928 then c = c/12.92 else c = ((c+0.055)/1.055) ^ 2.4
// L = 0.2126 * r + 0.7152 * g + 0.0722 * b    
// }


export function textColor (bgColor, lightColor = '#FFFFFF', darkColor = '#000000') {

    let color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    let r = parseInt(color.substring(0, 2), 16); // hexToR
    let g = parseInt(color.substring(2, 4), 16); // hexToG
    let b = parseInt(color.substring(4, 6), 16); // hexToB
    let uicolors = [r / 255, g / 255, b / 255];
    let c = uicolors.map((col) => {
        if (col <= 0.03928) {
            return col / 12.92;
        }
        return Math.pow((col + 0.055) / 1.055, 2.4);
    });
    var L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
    return (L > 0.179) ? darkColor : lightColor;
}