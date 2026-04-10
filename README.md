# 🚀 NASA Mission Explorer

## 📌 Project Overview
NASA Mission Explorer is a fully interactive, responsive web application that allows users to explore the universe using NASA’s Astronomy Picture of the Day (APOD) API. 

This project demonstrates advanced DOM manipulation, asynchronous API integration, and the strict use of JavaScript Array Higher-Order Functions (`filter`, `sort`, `forEach`) to handle dynamic data rendering without traditional loops.

## ✨ Core Features
- **Dynamic Gallery:** Fetches and renders a random payload of stunning space imagery and videos.
- **Historical Date Picker:** Features a native calendar input to fetch the exact APOD for any specific date in history.
- **Live Search (Debounced):** Filter the gallery in real-time by typing keywords, optimized with a debounce function for performance.
- **Media Filtering:** Instantly toggle between viewing images, videos, or all media.
- **Chronological Sorting:** Order the gallery from Newest to Oldest, or vice-versa.
- **Interactive UI:** Users can "Like" individual cards to visually save their state.
- **Theme Persistence:** A Dark/Light mode toggle that uses `localStorage` to remember the user's preference even after refreshing the page.
- **Custom Timeout Handling:** Built-in AbortController logic to gracefully handle slow network requests and display helpful UI messages.

## 🛠️ Technologies Used
- **HTML5:** Semantic structure and native input controls.
- **CSS3:** Flexbox, CSS Grid, CSS Variables for theming, and responsive design.
- **Vanilla JavaScript (ES6+):** Async/Await, Fetch API, Array Higher-Order Functions.
- **NASA APOD API:** Live data source.

## ▶️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/EkanshKhatri/nasa-mission-explorer.git](https://github.com/EkanshKhatri/nasa-mission-explorer.git)