🚀 NASA Mission Explorer

📌 Project Overview

NASA Mission Explorer is a fully interactive web application that allows users to explore space using NASA’s Astronomy Picture of the Day (APOD) API. The application fetches real-time data and dynamically displays stunning images and videos of the universe along with their descriptions.

Users can select any date to view historical space content and discover what the universe looked like on their birthday. The project demonstrates API integration, dynamic UI rendering, and interactive features using modern JavaScript.

---

🌐 API Used

**NASA Astronomy Picture of the Day (APOD) API**
https://api.nasa.gov/

This API provides:

* Daily space images or videos
* Title, explanation, and date
* High-definition image URLs
* Historical data based on date input

---

🚀 Features

🔍 Core Features

* View Astronomy Picture of the Day (APOD)
* Select a date to fetch historical space data
* Birthday Explorer (view APOD on your birth date)
* Dynamic rendering of image/video, title, and description

⚙️ Interactive Features

* Search functionality based on date input
* Filtering content by date selection
* Sorting capability (latest to oldest / oldest to latest)
* Implemented using JavaScript Array Higher-Order Functions

🎨 UI/UX Features

* Dark space-themed user interface
* Responsive design for mobile, tablet, and desktop
* Full-screen modal for immersive viewing
* HD image toggle for high-resolution viewing
* Smooth loading indicators during API calls

---

🛠️ Technologies Used

* HTML
* CSS
* JavaScript (ES6)
* Fetch API
* Array Higher-Order Functions (map, filter, sort)

---

📁 Project Structure

```id="z9n3xk"
nasa-mission-explorer/
│── index.html
│── style.css
│── script.js
│── README.md
```

---

▶️ How to Run the Project

1. Clone the repository:

   ```
   git clone https://github.com/your-username/nasa-mission-explorer.git
   ```
2. Open the project folder
3. Open `index.html` in your browser

---

🔑 API Key Setup

NASA API requires an API key.

You can use the demo key:

```id="k8s2qp"
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
```

For better performance, generate your own key from:
https://api.nasa.gov/

---

⚙️ Functionality Overview

* Uses `fetch()` to retrieve real-time data from NASA API
* Dynamically updates UI based on API response
* Handles loading states and errors gracefully
* Uses Higher-Order Functions for searching, filtering, and sorting

---

📊 Milestone Completion

✅ Milestone 1

* Project idea finalized
* API selected
* Repository and documentation created

✅ Milestone 2

* API integrated using fetch
* Real-time data displayed dynamically
* Responsive layout implemented

✅ Milestone 3

* Search, filter, and sort features added
* Interactive UI elements implemented
* Dark mode and user-friendly interface

✅ Milestone 4

* Code cleaned and optimized
* Project documented
* Ready for deployment

---

⚠️ Error Handling

* Handles invalid date inputs
* Displays messages for unavailable data
* Manages API/network errors

---

🎯 Learning Outcomes

This project demonstrates:

* Working with real-world APIs
* Asynchronous JavaScript (fetch & promises)
* DOM manipulation and dynamic UI rendering
* Use of Array Higher-Order Functions
* Responsive web design

---

🙌 Conclusion

NASA Mission Explorer combines creativity with technical skills to deliver an engaging space exploration experience. It showcases the practical application of JavaScript concepts and modern web development techniques.

---
