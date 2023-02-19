var express = require('express');
const {Productscategorie} = require('../models/');
const {Product} = require('../models/');
const {Productsprice} = require('../models/');
var router = express.Router();

function asyncHandler(cb){
  return async (req, res, next)=>{
    try {
      await cb(req,res, next);
    } catch(err){
      next(err);
    }
  };
}


router.get('/',asyncHandler(async(req,res)=>{
  const category = await Productscategorie.findAll({
    include:[
      {model:Product,include:[Productsprice]}
    ]
  })
  res.json(category)
}))

/* GET ALL CATEGORIES */
 router.get('/p', asyncHandler(async(req,res)=>{
   const price = await ProductsCategory.findAll({
     include:[{model:Product,include:[Productsprice]}]
   })
   res.json(price)
 })
);
// router.get('/extras', asyncHandler(async(req,res)=>{
//   const extras = await ProductsExtra.findAll()
//   res.json(extras)
// })
// );

// router.get('/products', asyncHandler(async(req,res)=>{
//   const products = await Product.findAll( { 
//     include: [
//       {model:ProductsCategory,attributes:[['prdname','categName'], 'cat_id', 'description', 'catimage']},
//       {model:ProductsPrices},
//     ]
//   } )
//   res.json(products)
// })
// );


module.exports = router;
