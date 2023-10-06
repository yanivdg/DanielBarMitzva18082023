// Initial request to the AWS service
const awsUrl = 'https://vokhppyw7l.execute-api.us-west-1.amazonaws.com/default';

fetch(awsUrl)
  .then((response) => {
    if (response.status === 302) {
      // Handle the redirection
      const redirectedUrl = response.headers.get('Location');

      // Make a new request to the redirected URL
      fetch(redirectedUrl)
        .then((redirectedResponse) => redirectedResponse.text())
        .then((responseData) => {
          // Handle the response from the redirected URL as needed
          console.log('Response from Redirected URL:', responseData);
        })
        .catch((error) => {
          console.error('Error making request to redirected URL:', error);
        });
    } else {
      // Handle other types of responses (e.g., JSON, HTML) from the AWS service as needed
      return response.text().then((responseData) => {
        // Handle the initial response from the AWS service as needed
        console.log('Response from AWS service:', responseData);
      });
    }
  })
  .catch((error) => {
    console.error('Error making initial request to AWS service:', error);
  });
// Initial request to the AWS service
const awsUrl = 'YOUR_AWS_URL_HERE';

fetch(awsUrl)
  .then((response) => {
    if (response.status === 302) {
      // Handle the redirection
      const redirectedUrl = response.headers.get('Location');

      // Make a new request to the redirected URL
      fetch(redirectedUrl)
        .then((redirectedResponse) => redirectedResponse.text())
        .then((responseData) => {
          // Handle the response from the redirected URL as needed
          console.log('Response from Redirected URL:', responseData);
        })
        .catch((error) => {
          console.error('Error making request to redirected URL:', error);
        });
    } else {
      // Handle other types of responses (e.g., JSON, HTML) from the AWS service as needed
      return response.text().then((responseData) => {
        // Handle the initial response from the AWS service as needed
        console.log('Response from AWS service:', responseData);
      });
    }
  })
  .catch((error) => {
    console.error('Error making initial request to AWS service:', error);
  });

