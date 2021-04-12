const {Diet} = require('../db');




function addDiet(req, res, next){
    const diet = req.body
    return Diet.create(diet)
}



function getAllDiets(req, res, next){
    return Diet.findAll()
    .then((diets)=> res.send(diets))
    .catch((err)=> next(err))
}




module.exports = { 
    getAllDiets,
    addDiet, 
};