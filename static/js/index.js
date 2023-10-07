async function makeCORSRequest() {
  const apiUrl = 'https://vokhppyw7l.execute-api.us-west-1.amazonaws.com/default';
  const headers = {
    'Content-Type': 'application/json', // Specify the content type if needed
    'X-Api-Caller': 'javascript', // Use a custom header, e.g., 'X-Api-Caller'
  };

  try {
    // Perform a GET request with custom headers
    const response = await fetch(apiUrl, {
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
