export const TABLET_WIDTH = 768;
const DELAY_TIME = 150;

export const mediaQuery = window.matchMedia(`(max-width: ${TABLET_WIDTH}px)`);

export const cardCategory = {
    'For Work': 'card-work',
    'For Health': 'card-health',
    'For Harmony': 'card-harmony',
}

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
    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }
    return element;
}

export function debounce(callback, delay = DELAY_TIME) {
    let timeoutID;
    return function (...args) {
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => callback(...args), delay);
    }
}
