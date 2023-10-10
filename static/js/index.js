// index.js
// Function to send a POST request and get the images
async function getRedirectOrImages(Url) {
    // Make an HTTP GET request to the Python service with headers
    const response = await fetch(Url, {
    method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'X-Api-Caller': 'javascript'
            }
})
    .then(response => response.text()) // Assuming the service returns plain text
    .then(url => {
        // Use the URL from the service response to change the browser's location
        window.location.href = url;
    })
    .catch(error => {
        console.error('Error:', error);
    });
    //const jsonresp = await response.json();
    //console.log(jsonresp.body);
    //return jsonresp;
}

// Use the functions
var url = 'https://vokhppyw7l.execute-api.us-west-1.amazonaws.com/default';
getRedirectOrImages(url)


// Define the headers you need to include
const headers = {
    'Authorization': 'Bearer YourAuthToken', // Replace with your authorization token if needed
    'Other-Header': 'Header-Value', // Add any other headers your service requires
};

