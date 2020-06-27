const index = require("./src/index")

let router = function(url,res){
switch(url){
    case "/":
        index.homePage(res);
        break
    case "/contacto":
        index.contacto(res);
        break
    case "/en-cartelera":
        index.enCartelera(res);
        break
    case "/mas-votadas":
        index.masVotadas(res);
        break
    case "/preguntas-frecuentes":
        index.preguntasFrecuentes(res);
        break
    case "/sucursales":
        index.sucursales(res);
        break
    default:
        res.end("404 not found")
}
}

module.exports = router