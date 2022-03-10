import fs from "fs"

export default class Manejador{
    constructor(name){
        this.name = name
    }

    async getProductos(){
        try {
            const productos = await fs.promises.readFile(this.name, "utf-8")
            return JSON.parse(productos)
        } catch (error) {
            return error
        }
    }
}
