const https = require('https');

// Initial request to the AWS service
const awsUrl = 'https://vokhppyw7l.execute-api.us-west-1.amazonaws.com/default';

const initialRequest = https.request(awsUrl, (response) => {
  if (response.statusCode === 302 && response.headers.location) {
    // Handle the redirection
    const redirectedUrl = response.headers.location;

    // Make a new request to the redirected URL
    const redirectedRequest = https.request(redirectedUrl, (redirectedResponse) => {
      let responseData = '';

      redirectedResponse.on('data', (chunk) => {
        responseData += chunk;
      });

      redirectedResponse.on('end', () => {
        // Handle the response from the redirected URL as needed
        console.log('Response from Redirected URL:', responseData);
      });
    });

    redirectedRequest.on('error', (error) => {
      console.error('Error making request to redirected URL:', error);
    });

    redirectedRequest.end();
  } else {
    // Handle other types of responses (e.g., JSON, HTML) from the AWS service as needed
    let responseData = '';

    response.on('data', (chunk) => {
      responseData += chunk;
    });

    response.on('end', () => {
      // Handle the initial response from the AWS service as needed
      console.log('Response from AWS service:', responseData);
    });
  }
});

initialRequest.on('error', (error) => {
  console.error('Error making initial request to AWS service:', error);
});

initialRequest.end();
