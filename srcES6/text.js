export function textDimensions (text, font) {

    let returnDimension = {};
    let pseudoDiv = insertPseudoDiv(text, font);

    returnDimension = { width: parseInt(window.getComputedStyle(pseudoDiv, null).getPropertyValue('width'), 10),
                        height: parseInt(window.getComputedStyle(pseudoDiv, null).getPropertyValue('height'), 10)
                        };

    document.body.removeChild(pseudoDiv);
    return returnDimension;
};

function insertPseudoDiv(text, font) {

    let pseudoDiv;

    if (document.getElementById('pseudoDiv') == null) {
        pseudoDiv = document.createElement('div');
        document.body.insertBefore(pseudoDiv, document.body.firstChild);
        pseudoDiv.setAttribute('id', 'pseudoDiv');
        pseudoDiv.style.visibility = 'hidden';
        pseudoDiv.style.position = 'absolute';
        pseudoDiv.style.display = 'inline-block';
    } else {
        pseudoDiv = document.getElementById('pseudoDiv');
    };

    pseudoDiv.style.font = font;

    let textNode = document.createTextNode(text);
    pseudoDiv.appendChild(textNode);      
    
    return pseudoDiv;

};
