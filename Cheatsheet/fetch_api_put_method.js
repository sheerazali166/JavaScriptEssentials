
fetch('https://jsonplaceholder.typicode.com/posts/1', {

    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedPost)

}).then(handleResponse)
    .then(data => {

        console.log('PUT Request Result:', data);

}).catch(error => {

    console.error('Error:', error);

});



const updatedData = {
    title: 'Updated Title'
  };
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  })
    .then(handleResponse)
    .then(data => {
      console.log('PATCH Request Result:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });


    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            console.log('DELETE Request Successful');
          } else {
            throw new Error('DELETE request failed');
          }
        })
        .catch(error => {
          console.error('Error:', error);
    });
    
    
    axios({
        method: 'HTTP_METHOD',
        url: 'URL',
        headers: {
          // Headers (optional)
        },
        data: {
          // Request data (optional)
        }
      })
        .then(response => {
          // Handle the successful response
        })
        .catch(error => {
          // Handle errors
});


axios({
    method: 'HTTP_METHOD',
    url: 'URL',
    headers: {
      // Headers (optional)
    },
    data: {
      // Request data (optional)
    }
  })
    .then(response => {
      // Handle the successful response
    })
    .catch(error => {
      // Handle errors
    });



