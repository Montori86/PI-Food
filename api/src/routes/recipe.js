const {Router} = require('express');
const {getAllRecipes, addRecipe, getRecipesForId} = require('../../src/Controllers/recipe.js')
const router = Router();



router.get('/', getAllRecipes);
router.get('/:idRecipe', getRecipesForId)
router.post('/', addRecipe);

module.exports = router;


