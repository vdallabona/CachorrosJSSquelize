const database = require('../config/database')

class ModelsCachorros {
    constructor() {
        this.model = database.db.define('cachorros', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.db.Sequelize.STRING
            },
            race: {
                type: database.db.Sequelize.STRING
            },
            age: {
                type: database.db.Sequelize.STRING
            }
        })
    }
}

module.exports = new ModelsCachorros().model



// INSERT INTO `cachorros` (`id`, `name`, `race`, `age`, `createdAt`, `updatedAt`) VALUES ('1', 'BILLY', 'pudlle', '2', '2024-10-26 02:14:15.000000', '2024-10-26 02:14:15.000000'), ('2', 'joana', 'pastora alema', '5', '2024-10-26 02:14:15.000000', '2024-10-26 02:14:15.000000');