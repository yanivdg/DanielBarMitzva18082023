// index.js
// Function to send a POST request and get the images
async function getImages() {
    /*
const response = await fetch('https://vokhppyw7l.execute-api.us-west-1.amazonaws.com/default', {
    method: 'GET',
    mode: 'cors', // add this line
    headers: {
        'Content-Type': 'application/json'
    },
});
const imagesBase64 = await response.json();
return imagesBase64;
*/
  try {
    // Define the URL you want to make a GET request to.
    const url = 'https://vokhppyw7l.execute-api.us-west-1.amazonaws.com/default'; // Replace with your API endpoint

    // Make the GET request using fetch and await the response.
    const response = await fetch(url);

    // Check if the response status is OK (status code 200).
    if (!response.ok) {
      throw new Error('Request failed');
    }
    // Parse the response as JSON.
    const data = await response.json();
    // Handle the response data here.
    console.log('Response:', data);
    return data
  } catch (error) {
    // Handle errors here.
    console.error('Error:', error);
  }
}
// Function to create an img element from a base64-encoded image
function createImageElement(base64Image) {
    var img = document.createElement('img');
    img.src = 'data:image/jpeg;base64,' + base64Image;
    return img;
}

// Function to display the images on the page
function displayImages(imagesBase64) {
    var container = document.getElementById('image-container');
    for (var i = 0; i < imagesBase64.length; i++) {
        var img = createImageElement(imagesBase64[i]);
        container.appendChild(img);
    }
}

// Use the functions
getImages().then(displayImages);

