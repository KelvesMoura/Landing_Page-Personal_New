import cards from "./components/cards.js";
import portfolio from "./components/portfolio.js";
import testimonials from "./components/testimonials.js";
import carouselCards from "./carousel-cards.js";
import { hookPortfolio } from "./utils.js";

window.addEventListener("DOMContentLoaded", () => {
  cards();

  carouselCards();

  portfolio();

  testimonials();

  hookPortfolio();
});
