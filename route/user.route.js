const express = require('express');
const userController = require('../controller/user.controller'); 

const router = express.Router();

router.post('/create', userController.createUser);            
router.post('/user', userController.findOneUser);             
module.exports = router;
