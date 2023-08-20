// Your JavaScript code here
async function fetchGooglePhotos() {
    const container = document.getElementById("photoContainer");

    // Replace with your actual Google Photos API endpoint
    const apiUrl = "YOUR_GOOGLE_PHOTOS_API_ENDPOINT";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        data.photos.forEach(photo => {
            const photoDiv = document.createElement("div");
            photoDiv.classList.add("photo");

            const img = document.createElement("img");
            img.src = photo.url;
            img.alt = photo.description;
            img.classList.add("photo-image");

            const description = document.createElement("p");
            description.textContent = photo.description;

            photoDiv.appendChild(img);
            photoDiv.appendChild(description);

            container.appendChild(photoDiv);
        });
    } catch (error) {
        console.error("Error fetching Google Photos:", error);
    }
}

fetchGooglePhotos();