// import { waitAR7 } from "../../utils/getCodeFromHtmlFile.js";

import { waitAR7 } from "./utilsAr7.js";

export const handleCloseDevelopersSection = async () => {
  const divAR7 = document.getElementsByClassName("about_developers_div_ar7")[0];
  divAR7.style.height = "0px";
  divAR7.style.opacity = "0";
  await waitAR7(1000);
  divAR7.outerHTML = `<div class="about_developers_div_ar7"></div>`;
};
