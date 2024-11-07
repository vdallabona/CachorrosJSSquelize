const ServicesCachorros = require('../Services/cachorros')
class ControllersCachorros {

    async GetCachorro(req, res) {
        try{
            const cachorros = await ServicesCachorros.GetCachorros()
            res.send({msg: cachorros})
        } catch (e) {
            res.status(500).send({msg: e.message})
        }
    }

    async CreateCachorro(req, res) {
        try{
            const {name, race, age} = req.body
            const cachorros = await ServicesCachorros.CreateCachorros(name, race, age)
            res.send({msg: cachorros})
        } catch (e) {
            res.status(500).send({msg: e.message})
        }
    }

    async UpdateCachorro(req, res) {
        try{
            const id = req.params.id
            const {name, race, age} = req.body
            const cachorros = await ServicesCachorros.UpdateCachorros(id, name, race, age)
            res.send({msg: cachorros})
        } catch (e) {
            res.status(500).send({msg: e.message})
        }
    }

    async DeleteCachorro(req, res) {
        try{
            const id = req.params.id
            const cachorros = await ServicesCachorros.DeleteCachorros(id)
            res.send({msg: cachorros})
        } catch (e) {
            res.status(500).send({msg: e.message})
        }
    }
}

module.exports = new ControllersCachorros()