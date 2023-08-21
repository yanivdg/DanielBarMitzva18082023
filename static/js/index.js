// index.js
function displayPhotos(images) {
    // Display the images using the provided displayPhotos function
    // ... (rest of the code)
}

// Extract image data from the Google Photos link
const SHARED_LINK = "https://photos.app.goo.gl/WCbCechDWLS9EpPGA";
const image_data = [];

// Fetch the HTML content of the SHARED_LINK
// Define the headers to bypass CORS
const headers = new Headers({
    'Access-Control-Allow-Origin': '*', // Allow requests from any origin
    // You can also set other headers if needed
});

// Define the options for the fetch request
const fetchOptions = {
    method: 'GET',
    mode: 'cors',
    headers: headers,
};

// Fetch the HTML content of the shared link with CORS headers
fetch(SHARED_LINK, fetchOptions)
    .then(response => response.text())  // Get the HTML content as text
    .then(html => {
        // Parse the HTML content to extract image URLs and descriptions
        // Populate the image_data array with objects containing URL and description
        // Example: image_data.push({ url: imageURL, description: imageDescription });

        // Once image_data is populated, call displayPhotos with the extracted image data
        displayPhotos(image_data);
    })
    .catch(error => {
        console.error("Error fetching HTML content:", error);
    });

