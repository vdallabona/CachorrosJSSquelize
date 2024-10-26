const express = require('express')
const router = require('./src/routes/cachorros')
const database = require('./src/config/database')

const app = express()
app.use(express.json())
app.use(router)

database.db
  .sync({ force: false })
  .then((_) => {
    console.info("Banco conectado com sucesso")
    app.listen(3000, () => {
      console.log('o servidor ligou no 3000')
    })
  })
  .catch((e) => {
    console.error(e)
  })


