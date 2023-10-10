// index.js
// Function to send a POST request and get the images
async function getRedirectOrImages(Url) {
    const response = await fetch(Url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Caller': 'javascript'
        }
    });
    const jsonresp = await response.json();
    console.log(jsonresp.body);
    //return jsonresp;
}

// Use the functions
var url = 'https://vokhppyw7l.execute-api.us-west-1.amazonaws.com/default';
getRedirectOrImages(url)
