const {Diet} = require('../db');
const axios = require("axios");
const { API_KEY } = process.env;






async function getAllDiets(req, res, next) {
   
    const results = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&limit=100`)
       results.data.results.forEach(e => {
         e.diets.forEach(async e =>{
           await Diet.findOrCreate({
             where:{
               name: e
             }
           })
         })
       });
       res.send('Diet created')
}
module.exports = { 
    getAllDiets,
    
};