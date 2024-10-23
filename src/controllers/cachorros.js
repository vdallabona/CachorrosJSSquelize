const ServicesCachorros = require('../Services/cachorros')
class ControllersCachorros {

    GetCachorro(req, res) {
        try{
            const cachorros = ServicesCachorros.GetCachorros()
            res.send({msg: cachorros})
        } catch (e) {
            res.status(500).send({msg: error.message})
        }
    }

    CreateCachorro(req, res) {
        try{
            const name = req.body.name
            const race = req.body.race
            const cachorros = ServicesCachorros.CreateCachorros(name, race)
            res.send({msg: cachorros})
        } catch (e) {
            res.status(500).send({msg: error.message})
        }
    }

    UpdateCachorro(req, res) {
        try{
            const id = req.params.id
            const name = req.body.name
            const race = req.body.race
            const cachorros = ServicesCachorros.UpdateCachorros(id, name, race)
            res.send({msg: cachorros})
        } catch (e) {
            res.status(500).send({msg: error.message})
        }
    }

    DeleteCachorro(req, res) {
        try{
            const id = req.params.id
            const cachorros = ServicesCachorros.DeleteCachorros(id)
            res.send({msg: cachorros})
        } catch (e) {
            res.status(500).send({msg: error.message})
        }
    }
}

module.exports = new ControllersCachorros()