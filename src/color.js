export function textColor(bgColor) {
    var lightColor = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '#FFFFFF';
    var darkColor = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '#000000';
    var color = '#' === bgColor.charAt(0) ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16);
    var g = parseInt(color.substring(2, 4), 16);
    var b = parseInt(color.substring(4, 6), 16);
    var uicolors = [ r / 255, g / 255, b / 255 ];
    var c = uicolors.map(function(col) {
        if (col <= .03928) return col / 12.92;
        return Math.pow((col + .055) / 1.055, 2.4);
    });
    var L = .2126 * c[0] + .7152 * c[1] + .0722 * c[2];
    return L > .179 ? darkColor : lightColor;
}