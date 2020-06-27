let homePage = require("./homePage");
let contacto = require("./contacto")
let cartelera = require("./enCartelera")
let masVotadas = require("./masVotadas")
let preguntasFrecuentes = require("./preguntasFrecuentes");
let sucursales = require("./sucursales")

let index = {
/////////////////////////  HOME  //////////////////////////////////////////
   homePage: function(res){
    res.write(homePage.titulo)
    res.write("total: "+ homePage.cantidad() + "\n"+"\n")
    let titulos = homePage.listarPelis();
    for (titulo of titulos){
        res.write(titulo)
        res.write("\n")
    }
////PIE DE PAGINA HOME////    
     res.write(
        `
----------------------------------------
Recordá que podés visitar las secciones:\n
i. En Cartelera
ii. Más Votadas
iii. Sucursales
iv. Contacto
v. Preguntas Frecuentes")
-----------------------------------------
        `
        )    
    res.end()
   },

   ///////////////////////////// CONTACTO ///////////////////////////////////////
   contacto: function(res){
   res.write(    
           `
${contacto.titulo}
${contacto.contenido}
           `)
   res.end()
   },

   ////////////////////////////////  CARTELERA  /////////////////////////////////////
   enCartelera: function(res){
   res.write(cartelera.titulo)
   let titulos = cartelera.listarPelis();
   res.write("total de peliculas: "+ cartelera.cantidad() + "\n"+"\n")
   titulos.forEach(function(movie){
  res.write(
    `
    ----------------------------------------
Titulo:  ${movie.title} 
Reseña: ${movie.overview}
    -----------------------------------------
            `
  )
   })   
   },

   ///////////////////////////////  MAS  VOTADAS  /////////////////////////////////////
   masVotadas: function(res){
    res.write(masVotadas.titulo)
    res.write(`Total de peliculas mas votadas ${masVotadas.cantidad()}\n\n`)
    res.write(`Promedio de Ratings: ${masVotadas.ratingPromedio()} \n \n`)
    let filtradas = masVotadas.filtrarPelis()
    filtradas.forEach(function(filtrada){
        res.write(
            `
    ----------------------------------------
Titulo:  ${filtrada.title} 
Rating: ${filtrada.vote_average} 
Reseña: ${filtrada.overview}
    -----------------------------------------
            `
    )   
    })
    res.end()
   },

   ///////////////////////////////  FAQS  /////////////////////////////////////
   preguntasFrecuentes: function(res){
       res.write(preguntasFrecuentes.titulo)
       res.write("Total de preguntas " + preguntasFrecuentes.cantidad())
       let faqs = preguntasFrecuentes.leerJSON();
       faqs.faqs.forEach(function(faq){
           res.write(
            `
            ----------------------------------------
Pregunta: ${faq.faq_title}  \n
Respuesta: ${faq.faq_answer} 

            -----------------------------------------
                    `
                    )
       })
res.end()
   },

   ///////////////////////////////  SUCURSALES  /////////////////////////////////////
   sucursales: function(res){
       res.write(sucursales.titulo)
       res.write("Total de salas: " + sucursales.cantidad())
       let salas = sucursales.leerJSON()
       salas.theaters.forEach(function(sala){
           res.write(
            `
            ----------------------------------------
 Nombre: ${sala.name}  \n
 Direccion: ${sala.adress} \n
 Descripcion: ${sala.description}

            -----------------------------------------
                    `
           )
       })
res.end()
   }


}
module.exports = index