import { dataPortfolio } from "../data.js";
import { cElement, property, qs, qsAll } from "../helper.js";

function portfolio() {
  const parent = qs(".container-portfolio");
  const portfolio = cElement("div");

  portfolio.setAttribute("id", "portfolio");

  dataPortfolio.forEach((el) => {
    const cards = cElement("a");
    const img = cElement("img");
    const name = el.customer.split("-");

    const nameFormatted = name.map(
      (word) =>
        word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase(),
    );

    Object.assign(img, {
      src: `./src/assets/img/portfolio/${el.customer}.webp`,
      className: el.customer,
      alt: `Portfolio ${nameFormatted.join(" ")}`,
    });

    Object.assign(cards, {
      href: `https://${el.link}`,
      className: "cards",
    });

    cards.setAttribute("target", "_blank");

    cards.appendChild(img);
    portfolio.appendChild(cards);
  });

  parent.appendChild(portfolio);

  clonePortfolio(portfolio);
}

function hook(cards, link) {
  cards.addEventListener("click", () => {
    const url = `https://${link}`;

    window.open(url, "_blank");
  });
}

function clonePortfolio(parent) {
  const cardsCustomer = qsAll(".cards", parent);

  cardsCustomer.forEach((card) => {
    parent.appendChild(card.cloneNode(true));
  });

  property("--carousel-total-items", cardsCustomer.length);
}

export default portfolio;
