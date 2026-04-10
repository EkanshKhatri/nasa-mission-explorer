const spinner = document.getElementById('loading-spinner');
const controls = document.getElementById('controls');
const galleryContainer = document.getElementById('gallery-container');

const searchBar = document.getElementById('search-bar');
const mediaFilter = document.getElementById('media-filter');
const dateSort = document.getElementById('date-sort');
const themeToggle = document.getElementById('theme-toggle');
const datePicker = document.getElementById('date-picker');

const today = new Date().toISOString().split('T')[0];
datePicker.setAttribute('max', today);

const myApiKey = 'cfvToaF5SfNEr2kD1KwEuuMq9olhJqmIpA8JQe3l'; 
const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${myApiKey}&count=12`;

let originalData = [];
let debounceTimer;

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.innerText = "🌙 Dark Mode";
}

async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 8000 } = options;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(resource, { ...options, signal: controller.signal });
        clearTimeout(id);
        return response;
    } catch (error) {
        clearTimeout(id);
        throw error;
    }
}

async function fetchNASAData() {
    try {
        const response = await fetchWithTimeout(nasaUrl);
        if (!response.ok) throw new Error("Failed to fetch data");

        originalData = await response.json();

        spinner.style.display = 'none';
        controls.style.display = 'flex';
        renderGallery();

    } catch (error) {
        console.error(error);
        spinner.style.display = 'none';
        galleryContainer.innerHTML = `<p style="text-align:center; width:100%;">Connection timed out or failed. Please check your internet and try refreshing.</p>`;
    }
}

async function fetchSpecificDate() {
    const selectedDate = datePicker.value;
    if (!selectedDate) return; 

    const specificDateUrl = `https://api.nasa.gov/planetary/apod?api_key=${myApiKey}&date=${selectedDate}`;

    try {
        spinner.style.display = 'block';
        galleryContainer.innerHTML = ''; 

        const response = await fetchWithTimeout(specificDateUrl);
        if (!response.ok) throw new Error("Failed to fetch specific date");

        const dayData = await response.json();

        originalData = [dayData];
        spinner.style.display = 'none';
        renderGallery();

    } catch (error) {
        console.error(error);
        spinner.style.display = 'none';
        galleryContainer.innerHTML = `<p style="text-align:center; width:100%;">Connection timed out or picture not found. Try another date!</p>`;
    }
}

function renderGallery() {
    let filteredArray = [...originalData];

    const searchTerm = searchBar.value.toLowerCase();
    if (searchTerm !== "") {
        filteredArray = filteredArray.filter(function(item) {
            return item.title.toLowerCase().includes(searchTerm);
        });
    }

    const selectedMedia = mediaFilter.value;
    if (selectedMedia !== "all") {
        filteredArray = filteredArray.filter(function(item) {
            return item.media_type === selectedMedia;
        });
    }

    const sortOrder = dateSort.value;
    filteredArray.sort(function(a, b) {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        
        if (sortOrder === "newest") {
            return dateB - dateA;
        } else {
            return dateA - dateB;
        }
    });

    galleryContainer.innerHTML = '';

    if (filteredArray.length === 0) {
        galleryContainer.innerHTML = `<p style="text-align:center; width: 100%;">No matches found.</p>`;
        return;
    }

    filteredArray.forEach(function(item) {
        const card = document.createElement('div');
        card.className = 'card';

        let mediaContent = '';
        if (item.media_type === 'image') {
            mediaContent = `<img src="${item.url}" alt="${item.title}">`;
        } else if (item.media_type === 'video') {
            mediaContent = `<iframe src="${item.url}" frameborder="0" allowfullscreen></iframe>`;
        }

        card.innerHTML = `
            ${mediaContent}
            <h3>${item.title}</h3>
            <p class="date-label">Date: ${item.date}</p>
            <button class="like-btn">🤍 Like</button>
        `;

        const likeButton = card.querySelector('.like-btn');
        likeButton.addEventListener('click', function() {
            likeButton.classList.toggle('liked');
            if (likeButton.classList.contains('liked')) {
                likeButton.innerText = "❤️ Liked!";
            } else {
                likeButton.innerText = "🤍 Like";
            }
        });

        galleryContainer.appendChild(card);
    });
}

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        themeToggle.innerText = "🌙 Dark Mode";
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.innerText = "☀️ Light Mode";
        localStorage.setItem('theme', 'dark');
    }
});

searchBar.addEventListener('input', function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(renderGallery, 300);
});

mediaFilter.addEventListener('change', renderGallery);
dateSort.addEventListener('change', renderGallery);
datePicker.addEventListener('change', fetchSpecificDate);

fetchNASAData();