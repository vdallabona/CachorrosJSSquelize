const express = require('express')
const routerCachorros = require('./src/routes/cachorros')
const routerClientes = require('./src/routes/clientes')
const Database = require('./src/config/database')

const app = express()
app.use(express.json())
app.use("/cachorro", routerCachorros)
app.use("/cliente", routerClientes)

Database.db
  .sync({ force: true })
  .then((_) => {
    console.info("Banco conectado com sucesso")
    app.listen(3000, () => {
      console.log('o servidor ligou no 3000')
    })
  })
  .catch((e) => {
    console.error(e)
  })


