fetch('URL_OF_YOUR_AWS_SERVICE')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json();
  })
  .then((data) => {
    // Handle the JSON response data here
    // Example: Assuming 'photos' is an array in the response
    //displayPhotos(data.photos); // Implement displayPhotos function
  })
  .catch((error) => {
    console.error('Error:', error);
  });
/*
function displayPhotos(photos) {
  const photoContainer = document.getElementById('photo-container');

  // Loop through the photos and create HTML elements for each photo
  photos.forEach((photo) => {
    const imgElement = document.createElement('img');
    imgElement.src = photo.imageUrl; // Set the image URL from the JSON data

    // Add the image to the photo container
    photoContainer.appendChild(imgElement);
  });
}
*/

