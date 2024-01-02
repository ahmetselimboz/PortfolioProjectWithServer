const router = require('express').Router();
const adminController = require("../controllers/adControllers")
//const validations = require('../middleware/validation');
// const isAuthenticated = require("../../middlewares/isAuthanticated");
// const multer = require("multer");
// const upload = multer();
//const isauth = require('../middleware/isAuth')  

router.get('/homepage', adminController.getHomePage);
router.get('/work', adminController.getWorkPage);







module.exports = router;