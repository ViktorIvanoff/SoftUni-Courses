function movies(input) {
let movies = [];

for(let line of input) {
    // ['addMovie Fast and Furious',
    let [command, movieName] = line.split("addMovie ");
    if(line.startsWith('addMovie')) {
        //add movie
        movies.push( {"name": movieName} );
    } else if (line.includes("directedBy")) {
        let [movieName, directorName] = line.split(" directedBy ");

        let movie = movies.find(m => m.name === movieName);

        if(movie) {
            movie.director = directorName;
        }
    } else if (line.includes("onDate")){
        // 'Godfather onDate 29.07.2018',
         let [movieName, dateInput] = line.split(" onDate ");

        let movie = movies.find(m => m.name === movieName);

        if(movie) {
            movie.date = dateInput;
        }
    }
}

for(let movie of movies) {
    if(movie.director && movie.name && movie.date)
    console.log(JSON.stringify(movie));
}
}
movies(
['addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
]
);

// "name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
// {"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}
