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
const imagebase = await response.json();
return imagebase;
}
/*
// Function to create an img element from a base64-encoded image
function createImageElement(imagedata) {
    var img = document.createElement('img');
    //img.src = 'data:image/jpeg;base64,' + base64Image;
    img.src =  imagedata;
    return img;
}

// Function to display the images on the page
function displayImages(imagedata) {
    var container = document.getElementById('image-container');
    for (var i = 0; i < imagedata.length; i++) {
        var img = createImageElement(imagedata[i]);
        container.appendChild(img);
    }
}
*/
// Use the functions
getImages();//.then(displayImages);

