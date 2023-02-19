'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productscategorie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Productscategorie.hasMany(models.Product,{
        foreignKey:{
          fieldName:'cat_id',
          allowNull:false
        }
      })
    }
  }
  Productscategorie.init({
    cat_id: {
      autoIncrement:true,
      primaryKey:true,
      allowNull:false,
      type:DataTypes.INTEGER
    },
    prdname: DataTypes.STRING,
    description: DataTypes.STRING,
    catimage: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Productscategorie',
    tableName:'productscategorie',
    timestamps:false
  });
  return Productscategorie;
};