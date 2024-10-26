const ModelsCachorros = require('../models/cachorros')

class ServicesCachorros {
    async GetCachorros() {
        return ModelsCachorros.findAll()
    }
    async CreateCachorros(nome, raca, idade) {
        return ModelsCachorros.create({
            name: nome,
            race: raca,
            age: idade
        })
    }
    async UpdateCachorros(id, nome, raca, idade) {
        return ModelsCachorros.update({name: nome, race: raca, age:idade}, {
            where: {
                id: id
            }
        })
    }
    async DeleteCachorros(id) {
        return ModelsCachorros.destroy({
            where: {
                id: id,
            },
        });
    }
}

module.exports = new ServicesCachorros()