const fs = require('fs');
let sucursales = {
    db: './data/theaters.json',
    titulo: "Nuestras Salas.\n\n",
    leerJSON: function() {
        let theatersJson = fs.readFileSync(this.db, 'utf-8');
        let theaters = JSON.parse(theatersJson);
        return theaters
    },
    cantidad: function() {
        return this.leerJSON().total_theaters + "\n"
    }
}
module.exports = sucursales