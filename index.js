import express from "express";
import mongoose from "mongoose";
import planeta from "./models/planetas.js";

const app = express();

//IMPORTANDO ROUTES
import planetaRoutes from "./Routes/planetaRoutes.js";
//CONFIGURACAO DO EXPRESS
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", planetaRoutes);

//CONECTANDO AO MONGODB
mongoose.connect("mongodb://127.0.0.1:27017/api-planets");

//INICIANDO O SERVIDOR
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API RODANDO EM http://localhost:${port}`);
  }
});
