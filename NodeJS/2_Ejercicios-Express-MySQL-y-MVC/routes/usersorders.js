const express = require("express");
const router = express.Router();
const UsersordersController = require("../controllers/UsersordersController");

router.get('/usersorders', UsersordersController.get)

module.exports = router;

