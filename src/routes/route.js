import NumerosController from "../controllers/controller.js";
import express from "express"

class Router {
    constructor() {
        this.router = express.Router()
        this.numerosController = new NumerosController()
    }

    startRoutes() {
        this.router.post("/numeros", this.numerosController.postNumero)
        this.router.get("/entrada", this.numerosController.getNumeros)
        this.router.get("/promedio", this.numerosController.getPromedio)
        this.router.get("/minmax", this.numerosController.getMinMax)
        this.router.get("/cantidad", this.numerosController.getCantidad)

        return this.router
    }
}
export default Router