# 🍲 HomeMadeFood — Food Delivery Web App

A modern and responsive **Food Delivery Web Application** built using **React 18 and Vite** 

The platform allows users to explore homemade food items, browse menus, and order meals from local home chefs.

The project demonstrates **modern frontend development**, reusable component architecture, API integration, and **offline-capable installable web applications**.

🔗 **Live Website**  
https://home-made-food-kocv.vercel.app/


---

## 🧰 Tech Badges

![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?style=flat-square&logo=tailwindcss)
![PWA](https://img.shields.io/badge/PWA-Ready-purple?style=flat-square)
---

## 🚀 Features

- ⚡ **Vite** for blazing-fast development & build
- ⚛️ **React 18** with modern hooks
- 🎨 **Tailwind CSS** for utility-first styling
- 🛣️ **React Router v6** for routing
- 📱 **PWA Support** (installable, offline, standalone)
- 🔄 **Service Worker** with auto-update logic
- 📊 **Smart Caching** for static assets and API responses
- 📦 **Libraries Used**
  - axios
  - react-icons
  - react-hook-form
  - formik
  - yup
  - moment
- 🧩 **Modular Folder Structure**



---

## 🛠 Tech Stack

| Category | Technologies |
|--------|-------------|
| Framework | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| HTTP Client | Axios |
| Forms | React Hook Form / Formik / Yup |
| Icons | React Icons |
| Utilities | Moment.js |
| PWA | Service Worker + Web App Manifest |

---

## 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/Amitkavathekar/HomeMadeFodd.git
```

Navigate into the project

```bash
cd HomeMadeFodd
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Open browser

```
http://localhost:5173
```

---


## 📂 Project Structure

```
HomeMadeFodd
│
├── public
│   ├── pwa-192x192.svg
│   ├── pwa-512x512.svg
│   └── apple-touch-icon.svg
│
├── src
│   ├── components
│   ├── pages
│   ├── hooks
│   │   └── usePWA.js
│   ├── store
│   ├── utils
│   │   └── axiosInstance.js
│   ├── assets
│   ├── App.jsx
│   └── main.jsx
│
├── vite.config.js
├── package.json
└── README.md
```

---

## 🎨 Styling

This project uses **Tailwind CSS**.

- Utility classes available globally
- Configuration in `vite.config.js`
- Customize styles in `src/index.css`

---

## 🌐 API Integration

Axios configuration example:

```javascript
import { api } from "./utils/axiosInstance";

const users = await api.get("/users");

const response = await api.post("/users", {
  name: "John"
});
```

### Environment Variables

Create `.env` file:

```
VITE_API_URL=https://your-api-url.com
```

Use in code:

```
import.meta.env.VITE_API_URL
```

---

## 🔧 Useful Scripts

```
npm run dev
npm run build
npm run preview
npm run lint
```

---

## 🚀 Deployment

### Deploy with Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy with Vercel

```bash
npm run build
```

Upload the **dist/** folder.

---

## 

🔗 Portfolio  
https://amit-rtst.vercel.app/

🔗 LinkedIn  
https://www.linkedin.com/in/amitkavathekar/

🔗 GitHub  
https://github.com/Amitkavathekar

🔗 Instagram  
https://instagram.com/amittt_0x9/

---

⭐ If you like this project, consider giving it a **star on GitHub**.
