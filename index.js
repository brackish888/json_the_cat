
const fetchBreedDescription = require('./breedFetcher');

const breedName = process.argv.slice[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

// const fetchBreedDescription = (breedName, callback) => {
//   request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
//     (error, response, body) => {
//     let data = JSON.parse(body);
//       if (error) {
//         console.log('error')
//         callback('error:', error);
//       } else {
//         if (data.length === 0, null) {
//           callback(data[0].description)
//         } else {
//           callback("Breed not found");
//           console.log("breed not found")
//         }
//       }

//       // Print the error if one occurred
//       console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//       // Print the HTML for the site.

  
//     });
// };
// module.exports =  { breedFetcher };