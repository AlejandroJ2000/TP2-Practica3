class NumerosModel {
    constructor() {
        this.numeros = []
    }

    postNumero = async (newNumero) => {
        this.numeros.push(newNumero)
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
export default NumerosModel