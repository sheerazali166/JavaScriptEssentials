
// Fetch API POST Method
// The POST method is used to submit data to be processed to a specified resource
const newPost = { 

    'title': 'New Post',
    'body': 'This is a new post.',
    'userId': 1

};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify(newPost)

}).then(handleResponse)
    .then(data => {
        console.log('POST Request Result:', data);
    
    }).catch(error => {
        console.error('Error:', error);
    
});





