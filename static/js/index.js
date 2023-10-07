// This is an example of using the async/await pattern within an async function

async function fetchData() {
  const apiUrl = 'https://vokhppyw7l.execute-api.us-west-1.amazonaws.com/default';
  const headers = {
    'Content-Type': 'application/json', // Specify the content type if needed
    'X-Api-Caller': 'javascript', // Use a custom header, e.g., 'X-Api-Caller'
  };

  try {
    const data = await makeCORSRequest(apiUrl, headers);
    console.log('Response Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the fetchData function to start the async operation
fetchData();

async function makeCORSRequest(Url, headers) {
  try {
    // Perform a GET request with custom headers
    const response = await fetch(Url, {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    // Parse and return the response data
    return await response.json(); // Assuming the response is in JSON format
  } catch (error) {
    // Handle any errors that occurred during the request
    throw error;
  }
}

try {
  const data = await makeCORSRequest();
  console.log('Response Data:', data);
} catch (error) {
  console.error('Error:', error);
}
