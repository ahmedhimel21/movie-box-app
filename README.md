````md
# 🎬 MovieBox

MovieBox is a modern and responsive movie discovery web application built with React. It allows users to explore movies and TV shows, search for titles, view ratings and release years, and open detailed information about a selected title.

The project uses the **TVMaze API** to load movie/show data dynamically.

## ✨ Features

- 🎬 Browse movies and TV shows
- ⭐ Display ratings
- 📅 Display premiered/release year
- 🔎 Search movies and shows
- 🌟 Featured section with top-rated titles
- 🪟 Movie details modal
- 🖼️ Movie poster/image display
- 📱 Fully responsive design
- 🌙 Modern dark cinematic UI
- ⚡ Loading skeletons while fetching data
- 🚫 No-results state for unsuccessful searches
- 🧩 Reusable React components
- 🗂️ Separate service layer for API requests

## 🛠️ Technologies Used

### Frontend

- React
- React Router
- Tailwind CSS
- DaisyUI
- Lucide React
- React Icons

### API

- TVMaze API

### Development Tools

- Vite
- ESLint
- Git
- GitHub

## 📁 Project Structure

```text
movie-box-app/
├── public/
│   └── favicon.webp
│
├── src/
│   ├── assets/
│   │   └── hero.png
│   │
│   ├── components/
│   │   ├── Featured.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Modal.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieDetailsCard.jsx
│   │   ├── MoviesNavbar.jsx
│   │   └── Navbar.jsx
│   │
│   ├── layouts/
│   │   └── MoviesLayout.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Movies.jsx
│   │
│   ├── routes/
│   │   └── Routes.jsx
│   │
│   ├── services/
│   │   └── movieService.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
````

## 🚀 Getting Started

Follow these steps to run MovieBox locally.

### 1. Clone the repository

```bash
git clone https://github.com/ahmedhimel21/movie-box-app.git
```

### 2. Navigate to the project

```bash
cd movie-box-app
```

### 3. Install dependencies

Using npm:

```bash
npm install
```

Or using Bun:

```bash
bun install
```

### 4. Start the development server

```bash
npm run dev
```

Or:

```bash
bun run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

## 🔎 Movie Search

MovieBox uses the TVMaze search endpoint when the user enters a search query.

```text
https://api.tvmaze.com/search/shows?q=batman
```

When there is no search query, the application loads the available shows from:

```text
https://api.tvmaze.com/shows
```

The API logic is separated into the service layer:

```js
export const getMovies = async (search = "") => {
  const query = search.trim();

  const url = query
    ? `${API_URL}/search/shows?q=${encodeURIComponent(query)}`
    : `${API_URL}/shows`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();

  return query ? data.map((item) => item.show) : data;
};
```

This keeps API-related logic outside the React components.

## 🌟 Featured Movies

The home page includes a Featured section that displays the top 9 highest-rated titles.

The data is:

1. Loaded from the TVMaze API
2. Filtered to titles with ratings
3. Sorted by rating
4. Limited to 9 titles

```js
const topRated = data
  .filter((movie) => movie?.rating?.average)
  .sort((a, b) => b.rating.average - a.rating.average)
  .slice(0, 9);
```

## 🎨 Design

MovieBox uses a cinematic dark theme with:

- Dark background
- Red primary accent
- Glassmorphism effects
- Backdrop blur
- Movie poster hover effects
- Responsive layouts
- Loading skeletons
- Accessible focus states
- Responsive navigation

## 📱 Responsive Design

The application is designed to work across:

- 📱 Mobile
- 📱 Tablet
- 💻 Laptop
- 🖥️ Desktop

Tailwind CSS responsive utilities are used throughout the project.

## 🧩 Component Architecture

The application separates UI into reusable components.

For example:

```text
MovieCard
   ↓
Modal
   ↓
MovieDetailsCard
```

The movie data is passed through props, allowing the same `MovieCard` component to be reused in both the Featured section and Movies page.

## 🔄 Data Flow

```text
TVMaze API
     ↓
movieService.js
     ↓
Movies / Featured
     ↓
MovieCard
     ↓
Modal
     ↓
MovieDetailsCard
```

This separation makes the application easier to maintain and extend.

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview

```bash
npm run preview
```

Previews the production build locally.

### Lint

```bash
npm run lint
```

Runs ESLint to check the project code.

## 🌐 API

This project uses the free **TVMaze API**.

API documentation:

https://www.tvmaze.com/api

## ⚠️ Disclaimer

MovieBox is a learning/project application created for educational and portfolio purposes.

Movie and show information is provided by the TVMaze API. MovieBox does not host or distribute movie content.

## 🔮 Future Improvements

Possible future features include:

- 🎭 Genre-based filtering
- 🔥 Popular titles section
- 🎞️ Trailer integration
- ❤️ Favorites/watchlist
- 🔐 User authentication
- 📄 Pagination
- 🔍 Advanced search and filtering
- 🎯 Movie/show details page
- 🌐 Improved error handling
- 🗃️ Backend integration
- 📊 Personalized recommendations

## 👨‍💻 Author

**Sahabuddin Ahmed**

Frontend / Full-Stack Developer

GitHub:

https://github.com/ahmedhimel21
