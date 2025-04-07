import planetaController from "../Controllers/planetaController.js";
import express from 'express'

const planetaRoutes = express.Router()

planetaRoutes.post("/planets",planetaController.cadPlaneta)
planetaRoutes.get("/planets",planetaController.getAllPlanetas)
planetaRoutes.delete("/planets/:id",planetaController.delPlaneta)
planetaRoutes.put("/planets/:id",planetaController.updPlaneta)
//planetaRoute.get("/planets/:id",planetaController.)
export default planetaRoutes