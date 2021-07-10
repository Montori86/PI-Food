const { DataTypes, UUID} = require('sequelize');

const Diet= require('./Diet')


// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Recipe= sequelize.define('recipe', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: UUID,
      allowNull: false,
      primaryKey: true
      
    },
    dishType: {
      type: DataTypes.TEXT,
    
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    steps: {
      type: DataTypes.TEXT,
    }

  });
}
