const fs = require("fs");
let masVotadas = {
    db: './data/movies.json',
    titulo: "Mas Votadas.\n\n",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.db, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },

    cantidad: function() {
        let movies = this.leerJSON();
        let cantidadFiltrada = movies.movies.filter(function(movie){
            return movie.vote_average >= 7
        })
        return cantidadFiltrada.length
    },

    filtrarPelis: function() {
        let movies = this.leerJSON();
        let masVotadas = movies.movies.filter(function(movie){
            return movie.vote_average >= 7
        })
        return masVotadas  
    },
    ratingPromedio: function(){
        let movies = this.filtrarPelis()
        let rating = []
        movies.forEach(movie => {
            rating.push(movie.vote_average) 
        });
        let ratingSumado = rating.reduce(function(acum,num){
            return acum + num
        })
        return (ratingSumado / movies.length)
        }
    
}


module.exports = masVotadas