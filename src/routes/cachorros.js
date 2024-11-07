const express = require('express')
const ControllersCachorro = require('../controllers/cachorros')
const auth = require("../middleware/auth")

const routerCachorros = express.Router()

routerCachorros.post("/", ControllersCachorro.CreateCachorro)
routerCachorros.get("/", auth, ControllersCachorro.GetCachorro)
routerCachorros.put("/:id", auth, ControllersCachorro.UpdateCachorro)
routerCachorros.delete("/:id", auth, ControllersCachorro.DeleteCachorro)

module.exports = routerCachorros;
