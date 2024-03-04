const axios = require('axios');

// Contoh penggunaan Axios untuk melakukan GET request
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Contoh penggunaan Axios untuk melakukan POST request
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1
  })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
