let cachorros = [
    {
      "name": "Billy",
      "race": "pudle"
    },
    {
      "name": "Latoia",
      "race": "pudle"
    }
]

class ModelsCachorros {

    GetCachorros() {
        return cachorros
    }
    CreateCachorros(name, race) {
        let cachorro = {
            "name": name,
            "race": race
        }
        return cachorros.push(cachorro)
    }
    UpdateCachorros(id, name, race) {
        let cachorro = {
            "name": name,
            "race": race
        }
        return cachorros[id] = cachorro
    }
    DeleteCachorros(id) {
        return cachorros.splice(id,1)
    }
}

module.exports = new ModelsCachorros()