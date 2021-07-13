const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const RecipeRoutes = require('./recipe.js');
const DietRoutes = require('./diet.js');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/recipe', RecipeRoutes);
router.use('/types', DietRoutes);


module.exports = router;
