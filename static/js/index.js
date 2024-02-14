// index.js
const images = [
'https://cdn.jsdelivr.net/gh/yanivdg/DanielBarMitzva18082023@b5d12214ff86ca8c26a0e41eaa14c3382e18278f/static/image/OIG4_1.jpg',
'https://cdn.jsdelivr.net/gh/yanivdg/DanielBarMitzva18082023@b5d12214ff86ca8c26a0e41eaa14c3382e18278f/static/image/OIG4_2.jpg',
'https://cdn.jsdelivr.net/gh/yanivdg/DanielBarMitzva18082023@b5d12214ff86ca8c26a0e41eaa14c3382e18278f/static/image/OIG4_3.jpg',
'https://cdn.jsdelivr.net/gh/yanivdg/DanielBarMitzva18082023@b5d12214ff86ca8c26a0e41eaa14c3382e18278f/static/image/OIG4_4.jpg'
    ];
let currentIndex = 0;

function changeBackgroundImage() {
  document.body.style.backgroundImage = `url('${images[currentIndex]}')`;

  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
}

// Initial background image
changeBackgroundImage();

// Change background image every 5 seconds
setInterval(changeBackgroundImage, 5000);


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
    const baseUrls = imagedata.map(item => {
      return item.mediaItems.map(mediaItem => mediaItem.baseUrl);
    });

    // Flatten the nested arrays into a single array of productUrls
    const flatbBaseUrls = [].concat(...baseUrls);

    // Get the "image-container" div or create it if it doesn't exist
    let imageContainer = document.getElementById("image-container");
    if (!imageContainer) {
      imageContainer = document.createElement("div");
      imageContainer.id = "image-container";
      document.body.appendChild(imageContainer); // Append it to the body
    }

    // Create and append <img> elements for each productUrl
    flatbBaseUrls.forEach(imageUrl => {
      const imgElement = document.createElement("img");
      const desiredWidth = 800;
      const desiredHeight = 600;
      imgElement.src =  `${imageUrl}=w${desiredWidth}-h${desiredHeight}`  //imageUrl;
      imageContainer.appendChild(imgElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
