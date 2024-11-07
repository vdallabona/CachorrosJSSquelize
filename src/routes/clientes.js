const express = require('express')
const ControllersCliente = require('../controllers/clientes')
const auth = require("../middleware/auth")

const routerClientes = express.Router()

routerClientes.post("/", ControllersCliente.CreateCliente)
routerClientes.get("/", auth, ControllersCliente.GetCliente)
routerClientes.put("/:id", auth, ControllersCliente.UpdateCliente)
routerClientes.delete("/:id", auth, ControllersCliente.DeleteCliente)
routerClientes.post("/login", ControllersCliente.Login)

module.exports = routerClientes;
