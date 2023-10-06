// index.js
// Function to send a POST request and get the images
async function getImages() {
const response = await fetch('https://vokhppyw7l.execute-api.us-west-1.amazonaws.com/default', {
    method: 'GET',
    mode: 'cors', // add this line
    headers: {
        'Content-Type': 'application/json'
    },
});
const imagesBase64 = await response.json();
return imagesBase64;
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

