import giftsData from "../gifts.json";

function createDOMElement(option) {
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

function createCard(data, index) {
    const cardCategory = {
        'For Work': 'card-work',
        'For Health': 'card-health',
        'For Harmony': 'card-harmony',
    }
    const cardItem = createDOMElement({
        tagName: 'li',
        classList: 'card-item flex flex--column',
        attributes: {data_id: index}
    });
       createDOMElement({
        classList: `card-img ${cardCategory[data.category]} card-bg`,
        appendParent: cardItem,
    });
    const cardText = createDOMElement({
        tagName: 'div',
        classList: `card-text`,
        appendParent: cardItem
    });
    createDOMElement({
        tagName: 'p',
        classList: 'header_4',
        textContent: data.category,
        appendParent: cardText
    });
    createDOMElement({
        tagName: 'p',
        classList: 'header_3',
        textContent: data.name,
        appendParent: cardText
    });
    return cardItem;
}

function getRandomArr(num, maxIndex) {
    let result = new Set;
    while (result.size < num) {
        result.add(Math.floor(Math.random() * maxIndex));
    }
    return [...result];
}

export function renderCards(num, maxIndex) {
    const cardsList = document.querySelector('.card-list');
    const cardsArr = getRandomArr(num, maxIndex);
    // console.log(cardsArr);
    cardsArr.forEach((index) => {
        cardsList.appendChild(createCard(giftsData[index], index));
    })
}
