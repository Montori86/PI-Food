const {Router} = require('express');
const {getAllDiets} = require('../Controllers/Diet.js')
const router = Router();




router.get ('/', getAllDiets);



module.exports = router;