export function textDimensions(text, font) {
    var returnDimension = {};
    var pseudoDiv = insertPseudoDiv(text, font);
    returnDimension = {
        width: parseInt(window.getComputedStyle(pseudoDiv, null).getPropertyValue('width'), 10),
        height: parseInt(window.getComputedStyle(pseudoDiv, null).getPropertyValue('height'), 10)
    };
    document.body.removeChild(pseudoDiv);
    return returnDimension;
}

function insertPseudoDiv(text, font) {
    var pseudoDiv;
    if (null == document.getElementById('pseudoDiv')) {
        pseudoDiv = document.createElement('div');
        document.body.insertBefore(pseudoDiv, document.body.firstChild);
        pseudoDiv.setAttribute('id', 'pseudoDiv');
        pseudoDiv.style.visibility = 'hidden';
        pseudoDiv.style.position = 'absolute';
        pseudoDiv.style.display = 'inline-block';
    } else pseudoDiv = document.getElementById('pseudoDiv');
    pseudoDiv.style.font = font;
    var textNode = document.createTextNode(text);
    pseudoDiv.appendChild(textNode);
    return pseudoDiv;
}