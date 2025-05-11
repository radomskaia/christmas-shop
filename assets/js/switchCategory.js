import { renderCards } from "./renderCards.js";

export function switchCategory() {
  let activeTab = "all";
  const tabsList = document.querySelector(".tabs-list");

  tabsList.addEventListener("click", (e) => {
    const selectedTab = e.target.closest(".btn_tab")?.getAttribute("for");
    if (selectedTab && selectedTab !== activeTab) {
      renderCards(selectedTab);
      activeTab = selectedTab;
    }
  });
}
