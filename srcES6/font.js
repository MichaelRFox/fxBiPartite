export function getFont(rule) {
    
    rule = rule.toLowerCase();

    // defaults
    let fontStyle = getComputedStyle(document.documentElement, null).getPropertyValue('font-style');
    let fontVariant = getComputedStyle(document.documentElement, null).getPropertyValue('font-variant');
    let fontWeight = getComputedStyle(document.documentElement, null).getPropertyValue('font-weight');
    let fontSize = getComputedStyle(document.documentElement, null).getPropertyValue('font-size');
    let lineHeight = getComputedStyle(document.documentElement, null).getPropertyValue('line-height');
    let fontFamily = getComputedStyle(document.documentElement, null).getPropertyValue('font-family');

    let rules;
    let selectorText;
    
    [...document.styleSheets].forEach( d => {
        rules = d.cssRules ? d.cssRules : d.rules;
        for (let i = 0; i < rules.length; i++) {
            selectorText = rules[i].selectorText.toLowerCase().split(/[\s,>+~]+/); // multiple selectors
            for (let j = 0; j < selectorText.length; j++) {
                if (selectorText[j].indexOf(rule) != -1) {
                    if (rules[i].style['font'] != '') { // detect shorthand declaration
                        return rules[i].style['font'];
                    };
                    fontStyle = rules[i].style['font-style'] == '' ? fontStyle : rules[i].style['font-style'];
                    fontVariant = rules[i].style['font-variant'] == '' ? fontVariant : rules[i].style['font-variant'];
                    fontWeight = rules[i].style['font-weight'] == '' ? fontWeight : rules[i].style['font-weight'];
                    fontSize = rules[i].style['font-size'] == '' ? fontSize : rules[i].style['font-size'];
                    lineHeight = rules[i].style['line-height'] == '' ? lineHeight : rules[i].style['line-height'];
                    fontFamily = rules[i].style['font-family'] == '' ? fontFamily : rules[i].style['font-family'];
                    //break;
                };
            };
        };
    });

    return `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize}/${lineHeight} ${fontFamily}`;
}