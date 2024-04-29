const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/ProductsController");

router.get('/createtableproducts', ProductsController.createTable)
router.post('/createproduct', ProductsController.createProduct)
router.put('/product/:id', ProductsController.update)
router.get('/products', ProductsController.getAll)
router.get('/products/id/:id', ProductsController.getById)  
router.get('/products/desc', ProductsController.getOrder)  
router.get('/products/name/:name', ProductsController.getByName)  
router.delete('/deleteproduct/:id', ProductsController.delete)

module.exports = router;