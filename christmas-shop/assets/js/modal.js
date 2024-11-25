import giftsData from "../gifts.json";

const cardList = document.querySelector('.card-list');
const closeBtn = document.querySelector('.modal_btn');
const modalEl = document.querySelector('.modal');
const giftImg = document.querySelector('.card-img.modal-bg');
const [giftCategory, giftName, giftDescription] = document.querySelectorAll('.modal-info > *')
const [liveEl, createEl, loveEl, dreamEl] = document.querySelectorAll('.superpowers-grade')
const [liveStarList, createStarList, loveStarList, dreamStarList] = document.querySelectorAll('.stars-list');

let data;

const cardCategory = {
    'For Work': 'card-work',
    'For Health': 'card-health',
    'For Harmony': 'card-harmony',
}

function paintStars (num, starsArr, value) {
    for (let i = 0; i < num; i++) {
        starsArr[i].style.fillOpacity = value;
    }
}

function openModal(target) {
    const index = target.getAttribute('data_id');
    data = giftsData[index];
    giftCategory.textContent = data.category;
    giftName.textContent = data.name;
    giftDescription.textContent = data.description;
    giftImg.classList.add(cardCategory[data.category])
    modalEl.showModal();
    loveEl.textContent = data.superpowers.love;
    paintStars(data.superpowers.love[1], loveStarList.querySelectorAll('svg'), 1);
    createEl.textContent = data.superpowers.create;
    paintStars(data.superpowers.create[1], createStarList.querySelectorAll('svg'), 1);
    liveEl.textContent = data.superpowers.live;
    paintStars(data.superpowers.live[1], liveStarList.querySelectorAll('svg'), 1);
    dreamEl.textContent = data.superpowers.dream;
    paintStars(data.superpowers.dream[1], dreamStarList.querySelectorAll('svg'), 1);
    document.documentElement.style.overflow = "hidden";

}

function closeModal() {
    modalEl.close();
    giftCategory.textContent = '';
    giftName.textContent = '';
    giftDescription.textContent = '';
    giftImg.classList.remove(cardCategory[data.category])
    document.documentElement.style.overflow = '';
    paintStars(data.superpowers.love[1], loveStarList.querySelectorAll('svg'), 0.1);
    createEl.textContent = '';
    paintStars(data.superpowers.create[1], createStarList.querySelectorAll('svg'), 0.1);
    liveEl.textContent = '';
    paintStars(data.superpowers.live[1], liveStarList.querySelectorAll('svg'), 0.1);
    dreamEl.textContent = '';
    paintStars(data.superpowers.dream[1], dreamStarList.querySelectorAll('svg'), 0.1);
}

export function modal() {
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


