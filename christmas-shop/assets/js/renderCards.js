import giftsData from "../gifts.json";
import {createDOMElement} from "./utils.js";

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

function getRandomArr(tabName, page) {
    const categories = {
        all: {
            min: 0,
            max: 36,
            amount: page === 'gifts' ? 36 : 4,
        },
        work: {
            min: 0,
            max: 12,
            amount: 12,
        },
        health: {
            min: 12,
            max: 24,
            amount: 12,
        },
        harmony: {
            min: 24,
            max: 36,
            amount: 12,
        },
    }
    let result = new Set;
    while (result.size < categories[tabName].amount) {
        result.add(Math.floor(Math.random()
            * (categories[tabName].max - categories[tabName].min)
            + categories[tabName].min));
    }
    return [...result];
}

export function renderCards(tabName, page = 'gifts') {
    const cardsList = document.querySelector('.card-list');
    cardsList.innerHTML = '';
    const cardsArr = getRandomArr( tabName, page);
    cardsArr.forEach((index) => {
        cardsList.appendChild(createCard(giftsData[index], index));
    })
}
