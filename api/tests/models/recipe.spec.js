const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');
const { v4: uuidv4 } = require("uuid");




describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
         Recipe.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should create recipe name milanesa a la napolitana', () => {
        return  Recipe.create({title:"Milanesa a la napolitana", id: uuidv4 (), healthScore: 63,description: "EL PLATO" });        
        
        
      });
      it('should create recipe healthScore number 45', () => {
        return  Recipe.create({ title:"Milanesa a la napolitana", id: uuidv4 (), healthScore: 45,description: "EL PLATO"});
        
        
      });
      
    });
  });
});
