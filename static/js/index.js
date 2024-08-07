// index.js
const images = [
    'https://cdn.jsdelivr.net/gh/yanivdg/DanielBarMitzva18082023@4a545c0ecbe4da0183ab3bcbec6b7659bae3583c/static/image/OIG4_1.jpg',
    'https://cdn.jsdelivr.net/gh/yanivdg/DanielBarMitzva18082023@4a545c0ecbe4da0183ab3bcbec6b7659bae3583c/static/image/OIG4_2.jpg',
    'https://cdn.jsdelivr.net/gh/yanivdg/DanielBarMitzva18082023@4a545c0ecbe4da0183ab3bcbec6b7659bae3583c/static/image/OIG4_3.jpg',
    'https://cdn.jsdelivr.net/gh/yanivdg/DanielBarMitzva18082023@4a545c0ecbe4da0183ab3bcbec6b7659bae3583c/static/image/OIG4_4.jpg',
    'https://cdn.jsdelivr.net/gh/yanivdg/DanielBarMitzva18082023@d2a5639fd9d57de0e9681f7affc0a9c3acaff0d5/static/image/28_6_Numbers.jpg',
    'https://cdn.jsdelivr.net/gh/yanivdg/DanielBarMitzva18082023@d2a5639fd9d57de0e9681f7affc0a9c3acaff0d5/static/image/28_7_Numbers.jpg',
    'https://cdn.jsdelivr.net/gh/yanivdg/DanielBarMitzva18082023@d2a5639fd9d57de0e9681f7affc0a9c3acaff0d5/static/image/28_8_Numbers.jpg',
    'https://cdn.jsdelivr.net/gh/yanivdg/DanielBarMitzva18082023@d2a5639fd9d57de0e9681f7affc0a9c3acaff0d5/static/image/28_9_Numbers.jpg',
    'https://cdn.jsdelivr.net/gh/yanivdg/DanielBarMitzva18082023@d2a5639fd9d57de0e9681f7affc0a9c3acaff0d5/static/image/28_10_Numbers.jpg'
];
let currentIndex = 0;

function changeBackgroundImage() {
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;

    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
}

// Initial background image
changeBackgroundImage();

// Change background image every 5 seconds
setInterval(changeBackgroundImage, 5000);

// Function to send a POST request and get the images
async function getRedirectOrImages(Url) {
    try {
        // Make an HTTP GET request to the Python service with headers
        const response = await fetch(Url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Caller': 'DanielBarMitzva18082023'
            }
        });

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Check if the response is JSON
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
            // JSON response
            const data = await response.json();
            // Debug: log the data to understand its structure
            console.log('Response data:', data);
            return data;
        } else {
            // Non-JSON response, treat it as a URL
            const url = await response.text();
            // Use the URL from the service response to change the browser's location
            window.location.href = url;
        }
    } catch (error) {
        console.error('Error:', error);
        // Display the error message on the page
        const errorMessage = document.createElement('div');
        errorMessage.style.color = 'red';
        errorMessage.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessage);
    }
}

// Use the functions
var url = ' https://vokhppyw7l.execute-api.us-west-1.amazonaws.com/default';
if (window.location.href.indexOf("?") != -1) {
    const queryparam = window.location.href.substring(window.location.href.indexOf("?") + 1);
    const encodedString = encodeURIComponent(queryparam);
    // Construct the URL with the encoded string as a query parameter
    url = url + "?" + encodedString;
}

const imagedataPromise = getRedirectOrImages(url);

imagedataPromise.then(imagedata => {
    // Debug: log the imagedata to understand its structure
    console.log('imagedata:', imagedata);

    // Check if imagedata is valid
    if (!imagedata) {
        console.error('imagedata is undefined or null');
        throw new Error('imagedata is undefined or null');
    }

    if (!Array.isArray(imagedata)) {
        console.error('imagedata is not an array. Actual data:', imagedata);
        throw new Error('Invalid data format: imagedata is not an array');
    }

    // Use map to extract productUrls
    const baseUrls = imagedata.map(item => {
        if (!item.mediaItems || !Array.isArray(item.mediaItems)) {
            console.error('item.mediaItems is not an array. Actual data:', item.mediaItems);
            throw new Error('Invalid data format: item.mediaItems is not an array');
        }
        return item.mediaItems.map(mediaItem => mediaItem.baseUrl);
    });

    // Flatten the nested arrays into a single array of productUrls
    const flatBaseUrls = baseUrls.flat();

    // Get the "image-container" div or create it if it doesn't exist
    let imageContainer = document.getElementById("image-container");
    if (!imageContainer) {
        imageContainer = document.createElement("div");
        imageContainer.id = "image-container";
        document.body.appendChild(imageContainer); // Append it to the body
    }

    // Create and append <img> elements for each productUrl
    flatBaseUrls.forEach(imageUrl => {
        const imgElement = document.createElement("img");
        const desiredWidth = 800;
        const desiredHeight = 600;
        imgElement.src = `${imageUrl}=w${desiredWidth}-h${desiredHeight}`; // Correct URL formatting
        imageContainer.appendChild(imgElement);
    });
})
.catch(error => {
    console.error('Error:', error);
    // Optionally display the error on the page
    const errorMessage = document.createElement('div');
    errorMessage.style.color = 'red';
    errorMessage.textContent = `Error: ${error.message}`;
    document.body.appendChild(errorMessage);
});
