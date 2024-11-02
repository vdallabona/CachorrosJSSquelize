const jwt = require("jsonwebtoken")

function auth(req, res, next){
    const token = req.headers['authorization']

    if(!token){
        console.error('Token não recebido', err)
        return res.status(400).send({msg: "Sem permissão ou token não existente"})
    }

    jwt.verify(token, "segredo", (err, decoded)=> {    //"segredo" deveria ser uma variavel de ambiente
        if (err){
            console.error('Token sem premissão válida', err)
            return res.status(400).send({msg: "Sem permissão ou token não existente"})
        }

        console.log(decoded)
        //validar o usuário
        next()
    })
}

module.exports = auth;