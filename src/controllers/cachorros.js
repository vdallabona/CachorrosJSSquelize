const ServicesCachorros = require('../Services/cachorros')
class ControllersCachorros {

    async GetCachorro(req, res) {
        try{
            const cachorros = await ServicesCachorros.GetCachorros()
            res.send({msg: cachorros})
        } catch (e) {
            res.status(500).send({msg: error.message})
        }
    }

    async CreateCachorro(req, res) {
        try{
            const name = req.body.name
            const race = req.body.race
            const age = req.body.age
            const cachorros = await ServicesCachorros.CreateCachorros(name, race, age)
            res.send({msg: cachorros})
        } catch (e) {
            res.status(500).send({msg: error.message})
        }
    }

    async UpdateCachorro(req, res) {
        try{
            const id = req.params.id
            const name = req.body.name
            const race = req.body.race
            const age = req.body.age
            const cachorros = await ServicesCachorros.UpdateCachorros(id, name, race, age)
            res.send({msg: cachorros})
        } catch (e) {
            res.status(500).send({msg: error.message})
        }
    }

    async DeleteCachorro(req, res) {
        try{
            const id = req.params.id
            const cachorros = await ServicesCachorros.DeleteCachorros(id)
            res.send({msg: cachorros})
        } catch (e) {
            res.status(500).send({msg: error.message})
        }
    }
}

module.exports = new ControllersCachorros()