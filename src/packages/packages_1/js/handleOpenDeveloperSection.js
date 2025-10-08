import { handleCloseDevelopersSection } from "./handleCloseDevelopersSection.js";
import getCodeFromHtmlFile, { waitAR7 } from "./utilsAr7.js";

export const handleOpenDeveloperSection = async () => {
  const divAR7 = document.getElementsByClassName("about_developers_div_ar7")[0];
  if (!divAR7) {
    return;
  }
  const isPreviousModalStillOpen =
    divAR7.classList.contains("active_section_ar7");
  if (isPreviousModalStillOpen) {
    return;
  }
  const codeAR7 = await getCodeFromHtmlFile(
    "./src/packages/packages_1/components/active_section.html"
  );
  divAR7.outerHTML = codeAR7;
  const divAR7_2 = document.getElementsByClassName(
    "about_developers_div_ar7"
  )[0];
  await waitAR7(100);
  divAR7_2.style.height = "100vh";
  divAR7_2.style.opacity = "1";

  const closeButton = document.getElementsByClassName(
    "developers_section_close_button_ar7"
  )[0];

  closeButton.addEventListener("click", handleCloseDevelopersSection);
};
