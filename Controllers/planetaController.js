import planetasServices from "../Services/planetasServices.js";
import { ObjectId } from "mongodb";

//FUNCAO PARA LISTAR PLANETAS
const getAllPlanetas = async (req, res) => {
  try {
    const planetas = await planetasServices.getAll();
    res.status(200).json({ planetas: planetas });
  } catch (error) {
    console.log(error);
  }
};

//FUNCAO PARA CADASTRAR PLANETAS
const cadPlaneta = async (req, res) => {
  try {
    const {
      nome,
      tipo,
      descricao,
      raio,
      densidade,
      gravidade,
      temperatura,
      qntLuas,
    } = req.body;
    await planetasServices.create(
      nome,
      tipo,
      descricao,
      raio,
      densidade,
      gravidade,
      temperatura,
      qntLuas
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

//FUNCAO PARA DELETAR PLANETAS

const delPlaneta = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      await planetasServices.delete(id);
      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

//FUNCAO PARA ATUALIZAR PLANETAS

const updPlaneta = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const {
        nome,
        tipo,
        descricao,
        raio,
        densidade,
        gravidade,
        temperatura,
        qntLuas,
      } = req.body;
      await planetasServices.update(
        id,
        nome,
        tipo,
        descricao,
        raio,
        densidade,
        gravidade,
        temperatura,
        qntLuas
      );
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "ERRO INTERNO NO SERVIDOR" });
  }
};
export default { cadPlaneta, updPlaneta, delPlaneta, getAllPlanetas };
