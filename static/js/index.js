// This is an example of using the async/await pattern within an async function

async function fetchData() {
  const apiUrl = 'YOUR_API_ENDPOINT';
  const customHeaders = {
    'x-api-caller': 'specific-party',
  };

  try {
    const data = await makeCORSRequest(apiUrl, customHeaders);
    console.log('Response Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the fetchData function to start the async operation
fetchData();
