const sequelize = require('../db/conexion');

module.exports.list = async()=>{
    let result = await sequelize.query('SELECT * FROM games')
    return result
}

module.exports.add = async(game)=>{
    await sequelize.query(`INSERT INTO games (title, description, author) VALUES ('${game.title}', '${game.description}', '${game.author}')`)
    
}