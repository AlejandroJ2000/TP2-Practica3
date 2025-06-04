import Factory from "../models/Factory.js";

class NumerosService {
    constructor() {
        this.numerosModel = Factory.create(process.env.PERSISTENCE)
    }

    postNumero = async (newNumero) => {
        return await this.numerosModel.postNumero(newNumero)
    }

    getNumeros = async () => {
        return await this.numerosModel.getNumeros()
    }

    getPromedio = async () => {
        return await this.numerosModel.getPromedio()
    }

    getMinMax = async () => {
        return await this.numerosModel.getMinMax()
    }

    getCantidad = async () => {
        return await this.numerosModel.getCantidad()
    }
}
export default NumerosService