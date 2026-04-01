// Get all the HTML elements we need to update
const spinner = document.getElementById('loading-spinner');
const contentArea = document.getElementById('main-content');
const titleElement = document.getElementById('title-text');
const dateElement = document.getElementById('date-text');
const mediaBox = document.getElementById('media-box');
const textExplanation = document.getElementById('description-text');

// API Setup (Swap DEMO_KEY for your real key if you get a 429 connection error)
const myApiKey = 'uxUMykyIjQ7tmRuJQyExwIgP8to0I27CoeLUHnOQ';
const nasaEndpoint = `https://api.nasa.gov/planetary/apod?api_key=${myApiKey}`;

// Function to fetch today's picture from NASA
async function getDailyPicture() {
    try {
        // Make the network request
        const response = await fetch(nasaEndpoint);

        // Check if the server responded correctly
        if (!response.ok) {
            throw new Error("Network request failed");
        }

        // Convert the response into a readable JavaScript object
        const spaceData = await response.json();
        
        // Pass the data to our function that updates the screen
        renderDataOnPage(spaceData);

    } catch (err) {
        console.error("Failed to fetch:", err);
        
        // Show a fallback error message on the screen if it fails
        spinner.style.display = 'none';
        contentArea.style.display = 'block';
        titleElement.innerText = "Oops! Connection Error";
        textExplanation.innerText = "Could not load today's picture. Please check your internet or try again later.";
    }
}

// Function to update the HTML with the API data
function renderDataOnPage(data) {
    // Hide the loading spinner and show the main content container
    spinner.style.display = 'none';
    contentArea.style.display = 'block';

    // Update the basic text fields
    titleElement.innerText = data.title;
    dateElement.innerText = "Date: " + data.date;
    textExplanation.innerText = data.explanation;

    // Clear out the media box just in case
    mediaBox.innerHTML = ''; 

    // Figure out if NASA sent an image or a YouTube video today
    if (data.media_type === 'image') {
        const imgElement = document.createElement('img');
        imgElement.src = data.url;
        imgElement.alt = data.title;
        mediaBox.appendChild(imgElement);
    } 
    else if (data.media_type === 'video') {
        const videoIframe = document.createElement('iframe');
        videoIframe.src = data.url;
        videoIframe.title = data.title;
        videoIframe.setAttribute('frameborder', '0');
        videoIframe.setAttribute('allowfullscreen', 'true');
        mediaBox.appendChild(videoIframe);
    }
}

// Kick off the process as soon as the file loads
getDailyPicture();