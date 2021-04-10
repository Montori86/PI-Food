const { DataTypes, UUID } = require('sequelize');
const Recipe= require('./Recipe')


module.exports = (sequelize) => {


const Diet= sequelize.define('diet', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      
    },
    name: {
      type: DataTypes.STRING
    }
  })
}