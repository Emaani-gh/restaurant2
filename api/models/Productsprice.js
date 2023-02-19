'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productsprice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Productsprice.belongsTo(models.Product,{
        foreignKey:{
          fieldName:'prd_id',
          allowNull:false
        }
      })
    }
  }
  Productsprice.init({
    pr_id:{
      autoIncrement:true,
      primaryKey:true,
      allowNull:false,
      type:DataTypes.INTEGER
    },
    prd_id: {
      type:DataTypes.CHAR,
      allowNull:false
    },
    attr_id: DataTypes.INTEGER,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Productsprice',
    tableName:'productsprice',
    timestamps:false
  });
  return Productsprice;
};