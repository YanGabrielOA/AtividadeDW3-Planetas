import planeta from "../models/planetas.js";


class planetaService {
  //CRIANDO PLANETA
  async create(
    nome,
    tipo,
    descricao,
    raio,
    densidade,
    gravidade,
    temperatura,
    qntLuas
  ) {
    try {
      const newPlaneta = new planeta({
        nome,
        tipo,
        descricao,
        raio,
        densidade,
        gravidade,
        temperatura,
        qntLuas,
      });
      await newPlaneta.save();
    } catch (error) {
      console.log(error);
    }
  }

  //LISTANDO PLANETAS
  async getAll() {
    try {
      const planetas = planeta.find();
      return planetas;
    } catch (error) {
      console.log(error);
    }
  }

  //DELETANDO PLANETAS
  async delete(id) {
    try {
      await planeta.findByIdAndDelete(id);
      console.log(`O Planeta com id ${id} foi deletado`);
    } catch (error) {
      console.log(error);
    }
  }

  //FAZENDO ALTERACOES NUM PLANETA
  async update(
    id,
    nome,
    tipo,
    descricao,
    raio,
    densidade,
    gravidade,
    temperatura,
    qntLuas
  ) {
    try {
      await planeta.findByIdAndUpdate(id, {
        nome,
        tipo,
        descricao,
        raio,
        densidade,
        gravidade,
        temperatura,
        qntLuas,
      });
    } catch (error) {
      console.log(error);
    }
  }

  //LISTANDO UM UNICO PLANETA
  async getOne(id) {
    try {
      const planetas = await planeta.findOne({ _id: id });
      return planetas;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new planetaService();
