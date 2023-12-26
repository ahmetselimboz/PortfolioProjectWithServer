const router = require('express').Router();
const frontController = require("../controllers/frControllers")
//const validations = require('../middleware/validation');
// const isAuthenticated = require("../../middlewares/isAuthanticated");
// const multer = require("multer");
// const upload = multer();
//const isauth = require('../middleware/isAuth')  

router.get('/', frontController.getHomePage);
router.get('/homepage', frontController.getHomePage);






module.exports = router;