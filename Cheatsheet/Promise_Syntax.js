
// const myPromise = new Promise((resolve, reject) => {

    // Asynchronous operation goes here
    // If successful, call resolve with the result
    // If an error occurs, call reject with an error



// });

// Promise with .then and .catch
const myPromise = new Promise((resolve, reject) => {

    // Simulated asynchronous operation (e.g., making an API request)
    setTimeout(() => {

        const success = true; // Simulating a successful operation

        if (success) {

            resolve("Data successfully fetched");
        
        } else {

            reject('Error: failed to fetched data');
        }

    }, 1000);

});

myPromise.then((result) => {

    // Handle the successful result (e.g., update UI with the data)
    console.log(result);

}, (error) => {

    // Handle the error (e.g., log the error or show an error message)
    console.error(error);
}


);

// Fetch API Syntax
// It is used for fetching resources from the web, such as data from a server or an API.
fetch(url, options)
    .then(response => {

        // Handle the response

    }).catch(error => {


        // Handle any errors that occurred during the fetch

    });











