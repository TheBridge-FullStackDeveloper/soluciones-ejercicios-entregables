const express = require("express");
const router = express.Router();
const CategoriesController = require("../controllers/CategoriesController");

router.get('/createtablecategories', CategoriesController.createTable)
router.post('/createcategory', CategoriesController.createCategory)
router.put('/category/:id', CategoriesController.update)
router.get('/categories', CategoriesController.getAll)
router.get('/categories/id/:id', CategoriesController.getById)  

module.exports = router;