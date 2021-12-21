//instalo express
const express = require("express");
let app = express();

//Inicializo dotenv
require("dotenv").config();
//uso mi middleware json de express
app.use(express.json());
const juegosView = require("./view/juego");
const sequelize = require("./db/conexion");

//inicio mi server
//se hizo en funcion porque necesitamos que la base de datos funcione tambien
let serverStart = async () => {
  try {
    await sequelize.authenticate();
    console.log("aweso aweso ya se conecto al sql");

    app.listen(3000, () => {
      console.log(
        "Wenas y navideñas nochis todo en orden en el server, el server inicio en localhost:3000"
      );
    });
  } catch (error) {
    console.log(`Error en el SQL: ${error}`);
  }
};

serverStart();

//views
juegosView(app)