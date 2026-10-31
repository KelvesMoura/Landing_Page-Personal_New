import { cElement, qs, qsAll, qsChild } from "../helper.js";
import { dataTestimonials } from "../data.js";

function testimonials() {
  const parent = qs(".container-testimonials");
  const testimonials = cElement("div");

  testimonials.setAttribute("id", "testimonials");

  dataTestimonials.forEach((el) => {
    const cards = cElement("div");
    const img = cElement("img");
    const name = el.split("-");

    const nameFormatted = name.map(
      (word) =>
        word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase(),
    );

    Object.assign(img, {
      src: `./src/assets/img/testimonials/${el}.webp`,
      className: el,
      alt: `Depoimento ${nameFormatted.join(" ")}`,
    });

    cards.className = "cards";

    cards.appendChild(img);
    testimonials.appendChild(cards);
  });

  parent.appendChild(testimonials);

  fixMosaic();
}

function fixMosaic() {
  const parent = qs(".container-testimonials");
  const cards = qsAll(".cards", parent);

  cards.forEach((card) => {
    const img = qsChild("img", card);

    if (img.complete) {
      checkSpace(card, img);
    } else {
      img.addEventListener("load", () => checkSpace(card, img));
    }
  });
}

function checkSpace(card, img) {
  const width = img.naturalWidth;
  const height = img.naturalHeight;
  const ratio = width / height;

  // 1. Se a imagem for horizontal (Print de PC / Computador)
  if (width > 1500 && ratio >= 0.9 && ratio <= 1.1) {
    card.style.setProperty("--grid-column-span", "3"); // Dá 3 colunas de largura para o PC expandir!
    card.style.setProperty("--grid-row-span", "32");
  } else if (ratio > 1.2) {
    card.style.setProperty("--grid-column-span", "2"); // Ocupa 2 colunas de largura
    card.style.setProperty("--grid-row-span", "12"); // Altura proporcional menor
  }
  // 2. Se a imagem for muito vertical (Print longo de WhatsApp)
  else if (ratio < 0.5) {
    card.style.setProperty("--grid-column-span", "1"); // Ocupa 1 coluna de largura
    card.style.setProperty("--grid-row-span", "24"); // Ocupa muitas linhas para baixo
  }
  // 3. Se for uma imagem quase quadrada ou celular padrão
  else {
    card.style.setProperty("--grid-column-span", "1");
    card.style.setProperty("--grid-row-span", "16");
  }
}

export default testimonials;
