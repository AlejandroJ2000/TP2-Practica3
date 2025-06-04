import NumerosService from "../services/service.js";

class NumerosController {
    constructor() {
        this.numerosService = new NumerosService()
    }

    postNumero = async (req, res) => {
        try {
            const { numero } = req.body
            if(numero === undefined) {
                return res.status(400).json({ error: "Numero is required" })
            } else if(typeof numero !== "number") {
                return res.status(400).json({ error: "A type number is required" })
            }
            const createdNumero = await this.numerosService.postNumero(numero)
            res.status(201).json(createdNumero)
        } catch(error) {
            res.status(500).json({ error: " Error creating numero " })
        }
    }

    getNumeros = async (req, res) => {
        try {
            const numeros = await this.numerosService.getNumeros()
            res.status(200).json(numeros)
        } catch(error) {
            res.status(500).json({ error: " Error fetching numeros " })
        }
    }

    getPromedio = async (req, res) => {
        try {
            const promedio = await this.numerosService.getPromedio()
            res.status(200).json(promedio)
        } catch(error) {
            res.status(500).json({ error: " Error calculating promedio " })
        }
    }

    getMinMax = async (req, res) => {
        try {
            const MinMax = await this.numerosService.getMinMax()
            res.status(200).json(MinMax)
        } catch(error) {
            res.status(500).json({ error: " Error calculating MinMax " })
        }
    }

    getCantidad = async (req, res) => {
        try {
            const cantidad = await this.numerosService.getCantidad()
            res.status(200).json(cantidad)
        } catch(error) {
            res.status(500).json({ error: " Error calculating cantidad " })
        }
    }
}
export default NumerosController