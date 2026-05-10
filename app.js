const express = require("express");
const app = express();
app.get("/", (req, res) => {
res.send("Pagina principal");
});
app.get("/clientes", (req, res) => {
res.send("Ruta de clientes");
});
app.get("/productos", (req, res) => {
res.send("Ruta de productos");
});
app.listen(9000, () => {
console.log("Servidor ejecutandose en puerto 9000");
});
