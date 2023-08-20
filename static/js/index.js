// index.js
function displayPhotos(images) {
    const container = document.getElementById('photoContainer');

    images.forEach(image => {
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('photo');

        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.description;
        img.classList.add('photo-image');

        const description = document.createElement('p');
        description.textContent = image.description;

        photoDiv.appendChild(img);
        photoDiv.appendChild(description);

        container.appendChild(photoDiv);
    });
}

// Fetch image data from the server and call displayPhotos
fetch('/photos')
    .then(response => response.json())
    .then(data => {
        displayPhotos(data.images);
    })
    .catch(error => {
        console.error("Error fetching image data:", error);
    });

