import {debounce, TABLET_WIDTH} from "./utils.js";

const CLICKS_FOR_DESKTOP = 3;
const CLICKS_FOR_TABLET = 6;
const SMALL_PADDING_WIDTH = 976;
const SMALL_PADDING = 8;
const NORMAL_PADDING = 82;

const sliderElement = document.querySelector('.slider');
const [leftButton, rightButton] = document.querySelectorAll('.btn_arrow');
let sliderOffset = 0;
let disabledButtonState = 'left';
const debouncedHandleResize = debounce(handleResize);

function getClickAmount(screenWidth) {
    return screenWidth > TABLET_WIDTH ? CLICKS_FOR_DESKTOP : CLICKS_FOR_TABLET;
}

function getPadding(screenWidth) {
    return screenWidth > SMALL_PADDING_WIDTH ? NORMAL_PADDING : SMALL_PADDING;
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

function setButtonDisabled(button, isDisabled, direction = '') {
    disabledButtonState = direction ? direction : isDisabled;
    button.disabled = isDisabled;
}

function updateSliderPosition() {
    sliderElement.style.left = `${sliderOffset}px`;
}

function moveSlider(direction) {
    if (direction === disabledButtonState) {
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

    const { multiplier, button } = directionSettings[direction];

    if (disabledButtonState) {
        setButtonDisabled(directionSettings[disabledButton].button, false)
    }

    let maxOffset = getMaxOffset();

    sliderOffset += getSliderOffsetStep(maxOffset) * multiplier;

    if (sliderOffset >= 0) {
        sliderOffset = 0;
        setButtonDisabled(button, true, direction)

    } else if (sliderOffset <= -maxOffset) {
        sliderOffset = -maxOffset;
        setButtonDisabled(button, true, direction)
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
    leftButton.addEventListener('click', () => moveSlider('left'));
    rightButton.addEventListener('click', () => moveSlider('right'));
    window.addEventListener('resize', debouncedHandleResize);
}
