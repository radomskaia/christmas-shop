import giftsData from "../gifts.json";
import {cardCategory} from "./utils.js";
const FULLY_FILLED = 1;
const PARTIALLY_FILLED = 0.1;
const modalElement = document.querySelector('.modal');

const elements = {superpowers: {}, starsList: {}};
elements.image = document.querySelector('.card-img.modal-bg');
[elements.category, elements.name, elements.description] = document.querySelectorAll('.modal-info > *');
[elements.superpowers.live, elements.superpowers.create, elements.superpowers.love, elements.superpowers.dream] = document.querySelectorAll('.superpowers-grade');
[elements.starsList.live, elements.starsList.create, elements.starsList.love, elements.starsList.dream] = document.querySelectorAll('.stars-list');

const cardList = document.querySelector('.card-list');
const closeButton = document.querySelector('.modal_btn');

function paintStars(num, starsArray) {
    for (let i = 0; i < starsArray.length; i++) {
        starsArray[i].style.fillOpacity = (i < num) ? FULLY_FILLED : PARTIALLY_FILLED;
    }
}
function changeModalContent(data, previousCard) {
    elements.category.textContent = data.category;
    elements.name.textContent = data.name;

    elements.description.textContent = data.description;
    for (const [key, value] of Object.entries(data.superpowers)) {
        elements.superpowers[key].textContent = value;
        paintStars(value[1], elements.starsList[key].querySelectorAll('svg'));

    }
    elements.image.classList.remove(cardCategory[previousCard.category])

    elements.image.classList.add(cardCategory[data.category])
    previousCard.category = data.category;

}
function openModal(target, previousCard) {
    const index = target.dataset.id;
    if (index !== previousCard.index) {
        const data = giftsData[index];
        changeModalContent(data, previousCard);
        previousCard.index = index;
    }
    modalElement.showModal();

    document.activeElement.blur()

}
export function modal() {
    const previousCard = {};

    cardList.addEventListener('click', (e) => {
        const target = e.target.closest('.card-item')
        if (target) {
            openModal(target, previousCard)
        }
    })

    closeButton.addEventListener('click', () => modalElement.close())

    modalElement.addEventListener('click', (e) => {
        if (!e.target.closest('.content-wrapper')) {
            modalElement.close();
        }
    })
}


