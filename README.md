# HomeMadeFodd

A modern React application with Progressive Web App (PWA) capabilities built with Vite.

## 🚀 Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Latest React with modern hooks
- 🎨 **Tailwind** - Styling framework
- 🛣️ **React Router** - Client-side routing
- 📱 **PWA Ready** - Installable, offline-capable app
- 🔄 **Auto-updates** - Service worker with auto-update functionality
- 📊 **Caching Strategy** - Smart caching for better performance
- 📦 **Additional Packages**: axios, react-icons, react-hook-form, yup, formik, moment

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. Navigate to the project directory:
   ```bash
   cd HomeMadeFodd
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📱 PWA Features

### Installation
- **Desktop**: Look for the install icon in the address bar or use the "Install App" button
- **Mobile**: Use "Add to Home Screen" option in your browser menu

### Offline Support
This app works offline thanks to service worker caching:
- Static assets are cached automatically
- API responses are cached with NetworkFirst strategy
- Fallback pages for offline scenarios

### Testing PWA Features

1. **Install Prompt Testing**:
   ```bash
   # Serve the built app locally
   npm run build
   npm run preview
   ```

2. **Service Worker Testing**:
   - Open DevTools → Application → Service Workers
   - Check if SW is registered and active

3. **Offline Testing**:
   - Build and serve the app
   - Open DevTools → Network → check "Offline"
   - Refresh the page - it should still work

### PWA Asset Replacement

⚠️ **Important**: Replace the placeholder SVG icons with proper PNG icons:

1. Replace these files in `public/` folder:
   - `pwa-192x192.svg` → `pwa-192x192.png`
   - `pwa-512x512.svg` → `pwa-512x512.png`
   - `apple-touch-icon.svg` → `apple-touch-icon.png`
   - `favicon.svg` → `favicon.ico`

2. Use tools like:
   - [PWA Asset Generator](https://www.pwabuilder.com/)
   - [Favicon Generator](https://www.favicon-generator.org/)
   - [App Icon Generator](https://appicon.co/)

### PWA Checklist

- ✅ Web App Manifest configured
- ✅ Service Worker registered
- ✅ HTTPS ready (required for PWA)
- ✅ Responsive design
- ⚠️ Replace placeholder icons with real ones
- ⚠️ Test on actual devices
- ⚠️ Test offline functionality

## 📁 Project Structure

```
HomeMadeFodd/
├── public/
│   ├── pwa-192x192.svg    # Replace with PNG
│   ├── pwa-512x512.svg    # Replace with PNG
│   └── apple-touch-icon.svg # Replace with PNG
├── src/
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   │   └── usePWA.js      # PWA functionality hook
│   ├── store/            # State management
│   ├── utils/            # Utility functions
│   │   └── axiosInstance.js # Axios configuration
│   ├── assets/          # Static assets
│   ├── App.jsx           # Main App component
│   └── main.jsx           # Entry point
├── vite.config.js        # Vite configuration
└── package.json
```

## 🎨 Styling

This project uses **Tailwind** for styling:

- Classes are available globally
- Configuration in `vite.config.js`
- Customize in `src/index.css`

## 🌐 API Integration

Axios is pre-configured in `src/utils/axiosInstance.js`:

```javascript
import { api } from './utils/axiosInstance';

// GET request
const data = await api.get('/users');

// POST request
const response = await api.post('/users', { name: 'John' });
```

### Environment Variables
Create a `.env` file:
```
VITE_API_URL=https://your-api-url.com
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### PWA Deployment Checklist
- ✅ Build with `npm run build`
- ✅ Serve over HTTPS
- ✅ Test service worker registration
- ✅ Verify manifest.json is accessible
- ✅ Test install prompt on mobile/desktop
- ✅ Replace placeholder icons with real ones

## 🎯 Next Steps

1. **Replace PWA Icons**: Replace SVG placeholders with proper PNG icons
2. **Test PWA Features**: Test installation and offline functionality
3. **Customize Caching**: Modify caching strategy in vite.config.js
4. **Add Components**: Start building your app components
5. **Configure API**: Set up your API endpoints
6. **Deploy**: Deploy to a PWA-compatible hosting service

---

Built using React + Vite + PWA
