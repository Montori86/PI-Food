const { Recipe, Diet } = require("../db.js");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const { response } = require("express");
// const Diet = require("../models/Diet.js");

const { API_KEY } = process.env;

async function addRecipe(req, res, next) {
  let {
    name,
    description,
    rating,
    healthyRating,
    instructions,
    diets,
  } = req.body;
  if (name && description && diets.length > 0) {
    let newRecipe = await Recipe.create({
      name,
      id: uuidv4(),
      description,
      rating,
      healthyRating,
      instructions,
    });    
    diets.forEach(async diet => {
      if (Diet.findOrCreate({where: {name: diet}})){
      let idDiet= await Diet.findOne({
        where: {
          name: diet
        }
      })
      await newRecipe.addDiet(idDiet)
      }
    })

    res.send("Recipe added");
  } else {
    res.status(400).send("Obligatory completed");
  }
}

async function getAllRecipes(req, res, next) {
  let name = req.query.name;
  if (name) {
    const recipeDB = await Recipe.findAll({
      where: {
        name: name,
      },
    });
    const recipeApi = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&addRecipeInformation=true`
    );
    res.status(200).send(recipeDB.concat(recipeApi.data.results));
  } else {
    const recipeApi = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
    );
    res.status(200).send(recipeApi.data.results);
  }
}

async function getRecipesForId(req, res, next) {
  let id = req.params.idRecipe;
  if (id.length > 50) {
    let recipeDB = await Recipe.findAll({
      where: {
        id: id,
      },
    });
    res.send(recipeDB);
  } else {
    const recipeApi = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true`
    );
    function getSteps() {
      let steps = recipeApi.data.analyzedInstructions[0].steps.map((e, i) => {
        return e.step;
      });
      return steps;
    }
    let card = {
      image: recipeApi.data.image,
      name: recipeApi.data.title,
      dishType: recipeApi.data.dishType,
      diet: recipeApi.data.diets,
      description: recipeApi.data.summary,
      healthScore: recipeApi.data.healthScore,
      steps: getSteps(),
    };
    res.json(card);
  }
}

module.exports = {
  getAllRecipes,
  addRecipe,
  getRecipesForId,
};
