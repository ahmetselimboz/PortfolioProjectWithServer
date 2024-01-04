const router = require('express').Router();
const frontController = require("../controllers/frControllers")
//const validations = require('../middleware/validation');
// const isAuthenticated = require("../../middlewares/isAuthanticated");
// const multer = require("multer");
// const upload = multer();
//const isauth = require('../middleware/isAuth')  

router.get('/', frontController.getHomePage);
router.get('/homepage', frontController.getHomePage);
router.get('/work', frontController.getWorkPage);
router.get('/work-detail/:id', frontController.getWorkDetailPage);
router.get('/blog', frontController.getBlogPage);
router.get('/about', frontController.getAboutPage);
router.get('/contact', frontController.getContactPage);



router.post('/contact', frontController.postContact);






module.exports = router;