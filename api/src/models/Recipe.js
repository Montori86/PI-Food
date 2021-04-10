const { DataTypes, UUID} = require('sequelize');

const Diet= require('./Diet')


// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Recipe= sequelize.define('recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER
    },
    healthyRating: {
      type: DataTypes.INTEGER
    },
    instructions: {
      type: DataTypes.TEXT,
    }
  });
}
