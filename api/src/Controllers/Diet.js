const { Diet, Recipe } = require("../db.js");
const axios = require("axios");
const { API_KEY } = process.env;

async function getAllDiets(req, res, next) {
  const results = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  results.data.results.forEach((e) => {
    e.diets.forEach(async (e) => {
      await Diet.findOrCreate({
        where: {
          name: e,
        },
      });
    });
  });
  let aux = await Diet.findAll();
  let allDiets = aux.map((e) => {
    return e.dataValues.name;
  });
  res.send(allDiets);
}
module.exports = {
  getAllDiets,
};
