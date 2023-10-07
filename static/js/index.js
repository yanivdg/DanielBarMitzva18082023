fetch('https://vokhppyw7l.execute-api.us-west-1.amazonaws.com/default', {
  method: 'GET',
  headers: {
    'X-Api-Caller': 'javascript', // Use a custom header, e.g., 'X-Api-Caller'
    'Access-Control-Allow-Origin':'*'
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log("error");
  });
