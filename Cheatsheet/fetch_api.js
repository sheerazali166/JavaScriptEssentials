
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(handleResponse)
        .then(data => {

            console.log('GET Request Result:', data);

        }).catch(error => {

            console.log('Error:', error);

        });


