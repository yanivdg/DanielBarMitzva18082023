// index.js
const images = [
                'https://th.bing.com/th/id/OIG.SngeX.zc71CxwRxhMzhW?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.X8ivV5VfecvCgSsFGYEW?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.JGgBozzEjjuPxymkCymA?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.L1SPXBXOVfY.nMFEXKry?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.PIG8RPNSv0S799BruNxr?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.ZBYCELFbseUESxeWkRfJ?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.ZQhV50Sm6cPz10SDWys3?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.JALVY84WrzVC9NezC9Hk?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.AMamtlaAUg46pp9X8tJZ?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.EfqMvxaQtvNx8nIyJ7ST?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.z7sHJc_7aEAYNxJ4v0C_?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.Iy7S8drB47I5u_9XOBMU?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.ouVx98avLPoF2W70BVCo?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.lL74NYbVxAu8sGDcB4oX?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.z2Zw0A4K3ANOomdH7N0z?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.yRMtvHFY5fayUlk.l_A0?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.F8GL54hw2LY01T6SIUbQ?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.pCFIAd4TVJsxN2TWRWrr?pid=ImgGn',
                'https://th.bing.com/th/id/OIG.4XT57HS8l5YX5yGjtSzi?pid=ImgGn'
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
