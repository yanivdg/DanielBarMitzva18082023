// index.js
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

        if (response.headers.get('Content-Type').includes('application/json')) {
            // JSON response
            const data = await response.json();
            // Process your data as a JavaScript object
            console.log(data.body);
            return data;
        } else {
            // Non-JSON response, treat it as a URL
            const url = await response.text();
            // Use the URL from the service response to change the browser's location
            window.location.href = url;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Use the functions
var url = 'https://vokhppyw7l.execute-api.us-west-1.amazonaws.com/default';
if (window.location.href.indexOf("?") != -1)
{
    queryparam = window.location.href.substring(window.location.href.indexOf("?")+1, window.location.href.length);
    const encodedString = encodeURIComponent(queryparam);
    // Construct the URL with the encoded string as a query parameter
    url = url + "?" + encodedString;
}

const imagedataPromise =getRedirectOrImages(url);
imagedataPromise
  .then(imagedata => {
    // Use map to extract productUrls
    const productUrls = imagedata.map(item => {
      return item.mediaItems.map(mediaItem => mediaItem.productUrl);
    });

    // Flatten the nested arrays into a single array of productUrls
    const flatProductUrls = [].concat(...productUrls);

    // Get the "image-container" div or create it if it doesn't exist
    let imageContainer = document.getElementById("image-container");
    if (!imageContainer) {
      imageContainer = document.createElement("div");
      imageContainer.id = "image-container";
      document.body.appendChild(imageContainer); // Append it to the body
    }

    // Create and append <img> elements for each productUrl
    flatProductUrls.forEach(imageUrl => {
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imageContainer.appendChild(imgElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

