
// Using Axios in Node.js
// Here's an example of how you can make a
//  simple GET request using Axios in a Node.js script

// Import Axios
const axios = require('axios');

// Make a GET request
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {

        // Handle successful response
        console.log('Response:', response.data);
    }).catch(error => {

        // Handle error
        console.error('Error:', error);
    });





    