import { cElement, qs } from "./helper.js";

function carouselCards() {
  const INTERVAL = 7500; // 7,5 seconds

  const track = qs(".carousel");
  const container = track.parentElement;
  let isAnimating = false;
  let isPaused = false;

  const progress = cElement("div");
  progress.className = "carousel-progress";

  const fill = cElement("div");
  fill.className = "carousel-progress__fill";
  fill.style.setProperty("--duration", `${INTERVAL}ms`);

  progress.appendChild(fill);
  container.appendChild(progress);

  function restartProgress(card) {
    const color = getComputedStyle(card).borderTopColor;
    fill.style.setProperty("--bar-color", color);
    document.documentElement.style.setProperty("--active-color", color);

    fill.classList.remove("running");
    void fill.offsetWidth;
    fill.classList.add("running");
    fill.style.animationPlayState = isPaused ? "paused" : "running";
  }

  function next() {
    if (isAnimating) return;

    const nextCard = track.children[1];
    if (!nextCard) return;

    isAnimating = true;
    track.style.transform = `translateX(-${nextCard.offsetLeft}px)`;
    restartProgress(nextCard);

    track.addEventListener("transitionend", function onEnd(e) {
      if (e.target !== track || e.propertyName !== "transform") return;
      track.removeEventListener("transitionend", onEnd);

      track.appendChild(track.firstElementChild);

      track.style.transition = "none";
      track.style.transform = "translateX(0)";
      void track.offsetWidth;
      track.style.transition = "";

      isAnimating = false;
    });
  }

  fill.addEventListener("animationend", next);

  container.addEventListener("mouseenter", () => {
    isPaused = true;
    fill.style.animationPlayState = "paused";
  });

  container.addEventListener("mouseleave", () => {
    isPaused = false;
    fill.style.animationPlayState = "running";
  });

  track.addEventListener("click", (event) => {
    if (event.target.closest(".plan-button")) return;
    if (!event.target.closest(".card")) return;
    next();
  });

  restartProgress(track.firstElementChild);
}

export default carouselCards;
