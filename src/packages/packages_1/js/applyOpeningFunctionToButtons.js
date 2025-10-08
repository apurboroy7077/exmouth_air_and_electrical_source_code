import { handleOpenDeveloperSection } from "./handleOpenDeveloperSection.js";

export const applyOpeningFunctionsToButtons = () => {
  const openingButtons = Array.from(
    document.getElementsByClassName("opening_button_of_developers_section")
  );

  for (let i = 0; i < openingButtons.length; i++) {
    const singleButton = openingButtons[i];
    singleButton.addEventListener("click", handleOpenDeveloperSection);
  }
};
