import { link, messagePortfolio } from "./data.js";
import { qs } from "./helper.js";

export function hookPortfolio() {
  const b = qs(".cta-button");

  b.addEventListener("click", () => {
    const url = `${link}${encodeURIComponent(messagePortfolio)}`;

    window.open(url, "_blank");
  });
}
