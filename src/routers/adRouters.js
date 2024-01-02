const router = require('express').Router();
const adminController = require("../controllers/adControllers")
//const validations = require('../middleware/validation');
// const isAuthenticated = require("../../middlewares/isAuthanticated");
// const multer = require("multer");
// const upload = multer();
//const isauth = require('../middleware/isAuth')  

router.get('/homepage', adminController.getHomePage);
router.get('/work', adminController.getWorkPage);
router.get('/work-add', adminController.getWorkAddPage);
router.get('/work-update/:id', adminController.getWorkUpdatePage);
router.get('/work-delete/:id', adminController.getWorkDelete);
router.get('/blog', adminController.getBlogPage);
router.get('/blog-add', adminController.getBlogAddPage);
router.get('/blog-update/:id', adminController.getBlogUpdatePage);
router.get('/blog-delete/:id', adminController.getBlogDelete);
router.get('/about', adminController.getAboutPage);
router.get('/contact', adminController.getContactPage);
router.get('/contact-delete/:id', adminController.getContactDelete);
router.get('/footer', adminController.getFooterPage);



router.post("/work-add", adminController.postWorkAddPage)
router.post("/work-update", adminController.postWorkUpdate)
router.post('/blog-add', adminController.postBlogAdd);
router.post('/blog-update', adminController.postBlogUpdate);
router.post('/about-update', adminController.postAboutUpdate);
router.post('/footer-update', adminController.postFooterUpdate);


router.post('/random', adminController.random);









module.exports = router;