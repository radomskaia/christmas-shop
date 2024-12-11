import giftsData from "../gifts.json";
import { cardCategory, createDOMElement } from "./utils.js";
import { openModal } from "./modal.js";

const TOTAL_CARDS = 36;
const CARDS_PER_HOME_PAGE = 4;
const CARDS_PER_CATEGORY = 12;
const CATEGORY_INDEX_BREAKPOINTS = {
  WORK: 12,
  HEALTH: 24,
  HARMONY: 36,
};
const categories = {
  all: {
    min: 0,
    max: TOTAL_CARDS,
    amount: TOTAL_CARDS,
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
};
const cardsList = document.querySelector(".card-list");

function createCard(data, index) {
  const cardItem = createDOMElement({
    tagName: "li",
    classList: "card-item flex flex--column",
    attributes: { "data-id": index },
  });
  const cardImg = createDOMElement({
    classList: `card-img ${cardCategory[data.category]} card-bg`,
  });
  const cardText = createDOMElement({
    tagName: "div",
    classList: `card-text`,
  });
  const text1 = createDOMElement({
    tagName: "p",
    classList: "header_4",
    textContent: data.category,
  });
  const text2 = createDOMElement({
    tagName: "p",
    classList: "header_3",
    textContent: data.name,
  });

  cardItem.append(cardImg, cardText);
  cardText.append(text1, text2);

  cardItem.addEventListener("click", () => openModal(index));

  return cardItem;
}

function getUniqueRandomArrayForCategory(tabName, page) {
  let result = new Set();
  const amount =
    page === "gifts" ? categories[tabName].amount : CARDS_PER_HOME_PAGE;
  while (result.size < amount) {
    result.add(
      Math.floor(
        Math.random() * (categories[tabName].max - categories[tabName].min) +
          categories[tabName].min,
      ),
    );
  }
  return [...result];
}

export function renderCards(tabName, page = "gifts") {
  cardsList.innerHTML = "";
  const cardsArr = getUniqueRandomArrayForCategory(tabName, page);
  cardsArr.forEach((index) => {
    cardsList.appendChild(createCard(giftsData[index], index));
  });
}
