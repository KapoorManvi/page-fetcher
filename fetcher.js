const input = process.argv.slice(2);
// console.log("This is the input: ", input);

const fs = require('fs');
const request = require('request');

request(input[0], (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    return
  }

  fs.writeFile(input[1], body, (error) => {
    if (error) {
      console.log("Something broke: ", error);
    } else {
      console.log("Downloaded and saved ", body.length, " bytes to ", input[1]);
    }
  })

});

