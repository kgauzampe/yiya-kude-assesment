//HTTP get method to fetch from API
const http = require('http');

http.get('http://www.omdbapi.com/?i=tt3896198&apikey=de55b8e5', res => {
  let movies = [];
  console.log('Status Code:', res.statusCode);
  console.log('your movie list',res)

  res.on('movies', movies => {
    movies.push(movies);
  });
  res.on('end', () => {
    console.log('Response ended: ');
  });
  // loop through the data
  for (let i = 0 ; i < movies[i]; i++ ){
    console.log("movie list", movies[i]);
  }
  
}).on('error', err => {
  console.log('Error: ', err.message);
});