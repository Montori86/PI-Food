// const {Diet} = require('../db');
// const axios = require("axios");
// const { API_KEY } = process.env;



// async function getAllDiets(req, res, next) {
   
//     // const dietDB = await Diet.findAll({
//     //   where:{
//     //     diets:diets
//     //   }
//     // })
//     const dietApi = await axios.get(
//       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
//     );

//     res.send(dietApi.data)
    
//     }



// module.exports = { 
//     getAllDiets,
     
// };