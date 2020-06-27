const fs = require('fs')
let enCartelera = {
    db: './data/movies.json',
    titulo: "En Cartelera.\n\n",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.db, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    cantidad: function() {
        return this.leerJSON().total_movies
    },
    listarPelis: function() {
        let movies = this.leerJSON();
        let cartelera = []
        movies.movies.forEach(function(movie) {
            cartelera.push(movie)
        })
        cartelera.sort()
        return cartelera
    }
}
module.exports = enCartelera
