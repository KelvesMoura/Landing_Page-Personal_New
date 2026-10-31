export const qs = (selector) => document.querySelector(selector);

export const qsChild = (selector, parent = document) =>
  parent.querySelector(selector);

export const qsAll = (selector, parent = document) =>
  parent.querySelectorAll(selector);

export const property = (property, value) =>
  document.documentElement.style.setProperty(property, value);

export const cElement = (element) => document.createElement(element);

export const tInput = (text) => document.createTextNode(text);

export const root = (selector) =>
  getComputedStyle(document.documentElement).getPropertyValue(selector).trim();

export const formattedPrice = (number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    number,
  );

export const calc = (a, b) => Math.ceil((a / b).toFixed(2));
