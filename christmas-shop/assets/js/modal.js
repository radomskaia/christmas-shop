import giftsData from "../gifts.json";
import {cardCategory} from "./utils.js";

const modalElement = document.querySelector('.modal');

let data;

function paintStars(num, starsArr, value) {
    for (let i = 0; i < num; i++) {
        starsArr[i].style.fillOpacity = value;
    }
}

function changeModalContent(data, bool) {
    const giftImage = document.querySelector('.card-img.modal-bg');
    const elements = {};
    [elements.category, elements.name, elements.description] = document.querySelectorAll('.modal-info > *');
    [elements.superpowers.live, elements.superpowers.create, elements.superpowers.love, elements.superpowers.dream] = document.querySelectorAll('.superpowers-grade');
    [elements.starsList.live, elements.starsList.create, elements.starsList.love, elements.starsList.dream] = document.querySelectorAll('.stars-list');

    elements.category.textContent = bool ? data.category : '';
    elements.name.textContent = bool ? data.name : '';
    elements.description.textContent = bool ? data.description : '';
    if (bool) {
        giftImage.classList.add(cardCategory[data.category])
    } else {
        giftImage.classList.remove(cardCategory[data.category])
    }
    elements.superpowers.love.textContent = bool ? data.superpowers.love : '';
    paintStars(data.superpowers.love[1], elements.starsList.love.querySelectorAll('svg'), (bool ? 1 : 0.1));
    elements.superpowers.create.textContent = bool ? data.superpowers.create : '';
    paintStars(data.superpowers.create[1], elements.starsList.create.querySelectorAll('svg'), (bool ? 1 : 0.1));
    elements.superpowers.live.textContent = bool ? data.superpowers.live : '';
    paintStars(data.superpowers.live[1], elements.starsList.live.querySelectorAll('svg'), (bool ? 1 : 0.1));
    elements.superpowers.dream.textContent = bool ? data.superpowers.dream : '';
    paintStars(data.superpowers.dream[1], elements.starsList.dream.querySelectorAll('svg'), (bool ? 1 : 0.1));
}

function openModal(target) {
    const index = target.dataset.id;
    data = giftsData[index];
    changeModalContent(data, true);
    modalElement.showModal();
    document.activeElement.blur()

}

function closeModal() {
    modalElement.close();
}

export function modal() {
    const cardList = document.querySelector('.card-list');
    const closeButton = document.querySelector('.modal_btn');

    cardList.addEventListener('click', (e) => {
        const target = e.target.closest('.card-item')
        if (target) {
            openModal(target)
        }
    })

    closeButton.addEventListener('click', closeModal)

    modalElement.addEventListener('click', (e) => {
        if (!e.target.closest('.content-wrapper')) {
            closeModal()
        }
    })
}


