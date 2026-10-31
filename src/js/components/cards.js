import { qs, cElement, tInput, root, formattedPrice } from "../helper.js";
import { dataCards, link, messageCard } from "../data.js";

function cards() {
  const services = qs(".services");
  const carousel = cElement("div");

  carousel.className = "carousel";

  dataCards.forEach((item) => {
    const {
      plan,
      star,
      color,
      customers,
      deadline,
      parcel,
      split,
      total,
      montlhy,
    } = item;

    const el = {
      card: cElement("div"),
      p: cElement("p"),
      span: cElement("span"),
      ul: cElement("ul"),
    };

    const { card, p, span, ul } = el;

    const colorPlan = root(color);

    Object.assign(card, {
      className: `card ${plan.toLowerCase()}`,
    });

    Object.assign(card.style, {
      border: `1px solid ${colorPlan}`,
    });

    Object.assign(span, {
      className: "rainbow",
      textContent: "Ideal para",
    });

    p.className = "description";

    const hero = title(plan, star, colorPlan);
    const topics = goal(ul, customers, root(color));
    const offer = price(parcel, split, total, montlhy, colorPlan);
    const time = workingTime(deadline, colorPlan);
    const cta = hook(colorPlan);

    p.appendChild(span);
    card.append(hero, p, topics, offer, time, cta);
    carousel.appendChild(card);
    services.appendChild(carousel);
  });
}

function title(plan, star, color) {
  const el = {
    hero: cElement("div"),
    title: cElement("h4"),
    icon: cElement("span"),
  };

  const { hero, title, icon } = el;

  title.appendChild(tInput(`PLANO ${plan}`));
  title.style.backgroundColor = color;
  icon.className = "stars";

  for (let i = 0; i < star; i++) {
    const i = cElement("i");
    i.className = "bi bi-star-fill";
    i.style.color = color;

    icon.append(i);
  }

  hero.className = "plan-title";

  hero.append(title, icon);

  return hero;
}

function goal(ul, customer, color) {
  ul.innerHTML = "";

  customer.forEach((el) => {
    const line = cElement("li");
    const i = cElement("i");

    i.className = "bi bi-check2-circle";
    i.style.color = color;

    line.append(i, tInput(el));
    ul.appendChild(line);
  });

  return ul;
}

function price(parcel, split, total, montlhy, color) {
  const cta = cElement("div");
  const h4 = cElement("h4");
  const h5 = cElement("h5");
  const h5total = cElement("h5");
  const p = cElement("p");

  Object.assign(cta.style, {
    border: `1px solid ${color}`,
    backgroundColor: `${color}1a `,
  });

  cta.className = "offer";
  h4.className = "plan-value";
  h5.className = "plan-maintenance-value";
  h5total.className = "total-value";

  h4.appendChild(tInput(`${parcel}x de ${formattedPrice(split)}`));
  h5total.appendChild(
    tInput(`(ou ${formattedPrice(Math.ceil(total * 0.9))} no PIX)`),
  );
  p.appendChild(tInput("+"));
  h5.appendChild(tInput(`${formattedPrice(montlhy)}/mês de suporte`));

  cta.append(h4, h5total, p, h5);

  return cta;
}

function workingTime(time, color) {
  const el = {
    line: cElement("div"),
    i: cElement("i"),
    p: cElement("p"),
  };

  const { line, i, p } = el;

  Object.assign(line, {
    className: "deadline",
  });

  Object.assign(line.style, {
    border: `1px solid ${color}`,
    backgroundColor: `${color}1a `,
  });

  i.className = "bi bi-check2-circle";
  i.style.color = color;

  p.appendChild(tInput(`Prazo Médio de execução: ${time}`));

  line.append(i, p);

  return line;
}

function hook(color) {
  const b = cElement("button");

  b.appendChild(tInput("CONTRATAR AGORA"));

  b.className = "plan-button";

  b.addEventListener("click", () => {
    const url = `${link}${encodeURIComponent(messageCard)}`;

    window.open(url, "_blank");
  });

  b.style.backgroundColor = color;

  return b;
}

export default cards;
