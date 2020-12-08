const express = require('express');
const app = express();
const productRoutes = express.Router();
const Product = require('../models/product');

productRoutes.route('/add').post(function(req,res){
    let product = new Product(req.body);
    console.log(product)
    product.save()
        .then(product=>{
        res.status(200).json({'Product':'product has been added successfully'});
        })
        .catch(err=>{
        res.status(400).send('unable to save to database');
        });
});

productRoutes.route('/').get(function(req,res){
   Product.find(function(err,products){
    if(err){
        console.log('error found while selecting data in database',err);
    }
    else{
        res.json(products);
    }
   })
})

productRoutes.route('/edit/:id').get(function(req,res){
   let id = req.params.id;
   Product.findById(id,function(err,product){
       if(err){
           console.log('error occured',err);
       }
       else{
           res.json(product);
       }
   })
})

productRoutes.route('/update/:id').put(function(req,res){
    Product.findById(req.params.id,function(err,product){
        if(!product){
            res.status(400).send('record not found');
        }
        else{
         product.productName= req.body.productName;
         product.productDescription = req.body.productDescription;
         product.productPrice = req.body.productPrice;
         product.save()
         .then(product=>{
             res.json('updated completed');
         })
         .catch(err=>{
             res.status(400).send('update failed');
         })
        }
    })
})

productRoutes.route('/delete/:id').delete(function(req,res){
   Product.findByIdAndRemove({_id:req.params.id},function(err,product){
       if(err){
           res.json(err);
       }
       else{
           res.json('successfully removed');
       }
   })
})

module.exports = productRoutes;