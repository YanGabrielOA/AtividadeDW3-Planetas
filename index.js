import express from "express";
import mongoose from "mongoose";

const app = express();

//CONFIGURACAO DO EXPRESS
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//INICIANDO O SERVIDOR
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API RODANDO EM http://localhost:${port}`);
  }
});