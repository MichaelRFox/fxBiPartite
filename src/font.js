function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if ('string' === typeof o) return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if ('Object' === n && o.constructor) n = o.constructor.name;
    if ('Map' === n || 'Set' === n) return Array.from(o);
    if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
    if ('undefined' !== typeof Symbol && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
    if (null == len || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
}

export function getFont(rule) {
    rule = rule.toLowerCase();
    var fontStyle = getComputedStyle(document.documentElement, null).getPropertyValue('font-style');
    var fontVariant = getComputedStyle(document.documentElement, null).getPropertyValue('font-variant');
    var fontWeight = getComputedStyle(document.documentElement, null).getPropertyValue('font-weight');
    var fontSize = getComputedStyle(document.documentElement, null).getPropertyValue('font-size');
    var lineHeight = getComputedStyle(document.documentElement, null).getPropertyValue('line-height');
    var fontFamily = getComputedStyle(document.documentElement, null).getPropertyValue('font-family');
    var rules;
    var selectorText;
    _toConsumableArray(document.styleSheets).forEach(function(d) {
        rules = d.cssRules ? d.cssRules : d.rules;
        for (var i = 0; i < rules.length; i++) {
            selectorText = rules[i].selectorText.toLowerCase().split(/[\s,>+~]+/);
            for (var j = 0; j < selectorText.length; j++) if (-1 != selectorText[j].indexOf(rule)) {
                if ('' != rules[i].style['font']) return rules[i].style['font'];
                fontStyle = '' == rules[i].style['font-style'] ? fontStyle : rules[i].style['font-style'];
                fontVariant = '' == rules[i].style['font-variant'] ? fontVariant : rules[i].style['font-variant'];
                fontWeight = '' == rules[i].style['font-weight'] ? fontWeight : rules[i].style['font-weight'];
                fontSize = '' == rules[i].style['font-size'] ? fontSize : rules[i].style['font-size'];
                lineHeight = '' == rules[i].style['line-height'] ? lineHeight : rules[i].style['line-height'];
                fontFamily = '' == rules[i].style['font-family'] ? fontFamily : rules[i].style['font-family'];
            }
        }
    });
    return ''.concat(fontStyle, ' ').concat(fontVariant, ' ').concat(fontWeight, ' ').concat(fontSize, '/').concat(lineHeight, ' ').concat(fontFamily);
}