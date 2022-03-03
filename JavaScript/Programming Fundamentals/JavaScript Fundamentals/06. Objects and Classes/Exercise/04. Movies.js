function solve(tokens = []) {

    let movies = [];
  
    while (tokens.length !== 0) {

      let movieData = tokens.shift();
  
      if (movieData.includes('addMovie')) {

        movieData = movieData.replace('addMovie ', '');
        let movie = { name: movieData };
        movies.push(movie);

      } else if (movieData.includes('directedBy')) {

        movieData = movieData.replace(' directedBy ', '|').split('|');
        let movie = movies.find(x => x.name === movieData[0]);
    
        if (movie !== undefined) {

          movie.director = movieData[1];
        }

      } else {

        movieData = movieData.replace(' onDate ', '|').split('|');
        let movie = movies.find(x => x.name === movieData[0]);
    
        if (movie !== undefined) {

          movie.date = movieData[1];
          
        }
      }
    }
  
    movies.filter(x => Object.keys(x).length === 3).forEach(x => console.log(JSON.stringify(x)));
  }
  