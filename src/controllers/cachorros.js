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
            const {name, race, age} = req.body
            const cachorros = await ServicesCachorros.CreateCachorros(name, race, age)
            res.send({msg: cachorros})
        } catch (e) {
            res.status(500).send({msg: error.message})
        }
    }

    async UpdateCachorro(req, res) {
        try{
            const id = req.params.id
            const {name, race, age} = req.body
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

    async Login(req, res){
        try {
            const {name, race} = req.body
            const token = await ServicesCachorros.Login(name,race)
            res.status(200).send({ token })
        } catch (e) {
            res.status(500).send({msg: error.message})
        }
    }
}

module.exports = new ControllersCachorros()