export const TABLET_WIDTH = 768;

export const mediaQuery = window.matchMedia('(max-width: 768px)');

export function createDOMElement(option) {
    let {
        tagName = 'div',
        appendParent = null,
        classList = '',
        textContent = '',
        attributes = {},

    } = option;
    const element = document.createElement(tagName);
    if (appendParent) appendParent.append(element);
    if (classList) {
        classList = classList.split(" ");
        classList.forEach(newClass => {
                element.classList.add(newClass)
            }
        );
    }
    if (textContent) {
        element.textContent = textContent;
    }
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
}
