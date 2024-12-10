import giftsData from "../gifts.json";
import {cardCategory, createDOMElement} from "./utils.js";
const TOTAL_CARDS = 36;
const CARDS_PER_HOME_PAGE = 4;
const CARDS_PER_CATEGORY = 12;
const CATEGORY_INDEX_BREAKPOINTS = {
    WORK: 12,
    HEALTH: 24,
    HARMONY: 36,
};

function createCard(data, index) {
    const cardItem = createDOMElement({
        tagName: 'li',
        classList: 'card-item flex flex--column',
        attributes: {'data-id': index}
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
            max: TOTAL_CARDS,
            amount: page === 'gifts' ? TOTAL_CARDS : CARDS_PER_HOME_PAGE,
        },
        work: {
            min: 0,
            max: CATEGORY_INDEX_BREAKPOINTS.WORK,
            amount: CARDS_PER_CATEGORY,
        },
        health: {
            min: CATEGORY_INDEX_BREAKPOINTS.WORK,
            max: CATEGORY_INDEX_BREAKPOINTS.HEALTH,
            amount: CARDS_PER_CATEGORY,
        },
        harmony: {
            min: CATEGORY_INDEX_BREAKPOINTS.HEALTH,
            max: CATEGORY_INDEX_BREAKPOINTS.WORK,
            amount: CARDS_PER_CATEGORY,
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
