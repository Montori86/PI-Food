const {Router} = require('express');
const {getAllDiets, addDiet} = require('../Controllers/diet')
const router = Router();




router.get ('/', getAllDiets);
router.post ('/', addDiet);


module.exports = router;