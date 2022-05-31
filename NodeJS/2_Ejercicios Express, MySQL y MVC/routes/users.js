const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/UsersController");

router.get('/createtableusers', UsersController.createTable)
router.post('/createuser', UsersController.createUser)
router.put('/user/:id', UsersController.update)
router.get('/users', UsersController.getAll)
router.get('/users/id/:id', UsersController.getById)  
router.get('/fixed', UsersController.beforeDelete)  
router.delete('/deleteuser/:id', UsersController.delete)

module.exports = router;