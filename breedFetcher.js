
const request = require("request");


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(error, null);
        return;
      }
      if (error) {
        callback(error, null);
        return;
      } else {
        callback(null, data[0].description);
        return;

        // // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // // Print the HTML for the site.

  
      }
    });
};
module.exports = fetchBreedDescription;

