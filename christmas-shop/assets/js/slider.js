import {getScreenWidth} from "./utils.js";

const CLICKS_FOR_DESKTOP = 3;
const CLICKS_FOR_TABLET = 6;
const SMALL_PADDING_WIDTH = 976;
const TABLET_WIDTH = 768;
const SMALL_PADDING = 8;
const NORMAL_PADDING = 82;

const sliderEl = document.querySelector('.slider');
const [leftBtn, rightBtn] = document.querySelectorAll('.btn_arrow');
let sliderOffset = 0;
let btnDisabled = 'left';

function getClickAmount(screenWidth) {
    if (screenWidth > TABLET_WIDTH) {
        return CLICKS_FOR_DESKTOP
    }

    return CLICKS_FOR_TABLET;
}

function getPadding(screenWidth) {
    if (screenWidth > SMALL_PADDING_WIDTH) {
        return NORMAL_PADDING
    }

    return SMALL_PADDING;
}

function getMaxOffset() {
    return sliderEl.scrollWidth - sliderEl.clientWidth;
}

function getSliderOffsetStep(maxOffset) {
    let screenWidth = getScreenWidth();
    let padding = getPadding(screenWidth);
    let clickAmount = getClickAmount(screenWidth);

    return (maxOffset + padding) / clickAmount;
}

function setButtonDisabled(btn, bool, direction = '') {
    btnDisabled = bool ? direction : bool;
    btn.disabled = bool;
}

function updateSliderPosition() {
    sliderEl.style.left = `${sliderOffset}px`;
}

function moveSlider() {
    const direction = this;

    if (direction === btnDisabled) {
        return
    }

    const directionSettings = {
        left: {
            multiplier: 1,
            btn: leftBtn,
        },
        right: {
            multiplier: -1,
            btn: rightBtn,
        },
    }

    if (btnDisabled) {
        setButtonDisabled(directionSettings[btnDisabled].btn, false)
    }

    let maxOffset = getMaxOffset();

    sliderOffset += getSliderOffsetStep(maxOffset) * directionSettings[direction].multiplier;

    if (sliderOffset >= 0) {
        sliderOffset = 0;
        setButtonDisabled(directionSettings[direction].btn, true, direction)

    }
    if (sliderOffset < -maxOffset) {
        sliderOffset = -maxOffset;
        setButtonDisabled(directionSettings[direction].btn, true, direction)
    }

    updateSliderPosition()
}

function handleResize() {
    setButtonDisabled(rightBtn, false);
    setButtonDisabled(leftBtn, true, 'left');
    sliderOffset = 0;
    updateSliderPosition();
}

export function slider() {

    const moveToLeft = moveSlider.bind('left');
    const moveToRight = moveSlider.bind('right');

    leftBtn.addEventListener('click', moveToLeft);
    rightBtn.addEventListener('click', moveToRight);
    window.addEventListener('resize', handleResize);
}
