const {Router} = require('express');
const {getAllRecipes, addRecipe} = require('../Controllers/recipe')
const router = Router();



router.get('/', getAllRecipes);
router.post('/', addRecipe);

module.exports = router;


