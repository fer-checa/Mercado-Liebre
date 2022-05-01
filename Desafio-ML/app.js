// PROCESO PARA LEVANTAR UN SERVIDOR, Y UNIR LAS RUTAS: 
// Aqui lo que hacemos es requerir express y lo ejecutamos 
//para tener disponibles todos los metodos que vamos a precisar

const express = require("express");
const app = express();

// Aqui tenemos el modulo nativo para manejar las rutas de los archivos
const path = require("path");

// En esta parte usamos recursos estáticos.
app.use(express.static("public"));

const publicFolderPath = path.resolve(__dirname ,'./public');
app.use( express.static(publicFolderPath) );

// Ponemos a escuchar el servidor
app.listen(3030, () => {
    console.log("Servidor corriendo en http://localhost:3030")
});

// Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

// NO OLVIDAR LEVANTAR EL PROYECTO CON: npm start