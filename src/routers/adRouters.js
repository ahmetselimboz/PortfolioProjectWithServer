const router = require('express').Router();
const adminController = require("../controllers/adControllers")
//const validations = require('../middleware/validation');
const isAuthenticated = require("../middlewares/authMiddleware");
const multerConfig = require('../config/multer_config')
const multer = require("multer");
const upload = multer();

router.get('/homepage',isAuthenticated.oturumAcilmis, adminController.getHomePage);
router.get('/work', isAuthenticated.oturumAcilmis,adminController.getWorkPage);
router.get('/work-add', isAuthenticated.oturumAcilmis,adminController.getWorkAddPage);
router.get('/work-update/:id',adminController.getWorkUpdatePage);
router.get('/work-delete/:id', adminController.getWorkDelete);
router.get('/blog', isAuthenticated.oturumAcilmis,adminController.getBlogPage);
router.get('/blog-add', isAuthenticated.oturumAcilmis,adminController.getBlogAddPage);
router.get('/blog-update/:id', adminController.getBlogUpdatePage);
router.get('/blog-delete/:id', adminController.getBlogDelete);
router.get('/about', isAuthenticated.oturumAcilmis,adminController.getAboutPage);
router.get('/contact',isAuthenticated.oturumAcilmis, adminController.getContactPage);
router.get('/contact-delete/:id', adminController.getContactDelete);
router.get('/footer', isAuthenticated.oturumAcilmis,adminController.getFooterPage);
router.get('/login',isAuthenticated.oturumAcilmamis, adminController.getLogin);
router.get('/register',isAuthenticated.oturumAcilmamis, adminController.getRegister);



router.post('/homepage',upload.any(),adminController.postHomePage);
router.post("/work-add", upload.any(),adminController.postWorkAddPage)
router.post("/work-update", upload.any(),adminController.postWorkUpdate)
router.post('/blog-add',upload.any(), adminController.postBlogAdd);
router.post('/blog-update', upload.any(),adminController.postBlogUpdate);
router.post('/about-update', upload.any(),adminController.postAboutUpdate);
router.post('/footer-update', upload.any(),adminController.postFooterUpdate);
router.post('/login', adminController.postLogin);
router.post('/register', adminController.postRegister);











module.exports = router;