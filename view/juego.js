const gameController = require('../controller/juego')

module.exports = (app) => {
  app.get("/juego", async(req, res) => {
    let result= await gameController.listGames();
    res.json(result)
  });

  app.post("/juego", async(req, res) => {
    let juego = req.body;
    console.log(juego);
    let result = await gameController.addGame(juego)
    res.json(result)
  });
};
