
function makeCORSRequest() {
  const apiUrl = 'https://vokhppyw7l.execute-api.us-west-1.amazonaws.com/default';
  const headers = {
    'Content-Type': 'application/json', // Specify the content type if needed
    'X-Api-Caller': 'javascript', // Use a custom header, e.g., 'X-Api-Caller'
  };

  // Perform a GET request with custom headers
  return fetch(apiUrl, {
    method: 'GET',
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Request failed');
      }
      return response.json(); // Assuming the response is in JSON format
    })
    .then((data) => {
      // Handle the response data here
      return data;
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      throw error;
    });
}
makeCORSRequest()
  .then((data) => {
    console.log('Response Data:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
