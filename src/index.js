import express from "express";
import Manejador from "./fsSystem.js"

const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Escuchando en http://localhost:${PORT}`))
const fileManager = new Manejador("../productos.txt")

let ruta1 = 0
let ruta2 = 0

app.get("/items", async (req,res) => {
    const productos = await fileManager.getProductos()
    ruta1++
    res.json({items: productos, cantidad: productos.length})
})

app.get("/item-random", async (req,res) => {
    const productos = await fileManager.getProductos()
    ruta2++
    res.json({item: productos[parseInt(Math.random()*(productos.length))]})
})

app.get("/visitas", (req,res) => {
    res.json({visitas_items: ruta1, visitas_itemRandom: ruta2})
})