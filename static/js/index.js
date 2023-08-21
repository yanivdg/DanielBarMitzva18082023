// index.js
function displayPhotos(images) {
    const photoContainer = document.getElementById('photoContainer');

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = image.description;

        const figureElement = document.createElement('figure');
        figureElement.appendChild(imgElement);

        const captionElement = document.createElement('figcaption');
        captionElement.textContent = image.description;
        figureElement.appendChild(captionElement);

        photoContainer.appendChild(figureElement);
    });
}

function extractImagesFromHtml(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const image_data = [];

    const imageElements = doc.querySelectorAll('div > a > div');
    imageElements.forEach(divElement => {
        const anchorElement = divElement.parentElement;
        const imgElement = anchorElement.querySelector('img');
        const description = imgElement.getAttribute('alt');
        const url = anchorElement.getAttribute('href');
        image_data.push({ url: url, description: description });
    });

    return image_data;
}

fetch('/fetch_html')
    .then(response => response.text())
    .then(html => {
        const image_data = extractImagesFromHtml(html);
        displayPhotos(image_data);
    })
    .catch(error => {
        console.error("Error fetching HTML content:", error);
    });
