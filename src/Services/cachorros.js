const ModelsCachorros = require('../models/cachorros')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Salt = 12
class ServicesCachorros {
    async GetCachorros() {
        return ModelsCachorros.findAll()
    }
    async CreateCachorros(nome, raca, idade) {
        if(!nome || !raca || !idade){
            throw new Error("Por favor, preencha todos os campos")
        }

        const hashNome = await bcrypt.hash(nome, Salt)

        return ModelsCachorros.create({
            name: hashNome,
            race: raca,
            age: idade
        })
    }
    async UpdateCachorros(id, nome, raca, idade) {
        if(!id){
            throw new Error("Informe quem quer atualizar")
        }
        const cachorro = await ModelsCachorros.findByPk(id)
        if(!cachorro) {
            throw new Error("Informe quem quer atualizar")
        }
        const hashNome = await bcrypt.hash(nome, Salt)
        cachorro.name = hashNome || cachorro.name
        cachorro.race = raca || cachorro.race
        cachorro.age = idade || cachorro.age

        cachorro.save()
        return cachorro
    }
    async DeleteCachorros(id) {
        if(!id){
            throw new Error("Informe quem quer deletar")
        }
        const cachorro = await ModelsCachorros.findByPk(id);
        return cachorro.destroy()
    }

    async Login(name, race) {
        if(!name || !race){
            throw new Error("Por favor, preencha todos os campos")
        }

        const cachorro = await ModelsCachorros.findOne({where: {race}})

        if(!cachorro){
            throw new Error("Email ou senha inválido")
        }

        const nomeValido = bcrypt.compare(name, cachorro.name)

        if(!nomeValido){
            throw new Error("Email ou senha inválido")
        }

        return jwt.sign({ id: cachorro.id }, 'segredo', { expiresIn: 60 * 60})
    }
}

module.exports = new ServicesCachorros()