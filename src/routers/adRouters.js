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



router.get('/ref', isAuthenticated.oturumAcilmis,adminController.getRefPage);
router.get('/ref-add', isAuthenticated.oturumAcilmis,adminController.getRefAddPage);
router.get('/ref-update/:id',adminController.getRefUpdatePage);
router.get('/ref-delete/:id', adminController.getRefDelete);
router.get('/exp', isAuthenticated.oturumAcilmis,adminController.getExpPage);
router.get('/exp-add', isAuthenticated.oturumAcilmis,adminController.getExpAddPage);
router.get('/exp-update/:id',adminController.getExpUpdatePage);
router.get('/exp-delete/:id', adminController.getExpDelete);
router.get('/skills', isAuthenticated.oturumAcilmis,adminController.getSkillsPage);
router.get('/skills-add', isAuthenticated.oturumAcilmis,adminController.getSkillsAddPage);
router.get('/skills-update/:id',adminController.getSkillsUpdatePage);
router.get('/skills-delete/:id', adminController.getSkillsDelete);



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



router.post('/homepage',multerConfig.any(),adminController.postHomePage);
router.post("/work-add", multerConfig.any(),adminController.postWorkAddPage)
router.post("/work-update", multerConfig.any(),adminController.postWorkUpdate)
router.post("/ref-add", multerConfig.any(),adminController.postRefAddPage)
router.post("/ref-update", multerConfig.any(),adminController.postRefUpdate)
router.post("/exp-add", multerConfig.any(),adminController.postExpAddPage)
router.post("/exp-update", multerConfig.any(),adminController.postExpUpdate)
router.post("/skills-add", multerConfig.any(),adminController.postSkillsAddPage)
router.post("/skills-update", multerConfig.any(),adminController.postSkillsUpdate)
router.post('/blog-add',multerConfig.any(), adminController.postBlogAdd);
router.post('/blog-update', multerConfig.any(),adminController.postBlogUpdate);
router.post('/about-update',adminController.postAboutUpdate);
router.post('/footer-update',adminController.postFooterUpdate);
router.post('/login', adminController.postLogin);
router.post('/register', adminController.postRegister);











module.exports = router;