# 🚀 Personal Landing Page — Kelves Moura

A modern, fully responsive **personal landing page** focused on **conversion**, **clean CSS**, and **fluid typography** using cutting-edge techniques like `clamp()`. Built to present Web Design services and turn visitors into clients — looking sharp on **mobile 📱**, **tablet 📟**, and **desktop 🖥️** without relying heavily on media queries.

---

## 🔗 Deploy

### 🔗 Access the page published here:

👉 https://kelvesmoura.github.io/Landing-Page-Personal_New/

---

## 📋 Page Sections

| Section          | Description                                                                |
| ---------------- | -------------------------------------------------------------------------- |
| **Hero**         | Main headline, value proposition and contact buttons (WhatsApp / Call now) |
| **CTA**          | Urgency banner with limited-time offer                                     |
| **Plans**        | Three service tiers: Start, Pro and Master                                 |
| **Testimonials** | Real client review cards                                                   |
| **FAQ**          | Common questions about deadlines, payment and customization                |
| **Final CTA**    | Quote request with crypto/PIX payment highlight                            |

---

## ✨ Key Goals

- 📐 Fluid responsiveness across all screen sizes
- 🎨 Scalable typography and spacing
- ⚡ Lightweight and performance-oriented CSS
- 🧠 Smart use of modern CSS features
- 💸 Conversion-focused layout and copywriting

---

## 🧩 Core Technologies

- **HTML5** – Semantic and accessible structure
- **CSS3** – Modern layout and styling
- **Flexbox & Grid** – Responsive layout foundation
- **CSS `clamp()`** – Dynamic sizing without breakpoints
- **Google Fonts (Roboto)** – Consistent typography via CDN
- **GitHub Pages** – Continuous deployment from the `main` branch

---

## 🧱 CSS Modular Architecture

To keep the stylesheet clean and maintainable, the project uses a **modular CSS architecture**.

Instead of writing all styles inside a single file, the main stylesheet (`index.css`) works as an **entry point that imports multiple CSS modules**, each responsible for a specific section of the landing page.

This approach improves **organization, readability, and scalability** of the project.

---

### 📂 Project Structure

```
Landing-Page-Personal/
│
├── index.html
├── README.md
├── .gitignore
│
└── src/
    ├── assets/
    │   ├── icon/
    │   │   └── Favicon-Site.ico
    │   └── images/
    │       ├── image.png
    │       ├── image2.webp
    │       ├── image3.webp
    │       └── image4.webp
    │
    └── style/
        ├── index.css           # Main stylesheet (imports all modules)
        ├── global.css          # Reset, variables and base styles
        ├── hero.css            # Hero section
        ├── cta.css             # Call-to-action sections
        ├── services.css        # Services / Plans section
        ├── benefits.css        # Benefits section
        ├── testimonials.css    # Testimonials section
        ├── faq.css             # FAQ section
        └── mobile.css          # Mobile-specific adjustments
```

### 🔗 CSS Module Import

The main stylesheet loads each section using `@import`.

```css
@import url(global.css);
@import url(hero.css);
@import url(cta.css);
@import url(services.css);
@import url(benefits.css);
@import url(testimonials.css);
@import url(faq.css);
@import url(mobile.css);
```

---

## 🎨 Global CSS Variables

Defined in `global.css`, variables ensure visual consistency across the entire project:

```css
:root {
  --font-family: "Roboto", sans-serif;
  --green-color: #00c553;
  --dark-green-color: #009c42;
  --yellow-color: #eab308;
  --red-color: #ef4444;
  --black-color: #000;
  --white-color: #fff;
  --gray-color: #c4cbcd;
  --dark-gray-color: #464a4e;
  --black-button-hover-color: #1b3626;
}
```

---

## 📱 Responsiveness Strategy

Instead of stacking dozens of media queries, this project relies on **fluid scaling**.

### Why `clamp()`? 🤔

`clamp()` allows elements to scale smoothly between a minimum and maximum value based on viewport size.

```css
font-size: clamp(1rem, 2.5vw, 2rem);
```

✅ Prevents text from becoming too small or too large
✅ Adapts naturally to any screen width
✅ Reduces CSS complexity

---

## 🎯 Practical Use Cases of `clamp()`

- 🔤 Headings and body text
- 📏 Margins and paddings
- 🧱 Section spacing
- 🔘 Buttons and interactive elements

Example:

```css
padding: clamp(1rem, 4vw, 3rem);
```

---

## 💳 Payment Methods

The landing page highlights the following payment options:

- ₿ Cryptocurrencies (BTC & USDT) — **5% discount**
- 🏦 Bank slip (Boleto)
- ⚡ PIX

---

## 🧠 Layout Philosophy

- **Mobile-first** mindset 📲
- Flexible containers instead of fixed widths
- Max-width control to maintain readability
- Vertical rhythm using scalable spacing

---

## 🎨 Visual Consistency

- Harmonized spacing system
- Consistent scale ratios
- Smooth transitions between viewport sizes
- Clean and modern aesthetic ✨

---

## 🖥️ Running Locally

No installation required. This is a pure HTML + CSS project — just open it in your browser:

```bash
# Clone the repository
git clone https://github.com/kelvesmoura/Landing-Page-Personal.git

# Navigate to the folder
cd Landing-Page-Personal

# Open in browser
# Option 1: double-click index.html
# Option 2: use Live Server extension in VS Code
```

---

## 🛠️ How to Improve Further

- [ ] 🌙 Add dark mode using CSS variables
- [ ] ♿ Enhance accessibility (ARIA + contrast checks)
- [ ] 🚀 Optimize animations with `prefers-reduced-motion`
- [ ] 🔗 Connect CTA buttons to real WhatsApp links
- [ ] 📦 Add Open Graph meta tags for better SEO
- [ ] 🖼️ Implement lazy loading on images

---

## 📌 Final Thoughts

This project demonstrates how **modern CSS alone** can deliver a premium responsive experience — clean, scalable, and conversion-ready. Perfect for landing pages that need to **convert well** and **look great everywhere** 🌍

Happy building! 💙