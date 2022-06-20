const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');


/*
    USAGE : GET all the products
    URL : http://127.0.0.1:5000/api/products
    REQUEST : GET
    FIELDS : no-fields
*/

router.get('/products', async (request,response) => {
    try{
        let product = await Product.find();
        response.status(200).json(product);
    }
    catch(err){
        console.error(err)
        response.status(500).json({
            msg : err.message
        })
    }
})

/*
    USAGE : GET a single products
    URL : http://127.0.0.1:5000/api/products/:id
    REQUEST : GET
    FIELDS : no-fields
*/

router.get('/products/:id', async (request,response) => {
    try{
    let productId = request.params.id;
        let product = await Product.findById(productId);
        response.status(200).json(product)

    }
    catch(err){
        console.error(err)
        response.status(500).json({
            msg : err.message
        })
    }
})

/*
    USAGE : CREATE a products
    URL : http://127.0.0.1:5000/api/products
    REQUEST : POST 
    FIELDS : name , image , price, qty, info
*/

router.post('/products', async (request,response) => {
    try{
        let newProduct =  {
            name  : request.body.name,
            image : request.body.image,
            price : request.body.price,
            qty : request.body.qty,
            info : request.body.info
        }
        let product = await Product.findOne({name : newProduct.name});
        if(product) {
            return response.status(401).json({
                msg : 'product already exist'
            })
        }
        product = new Product(newProduct);
        product = await product.save();
        response.status(200).json({
            msg : 'product is created succeslfully',
            product : product
            
        });
    }
    catch(err) {
        console.error(err);
        response.status(500).json({
            msg : err.message
        })
    }
});

/*
    USAGE :UPDATE a  products
    URL : http://127.0.0.1:5000/api/products/:id
    REQUEST : PUT
    FIELDS : name , image , price, qty, info
*/

router.put('/products/:id', async (request,response) => {
    let productId = request.params.id;
    try{
        let updatedProduct =  {
            name  : request.body.name,
            image : request.body.image,
            price : request.body.price,
            qty : request.body.qty,
            info : request.body.info
        };
        // product exist or not
        let product = await Product.findById(productId);
        if(!product) {
           return response.status(401).json({
                msg : 'No such Data Found'
            });
          
        }
        product = await Product.findByIdAndUpdate(product, {
            $set : updatedProduct
        },{new : true});
        response.status(200).json({
            msg : 'updated success',
            product : product
        })
    }
    catch(err) {
        console.error(err);
        response.status(500).json({
            msg : err.message
        })
    }
})
/*
    USAGE :DELETE a  products
    URL : http://127.0.0.1:5000/api/products/:id
    REQUEST : PUT
    FIELDS : no fields
*/
router.delete('/products/:id', async (request,response) => {
    let productId = request.params.id;
    try{
        let product = await Product.findByIdAndDelete(productId);
        response.status(200).json({
            msg : 'Deleted Succesfully',
            product : product
        })
    }
    catch(err) {
        console.error(err);
        response.status(500).json({
            msg : err.message
        })
    }
})


module.exports = router;	