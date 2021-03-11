
const request = require("request");

breedName = process.argv.slice[2];
breedFetcher = breedName => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
    
      if (error) {
        console.log('error:', error);
      } else {
        let data = JSON.parse(body);
        if (data.length === 0) {
          console.log("Breed not found");
        } else {
          console.log('body:', data);
        }
      }

      // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // Print the HTML for the site.

  
    });
};
breedFetcher(breedName);