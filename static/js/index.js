// index.js
// Function to send a POST request and get the images
async function getImages(albumUrl) {
//
const response = await fetch('https://vokhppyw7l.execute-api.us-west-1.amazonaws.com/default/GooglePhotosAPIService', {
    method: 'POST',
    mode: 'cors', // add this line
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ shared_album_url: albumUrl })
});
const imagesBase64 = await response.json();
return imagesBase64;

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
var albumUrl = 'https://photos.app.goo.gl/WCbCechDWLS9EpPGA';
getImages(albumUrl).then(displayImages);

