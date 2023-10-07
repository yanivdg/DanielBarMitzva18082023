//*******************//
// Async function that makes a CORS request with custom headers
async function makeCORSRequest(url, customHeaders) {
  try {
    // Custom headers
    const headers = {
      'Content-Type': 'application/json', // Specify the content type if needed
      'X-Api-Caller': 'javascript'
    };

    // Perform a GET request with custom headers
    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    // Use the response URL for redirection
    const responseUrl = response.url;

    // Perform a URL redirection
    window.location.replace(responseUrl);
  } catch (error) {
    // Handle any errors that occurred during the request
    throw error;
  }
}

// Usage example:
const apiUrl = 'https://vokhppyw7l.execute-api.us-west-1.amazonaws.com/default';
const customHeaders = {
  'X-Api-Caller': 'javascript'
};

(async () => {
  try {
    const data = await makeCORSRequest(apiUrl, customHeaders);
    console.log('Response Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
})();
//******************//
