const express = require("express");
const router = express.Router();
const ProductscategoriesController = require("../controllers/ProductscategoriesController");

router.get('/createtableproductscategories', ProductscategoriesController.createTable)
router.post('/between',ProductscategoriesController.createProductscategories)
router.get('/productscategories', ProductscategoriesController.get)

module.exports = router;

