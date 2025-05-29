# Weather App

A modern, responsive weather application built with React.js, TypeScript, and Tailwind CSS. It provides real-time weather data, interactive visualizations, and a seamless user experience across devices.

## Features
- **Live Weather Data:** Fetches real-time weather forecasts (temperature, precipitation, wind speed) using the Open-Meteo API.
- **Geolocation Search:** Converts city names to coordinates via the Nominatim API (OpenStreetMap).
- **Interactive Charts:** Visualizes weather trends using Chart.js (via react-chartjs-2).
- **Rain Animation:** Displays animated rainfall when precipitation is high.
- **Dynamic UI:** Animated clouds, sun/moon, windmill, and ground visuals.
- **Mobile-First Design:** Fully responsive and optimized for all screen sizes.
- **State Management:** Uses Zustand for efficient state handling.
- **Error Handling:** User-friendly error and loading states.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
```sh
# Clone the repository
git clone <your-repo-url>
cd Weather-App

# Install dependencies
npm install
# or
yarn install
```

### Running the App
```sh
# Start the development server
npm run dev
# or
yarn dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
```sh
npm run build
# or
yarn build
```

### Preview Production Build
```sh
npm run preview
# or
yarn preview
```

## Project Structure
- `src/pages/` — Main pages (Home, About, ContactMe)
- `src/layout/` — Layout components (Header, Footer, ContentSection, InfoSection, etc.)
- `src/components/` — Reusable UI components (SearchBar, Rain, LineChart, etc.)
- `src/ui/` — Visual/animated UI elements (Cloud, SunMoon, WindMill, etc.)
- `src/store/` — Zustand state stores
- `src/types/` — TypeScript type definitions
- `src/hooks/` — Custom React hooks
- `public/` — Static assets and manifest

## Git & Contribution
- Use feature branches for new features: `git checkout -b feature/your-feature`
- Commit with clear messages: `git commit -m "Add feature: ..."`
- Push and create a pull request for review
- Please follow code style and linting rules (`npm run lint`)

## License
MIT

---
**Author:** Yash Mishra

For more info, see the About and ContactMe pages in the app.
