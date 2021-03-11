
const request = require("request");

  breedName = process.argv.slice[2,3];
  request('https://api.thecatapi.com/v1/breeds/search?q=sib', 
  (error, response, body) => {
  const data = JSON.parse(body);

  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the site.

  console.log(data);
  console.log(typeof data)
})

