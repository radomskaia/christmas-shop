import giftsData from "../gifts.json";
import {cardCategory} from "./utils.js";

const modalEl = document.querySelector('.modal');

let data;

function paintStars(num, starsArr, value) {
    for (let i = 0; i < num; i++) {
        starsArr[i].style.fillOpacity = value;
    }
}

function changeModalContent(data, bool) {
    const giftImg = document.querySelector('.card-img.modal-bg');
    const [giftCategory, giftName, giftDescription] = document.querySelectorAll('.modal-info > *')
    const [liveEl, createEl, loveEl, dreamEl] = document.querySelectorAll('.superpowers-grade')
    const [liveStarList, createStarList, loveStarList, dreamStarList] = document.querySelectorAll('.stars-list');

    giftCategory.textContent = bool ? data.category : '';
    giftName.textContent = bool ? data.name : '';
    giftDescription.textContent = bool ? data.description : '';
    if (bool) {
        giftImg.classList.add(cardCategory[data.category])
    } else {
        giftImg.classList.remove(cardCategory[data.category])
    }
    loveEl.textContent = bool ? data.superpowers.love : '';
    paintStars(data.superpowers.love[1], loveStarList.querySelectorAll('svg'), (bool ? 1 : 0.1));
    createEl.textContent = bool ? data.superpowers.create : '';
    paintStars(data.superpowers.create[1], createStarList.querySelectorAll('svg'), (bool ? 1 : 0.1));
    liveEl.textContent = bool ? data.superpowers.live : '';
    paintStars(data.superpowers.live[1], liveStarList.querySelectorAll('svg'), (bool ? 1 : 0.1));
    dreamEl.textContent = bool ? data.superpowers.dream : '';
    paintStars(data.superpowers.dream[1], dreamStarList.querySelectorAll('svg'), (bool ? 1 : 0.1));
}

function openModal(target) {
    const index = target.dataset.id;
    data = giftsData[index];
    changeModalContent(data, true);
    console.log(modalEl)
    modalEl.showModal();
    document.activeElement.blur()

}

function closeModal() {
    modalEl.close();
    changeModalContent(data, false);
}

export function modal() {
    const cardList = document.querySelector('.card-list');
    const closeBtn = document.querySelector('.modal_btn');

    cardList.addEventListener('click', (e) => {
        const target = e.target.closest('.card-item')
        if (target) {
            openModal(target)
        }
    })

    closeBtn.addEventListener('click', closeModal)

    modalEl.addEventListener('click', (e) => {
        if (!e.target.closest('.content-wrapper')) {
            closeModal()
        }
    })
}


