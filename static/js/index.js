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
if (window.location.href.indexOf("code") != -1)
    url = window.location.href + "/" + url
getRedirectOrImages(url)

