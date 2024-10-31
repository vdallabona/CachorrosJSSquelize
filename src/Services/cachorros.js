const ModelsCachorros = require('../models/cachorros')

class ServicesCachorros {
    async GetCachorros() {
        return ModelsCachorros.findAll()
    }
    async CreateCachorros(nome, raca, idade) {
        if(!nome || !raca || !idade){
            throw new Error("Por favor, preencha todos os campos")
        }
        return ModelsCachorros.create({
            name: nome,
            race: raca,
            age: idade
        })
    }
    async UpdateCachorros(id, nome, raca, idade) {
        if(!id){
            throw new Error("Informe quem quer atualizar")
        }
        const cachorro = await ModelsCachorros.findByPk({where: {id: id}})
        if(!cachorro) {
            throw new Error("Informe quem quer atualizar")
        }
        cachorro.name = nome || cachorro.name // se tiver vazio o valor fica igual ao do banco
        cachorro.race = raca || cachorro.race
        cachorro.age = idade || cachorro.age

        cachorro.save()
        return cachorro
    }
    async DeleteCachorros(id) {
        if(!id){
            throw new Error("Informe quem quer deletar")
        }
        const cachorro = await ModelsCachorros.findByPk({where: {id: id}});
        return cachorro.destroy
    }
}

module.exports = new ServicesCachorros()