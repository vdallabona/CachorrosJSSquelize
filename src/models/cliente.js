const database = require('../config/database')

class ModelsCliente {
    constructor() {
        this.model = database.db.define('clientes', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.db.Sequelize.STRING
            },
            phone: {
                type: database.db.Sequelize.STRING,
                unique: true
            }
        })
    }
}

module.exports = new ModelsCliente().model
