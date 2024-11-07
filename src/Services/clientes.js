const ModelsCliente = require('../models/cliente')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Salt = 12
class ServicesClientes {
    async GetCliente() {
        return ModelsCliente.findAll()
    }
    async CreateCliente(nome, phone) {
        if(!nome || !phone){
            throw new Error("Por favor, preencha todos os campos")
        }

        const hashPhone = await bcrypt.hash(phone, Salt)

        return ModelsCliente.create({
            name: nome,
            phone: hashPhone
        })
    }
    async UpdateCliente(id, name, phone) {
        if(!id){
            throw new Error("Informe quem quer atualizar")
        }
        const cliente = await ModelsCliente.findByPk(id)
        if(!cliente) {
            throw new Error("Informe quem quer atualizar")
        }
        const hashPhone = await bcrypt.hash(phone, Salt)
        cliente.phone = hashPhone || cliente.phone
        cliente.name = name || cliente.name

        cliente.save()
        return cliente
    }
    async DeleteCliente(id) {
        if(!id){
            throw new Error("Informe quem quer deletar")
        }
        const cliente = await ModelsCliente.findByPk(id);
        if(!cliente){
            throw new Error("Pessoa não encontrada")
        }
        return cliente.destroy()
    }

    async Login(name, phone) {
        if(!name || !phone){
            throw new Error("Por favor, preencha todos os campos")
        }

        const cliente = await ModelsCliente.findOne({where: {name}})

        if(!cliente){
            throw new Error("Email ou senha inválido")
        }
        const hashPhone = await bcrypt.hash(phone, Salt)
        const phoneValido = bcrypt.compare(hashPhone, cliente.phone)

        if(!phoneValido){
            throw new Error("Email ou senha inválido")
        }

        return jwt.sign({ id: cliente.id }, 'segredo', { expiresIn: 60 * 60})
    }
}

module.exports = new ServicesClientes()