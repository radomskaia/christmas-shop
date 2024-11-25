import {renderCards} from "./renderCards.js";


export function switchCategory() {
    let isChecked = 'all';
    const tabsList = document.querySelector('.tabs-list');

    tabsList.addEventListener('click', (e) => {
        const selectedTab = e.target.closest('.btn_tab')?.getAttribute('for');
        if (selectedTab && selectedTab !== isChecked) {
            renderCards(selectedTab);
            isChecked = selectedTab;
        }
    })
}

