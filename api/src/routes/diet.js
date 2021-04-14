const {Router} = require('express');
const {getAllDiets} = require('../Controllers/diet')
const router = Router();




router.get ('/', getAllDiets);



module.exports = router;