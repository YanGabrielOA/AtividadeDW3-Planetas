import mongoose from "mongoose";
const planetasSchema = new mongoose.Schema({
  nome: String,
  tipo: String,
  descricao: String,
  raio: String,
  densidade: String,
  gravidade: String,
  temperatura: Number,
  qntLuas: Number,
});
const planeta = mongoose.model("planeta", planetasSchema);

export default planeta;
