# 🚀 Personal Landing Page — Kelves Moura

A modern, fully responsive **personal landing page** focused on **conversion**, **clean CSS**, and **fluid typography** using cutting-edge techniques like `clamp()`. Built to present Web Design services and turn visitors into clients — looking sharp on **mobile 📱**, **tablet 📟**, and **desktop 🖥️** without relying heavily on media queries.

The page is rendered with **vanilla JavaScript (ES modules)**: plans, portfolio and testimonials are generated dynamically from a single data file, so adding a new project or client is as simple as dropping an image and adding one entry.

---

## 🔗 Deploy

### 🔗 Access the page published here:

👉 [Kelves Moura - Web Designer](https://kelvesmoura.github.io/Landing_Page-Personal_New/)

---

## 📋 Page Sections

| Section          | Description                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| **Hero**         | Main headline, value proposition and the plans carousel (Start, Pro and Master) side by side         |
| **CTA**          | Banner inviting visitors to scroll down and check real projects and results                          |
| **Portfolio**    | Infinite auto-scrolling carousel with validated projects (online stores, landing pages and systems)  |
| **Testimonials** | Responsive mosaic of real client feedback screenshots                                                |
| **Final CTA**    | Limited-offer card with a "Hire Now" button that opens WhatsApp with a pre-filled message            |
| **Footer**       | Copyright notice                                                                                     |

---

## ✨ Key Goals

- 📐 Fluid responsiveness across all screen sizes
- 🎨 Scalable typography and spacing
- ⚡ Lightweight and performance-oriented code (no frameworks, no build step)
- 🧠 Smart use of modern CSS features
- 💸 Conversion-focused layout and copywriting
- 🔄 Data-driven content: plans, portfolio and testimonials come from `data.js`

---

## 🧩 Core Technologies

- **HTML5** – Semantic structure
- **CSS3** – Modern layout and styling
- **Flexbox & Grid** – Responsive layout foundation (Grid is used for the testimonials mosaic)
- **CSS `clamp()`** – Dynamic sizing without breakpoints
- **JavaScript (ES Modules)** – Dynamic rendering of cards, portfolio, testimonials and carousels
- **Bootstrap Icons (CDN)** – Stars and check icons on the plan cards
- **Google Fonts (Roboto)** – Consistent typography via CDN
- **Google Tag Manager** – Visitor tracking
- **WhatsApp API links** – Direct contact with pre-filled messages
- **GitHub Pages** – Continuous deployment from the `main` branch

---

## 🧱 CSS Modular Architecture

To keep the stylesheet clean and maintainable, the project uses a **modular CSS architecture**.

Instead of writing all styles inside a single file, the main stylesheet (`index.css`) works as an **entry point that imports multiple CSS modules**, each responsible for a specific section or concern of the landing page.

This approach improves **organization, readability, and scalability** of the project.

---

### 📂 Project Structure

```
Landing_Page-Personal_New/
│
├── index.html
├── sitemap.xml
├── README.md
├── .gitignore
│
└── src/
    ├── assets/
    │   ├── favicon/
    │   │   └── favicon.ico
    │   └── img/
    │       ├── portfolio/          # Project screenshots (.webp)
    │       └── testimonials/       # Client feedback screenshots (.webp)
    │
    ├── js/
    │   ├── index.js                # Entry point (initializes all components)
    │   ├── data.js                 # Plans, portfolio, testimonials and WhatsApp settings
    │   ├── helper.js               # DOM helpers and formatting utilities
    │   ├── utils.js                # Final CTA button behavior
    │   ├── carousel-cards.js       # Plans carousel (auto-slide + progress bar)
    │   └── components/
    │       ├── cards.js            # Renders the pricing plan cards
    │       ├── portfolio.js        # Renders the infinite portfolio carousel
    │       └── testimonials.js     # Renders the testimonials mosaic
    │
    └── style/
        ├── index.css               # Main stylesheet (imports all modules)
        ├── global.css              # Reset, variables and base styles
        ├── hero.css                # Hero section
        ├── cards.css               # Plan cards
        ├── services.css            # Plans carousel
        ├── cta.css                 # Call-to-action sections
        ├── portfolio.css           # Portfolio carousel
        ├── testimonials.css        # Testimonials mosaic
        ├── animation.css           # Keyframes (carousel, progress bar, pulse)
        └── mobile.css              # Mobile-specific adjustments
```

### 🔗 CSS Module Import

The main stylesheet loads each module using `@import`.

```css
@import url(global.css);
@import url(hero.css);
@import url(cards.css);
@import url(services.css);
@import url(cta.css);
@import url(portfolio.css);
@import url(testimonials.css);
@import url(animation.css);
@import url(mobile.css);
```

---

## 🎨 Global CSS Variables

Defined in `global.css`, variables ensure visual consistency across the entire project:

```css
:root {
  --font-family: "Roboto", sans-serif;
  --start-color: #00ff66;
  --pro-color: #0ea5e9;
  --master-color: #ffb800;
  --black-color: #000;
  --white-color: #fff;
  --dark-gray-color: #464a4e;
  --carousel-gap: 24px;
  --carousel-item-width: min(400px, 90vw);
  --carousel-item-width-portfolio: 500px;
}
```

The `--active-color` variable is updated by JavaScript as the plans carousel moves, so highlights, labels and CTA sections follow the color of the active plan (Start, Pro or Master).

---

## 📱 Responsiveness Strategy

Instead of stacking dozens of media queries, this project relies on **fluid scaling**, with a few breakpoints in `mobile.css` only for layout changes.

### Why `clamp()`? 🤔

`clamp()` allows elements to scale smoothly between a minimum and maximum value based on viewport size.

```css
font-size: clamp(1.75rem, 1.5rem + 0.8vw, 2rem);
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
padding: 14px clamp(10px, 3vw, 30px) 30px;
```

---

## 💳 Payment Methods

The landing page presents three plans with installment pricing and a monthly support fee:

| Plan       | Installments     | Total       | Monthly support | Average deadline |
| ---------- | ---------------- | ----------- | --------------- | ---------------- |
| **Start**  | 5x               | R$ 797      | R$ 99,90        | 3 days           |
| **Pro**    | 6x               | R$ 1.499    | R$ 149,90       | 7 days           |
| **Master** | 10x              | R$ 2.999    | R$ 299,90       | 15 days          |

- 💳 Installments on card (payment links configured per plan)
- ⚡ PIX — **10% discount** on the total price
- 💬 Hire buttons open WhatsApp with a pre-filled message (payment links are used when `data-link` on `.services` is set to a value other than `"false"`)

---

## 🧠 Layout Philosophy

- **Mobile-first** mindset 📲
- Flexible containers instead of fixed widths
- Max-width control to maintain readability
- Vertical rhythm using scalable spacing
- Content separated from presentation: edit `data.js` instead of the HTML

---

## 🎨 Visual Consistency

- Dark theme with vibrant accent colors per plan
- Harmonized spacing system
- Smooth transitions between plans and viewport sizes
- Clean and modern aesthetic ✨

---

## 🖥️ Running Locally

No build step or dependencies required. Since the project uses **ES modules**, it must be served over HTTP (opening `index.html` directly with `file://` blocks module imports in most browsers):

```bash
# Clone the repository
git clone https://github.com/KelvesMoura/Landing_Page-Personal_New.git

# Navigate to the folder
cd Landing_Page-Personal_New

# Open in browser
# Option 1: use the Live Server extension in VS Code
# Option 2: run a simple local server
npx serve .
```

---

## 🛠️ How to Improve Further

- [ ] 🧹 Remove the reference to `animation.js` in `index.html` (the file does not exist) and the empty `clone-portfolio.js`
- [ ] 🔎 Improve SEO: richer meta description and Open Graph tags
- [ ] ♿ Enhance accessibility (ARIA + contrast checks)
- [ ] 🚀 Optimize animations with `prefers-reduced-motion`
- [ ] 🖼️ Implement lazy loading on portfolio and testimonial images
- [ ] 🔗 Enable the payment links on the plan cards
- [ ] 🗺️ Complete `sitemap.xml` with the correct namespace

---

## 📌 Final Thoughts

This project demonstrates how **modern CSS and lightweight vanilla JavaScript** can deliver a premium responsive experience — clean, scalable, and conversion-ready. Perfect for landing pages that need to **convert well** and **look great everywhere** 🌍