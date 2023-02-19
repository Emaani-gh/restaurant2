'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Productscategorie,{
        foreignKey:{
          fieldName:'cat_id',
          allowNull:false
        }
      })

      Product.hasMany(models.Productsprice,{
        foreignKey:{
          fieldName:'prd_id',
          allowNull:false
        }
      })
    }
  }
  Product.init({
    prd_id:{ 
      type:DataTypes.CHAR,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false,
    },
    cat_id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
    },
    prdname:{
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName:'product',
    timestamps:false
  });
  return Product;
};