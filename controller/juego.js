const juegoModel = require('../model/juego')

module.exports.listGames = async()=>{
    let result = await juegoModel.list();
    return result
}

module.exports.addGame = async(game)=>{
    await juegoModel.add(game)
    return('Siuuuuu')
}