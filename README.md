# ResumeBuilder by Aswin

> **A premium, drag-and-drop resume builder with real-time ATS scoring, professional templates, and PDF export.**

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)
[![Built with React](https://img.shields.io/badge/Built%20with-React%20%2B%20Vite-61dafb)](https://vitejs.dev)
[![Developer](https://img.shields.io/badge/Developer-Aswin-cyan)](https://aswin.up.railway.app/)

---

## ✨ Features

| Feature | Details |
|---|---|
| 🎨 **Rich Editor** | Drag-and-drop canvas with resize, reposition, font controls |
| 📝 **Text Formatting** | Bold, Italic, Underline, Justify, list styles (•○■▸–1.), line height, opacity |
| ➕ **Insert Line** | Add horizontal dividers to your resume with custom color |
| 📷 **Photo Support** | Profile image placeholder with one-click file picker |
| 🎭 **28+ Templates** | Chronological, Functional, Combination × IT, HR, Business, Universal |
| 🌗 **Dark/Light Mode** | Toggle between dark and light themes |
| ✅ **ATS Checker** | Live compliance score (0–100%) checking 12 criteria |
| 📁 **Projects Panel** | Browse and manage all your saved resume designs |
| 🗑️ **Trash / Restore** | Soft-delete with restore support — nothing lost permanently |
| 🔍 **Filter Gallery** | Filter by Format, Profession, and Design style |
| 📄 **PDF Export** | High-fidelity PDF generation using html2pdf.js |
| 🌐 **Firebase Sync** | Optional cloud save via Firebase Firestore |

---

## 🚀 Quick Start

```bash
# Clone the repo
git clone <repo-url>
cd resume-maker

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌍 GitHub Pages Deployment

This project is configured to automatically build and deploy to GitHub Pages.

1. If you fork this project, make sure the `base` path in `vite.config.js` is updated to match your repository name.
2. Run the deploy script from your terminal:
   ```bash
   npm run deploy
   ```
   *This automatically builds the project and pushes it to the `gh-pages` branch.*
3. Go to your GitHub Repository **Settings** > **Pages**.
4. Set the Source to deploy from a branch, and choose the `gh-pages` branch.
5. Save, wait a minute, and your site will be live!

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── HomeView/
│   │   └── HomeView.jsx        # Home, Templates, Projects, Trash tabs
│   ├── EditorView/
│   │   ├── EditorView.jsx      # Editor layout wrapper
│   │   ├── EditorHeader.jsx    # Title, save, download buttons
│   │   ├── Sidebar.jsx         # Design / Text / Resume / Layers / ATS tabs
│   │   ├── ATSChecker.jsx      # Live ATS scoring panel
│   │   ├── FormattingToolbar.jsx # Font, align, list, insert-line controls
│   │   ├── Canvas.jsx          # A4 canvas with zoom + grid
│   │   └── CanvasElement.jsx   # Draggable/resizable text, line, image elements
│   └── LoadingScreen.jsx       # 3D premium loading animation
├── context/
│   └── EditorContext.jsx       # Global state (elements, undo/redo, zoom)
├── data/
│   └── templates.js            # 28+ ATS template definitions + metadata
├── hooks/
│   ├── useDrag.js              # Drag logic
│   ├── useResize.js            # Resize handle logic
│   └── useKeyboard.js          # Keyboard shortcuts
├── styles/
│   ├── index.css               # Design tokens + base styles
│   ├── animations.css          # Keyframes + utility animation classes
│   ├── home.css                # Home page + loading screen styles
│   ├── editor.css              # Editor panel styles
│   └── responsive.css          # Responsive breakpoints
└── utils/
    ├── firebase.js             # Local storage + optional Firebase cloud sync
    ├── pdf.js                  # PDF generation
    └── helpers.js              # uuid, formatDate helpers
```

---

## 🧠 ATS Checker

The built-in ATS checker (accessible via the **ATS tab** in the editor sidebar) scores your resume on 12 criteria:

- ✅ Email & phone contact info
- ✅ Professional Summary / Objective
- ✅ Work Experience, Education, Skills sections
- ✅ 5+ action verbs
- ✅ Quantified achievements (numbers/%)
- ✅ No profile photo (pure ATS mode)
- ✅ Word count 250–800
- ✅ LinkedIn / GitHub / Portfolio links
- ✅ Certifications

---

## 🎨 Template Categories

| Format | Professions | Designs |
|---|---|---|
| Chronological | 💻 IT | 🎨 Creative |
| Functional | 👥 HR | 🏢 Corporate |
| Combination | 📊 Business | 📝 Minimal |
| | 📄 Universal | |

Plus **5 ATS-Photo templates** with profile image placeholders (rounded and square).

---

## 🔧 Configuration

### Firebase (Optional)
Set `__firebase_config` in your environment to enable cloud sync. Without it, the app runs fully in **local-storage mode**.

### Theme Persistence
User's dark/light preference is saved to `localStorage` under `rb_theme`.

---

## 📄 License

Copyright 2026 **ResumeBuilder by Aswin**

Licensed under the [Apache License 2.0](./LICENSE).

---

## 👨‍💻 Developer

Built with ❤ by **[Aswin](https://aswin.up.railway.app/)**

> Personal portfolio: [https://aswin.up.railway.app/](https://aswin.up.railway.app/)
