const ServicesClientes = require('../Services/clientes')
class ControllersCliente {

    async GetCliente(req, res) {
        try{
            const cliente = await ServicesClientes.GetCliente()
            res.send({msg: cliente})
        } catch (e) {
            res.status(500).send({msg: error.message})
        }
    }

    async CreateCliente(req, res) {
        try{
            const {name, phone} = req.body
            const cliente = await ServicesClientes.CreateCliente(name, phone)
            res.send({msg: cliente})
        } catch (e) {
            res.status(500).send({msg: error.message})
        }
    }

    async UpdateCliente(req, res) {
        try{
            const id = req.params.id
            const {name, phone} = req.body
            const cliente = await ServicesClientes.UpdateCliente(id, name, phone)
            res.send({msg: cliente})
        } catch (e) {
            res.status(500).send({msg: error.message})
        }
    }

    async DeleteCliente(req, res) {
        try{
            const  id = req.params.id
            const cliente = await ServicesClientes.DeleteCliente(id)
            res.send({msg: cliente})
        } catch (e) {
            res.status(500).send({msg: e.message})
        }
    }

    async Login(req, res){
        try {
            const {name, phone} = req.body
            const token = await ServicesClientes.Login(name,phone)
            res.status(200).send({ token })
        } catch (e) {
            res.status(500).send({msg: error.message})
        }
    }
}

module.exports = new ControllersCliente()