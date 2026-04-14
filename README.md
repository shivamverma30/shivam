# 🚀 Developer Portfolio — React + Vite + Tailwind CSS

A clean, modern, and fully responsive developer portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and React Icons.

---

## ✨ Features

- ⚡ **Vite** — blazing fast dev server and build tool
- ⚛️ **React 18** — component-based architecture
- 🎨 **Tailwind CSS** — utility-first responsive styling
- 🌙 **Dark / Light mode** — persisted via localStorage
- 🎞️ **Framer Motion** — smooth, scroll-triggered animations
- 📱 **Fully responsive** — mobile, tablet, desktop
- 🔤 **Typewriter effect** — cycling role titles in the hero
- 🔗 **Coding profile cards** — GitHub, LeetCode, CodeChef, LinkedIn
- 📬 **Contact form** — opens default mail client

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── CodingProfiles.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data.js           ← All personal data goes here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js v18+ 
- npm v9+

### Installation

```bash
# 1. Unzip the portfolio folder
unzip portfolio.zip
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` folder.

---

## ✏️ Customization Guide

All personal information is stored in **`src/data.js`**. Just edit that one file!

### Step-by-step:

1. **Personal info** — Edit the `personal` object:
   ```js
   name: "Your Actual Name",
   email: "your@email.com",
   resumeLink: "https://link-to-your-resume.pdf",
   ```

2. **Social links** — Edit the `profiles` object:
   ```js
   github:   "https://github.com/yourusername",
   linkedin: "https://linkedin.com/in/yourusername",
   ```

3. **Skills** — Add/remove from the `skills` object categories

4. **Projects** — Add your real projects to the `projects` array

5. **Education** — Update the `education` array with your details

6. **Photo** — In `Hero.jsx`, replace the initials `<span>` with:
   ```jsx
   <img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover rounded-full" />
   ```
   Place your photo in the `public/` folder.

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the `dist/` folder to netlify.com
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 📬 Contact Form

The contact form currently uses `mailto:` to open the user's default email client.

To use a proper backend service, replace the `handleSubmit` function in `Contact.jsx` with:
- **[EmailJS](https://www.emailjs.com/)** — free, no backend needed
- **[Formspree](https://formspree.io/)** — simple form endpoint

---

## 📄 License

MIT — free to use and modify.
