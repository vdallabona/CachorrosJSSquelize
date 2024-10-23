const ModelsCachorros = require('../models/cachorros')

class ServicesCachorros {

    GetCachorros() {
        return ModelsCachorros.GetCachorros()
    }
    CreateCachorros(name, race) {
        return ModelsCachorros.CreateCachorros(name, race)
    }
    UpdateCachorros(id, nome, race) {
        return ModelsCachorros.UpdateCachorros(id, nome, race)
    }
    DeleteCachorros(id) {
        return ModelsCachorros.DeleteCachorros(id)
    }
}


module.exports = new ServicesCachorros()