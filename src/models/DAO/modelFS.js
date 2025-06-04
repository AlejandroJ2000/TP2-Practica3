import fs from 'fs'
import path from 'path'

class NumerosModelFS {
    constructor() {
        this.filePath = path.resolve('numeros.json')
        console.log("⚠️ Se instanció el modelo con File System");
        if (fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath)
            this.numeros = JSON.parse(data)
        } else {
            this.numeros = []
            this.saveToFile()
        }
    }

    saveToFile() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.numeros, null, 2))
    }

    postNumero = async (newNumero) => {
        this.numeros.push(newNumero)
        this.saveToFile()
        return newNumero
    }

    getNumeros = async () => {
        return this.numeros
    }
    
    getPromedio = async () => {
        if (this.numeros.length === 0) return "No hay números ingresados."

        let suma = 0
        for (let i = 0; i < this.numeros.length; i++) {
            suma += this.numeros[i]
        }

        let promedio = suma / this.numeros.length
        return `El promedio de numeros ingresados al momento es: ${promedio.toFixed(2)}`
    }

    getMinMax = async () => {
        if (this.numeros.length === 0) return "No hay números ingresados."

        let min = this.numeros[0]
        let max = this.numeros[0]

        for (let i = 1; i < this.numeros.length; i++) {
            if(this.numeros[i] < min) min = this.numeros[i]
            if(this.numeros[i] > max) max = this.numeros[i]
        }

        return { minimo: min, maximo: max }
    }

    getCantidad = async () => {
        return `Se ingresaron al momento ${this.numeros.length} números.`
    }
}
export default NumerosModelFS