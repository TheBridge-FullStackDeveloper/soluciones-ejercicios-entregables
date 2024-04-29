const express = require("express");
const router = express.Router();
const OrdersController = require("../controllers/OrdersController");

router.get('/createtableorders',OrdersController.createTable)
router.post('/createorder', OrdersController.createOrder)
router.get('/orders', OrdersController.getAll)

module.exports = router;