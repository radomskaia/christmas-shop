import {TABLET_WIDTH} from "./utils.js";

const CLICKS_FOR_DESKTOP = 3;
const CLICKS_FOR_TABLET = 6;
const SMALL_PADDING_WIDTH = 976;
const SMALL_PADDING = 8;
const NORMAL_PADDING = 82;

const sliderElement = document.querySelector('.slider');
const [leftButton, rightButton] = document.querySelectorAll('.btn_arrow');
let sliderOffset = 0;
let buttonDisabled = 'left';

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
    return sliderElement.scrollWidth - sliderElement.clientWidth;
}

function getSliderOffsetStep(maxOffset) {
    const screenWidth = document.documentElement.clientWidth;
    const padding = getPadding(screenWidth);
    const clickAmount = getClickAmount(screenWidth);

    return (maxOffset + padding) / clickAmount;
}

function setButtonDisabled(button, bool, direction = '') {
    buttonDisabled = bool ? direction : bool;
    button.disabled = bool;
}

function updateSliderPosition() {
    sliderElement.style.left = `${sliderOffset}px`;
}

function moveSlider() {
    const direction = this;

    if (direction === buttonDisabled) {
        return
    }

    const directionSettings = {
        left: {
            multiplier: 1,
            button: leftButton,
        },
        right: {
            multiplier: -1,
            button: rightButton,
        },
    }

    if (buttonDisabled) {
        setButtonDisabled(directionSettings[buttonDisabled].button, false)
    }

    let maxOffset = getMaxOffset();

    sliderOffset += getSliderOffsetStep(maxOffset) * directionSettings[direction].multiplier;

    if (sliderOffset >= 0) {
        sliderOffset = 0;
        setButtonDisabled(directionSettings[direction].button, true, direction)

    }
    if (sliderOffset <= -maxOffset) {
        sliderOffset = -maxOffset;
        setButtonDisabled(directionSettings[direction].button, true, direction)
    }

    updateSliderPosition()
}

function handleResize() {
    setButtonDisabled(rightButton, false);
    setButtonDisabled(leftButton, true, 'left');
    sliderOffset = 0;
    updateSliderPosition();
}

export function slider() {

    const moveToLeft = moveSlider.bind('left');
    const moveToRight = moveSlider.bind('right');

    leftButton.addEventListener('click', moveToLeft);
    rightButton.addEventListener('click', moveToRight);
    window.addEventListener('resize', handleResize);
}
