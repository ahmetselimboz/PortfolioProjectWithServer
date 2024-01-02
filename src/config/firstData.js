const Home = require("../models/_homeModel");
const About = require("../models/_aboutModel");
const Blog = require("../models/_blogModel");
const Contact = require("../models/_contactModel");
const Project = require("../models/_projectModel");
const Footer = require("../models/_footerModel");

data();

async function data() {
  const resultHome = await Home.findOne();
  const resultAbout = await About.findOne();
  const resultBlog = await Blog.findOne();
  const resultContact = await Contact.findOne();
  const resultFooter = await Footer.findOne();
  const resultProject = await Project.findOne();

  if (!resultHome) {
    const home = new Home();
    home.profilImg.imgId = ".";

    home.sideImg.imgId = ".";

    home.mainText = ".";
    home.card1.title = ".";
    home.card1.text = ".";
    home.card2.title = ".";
    home.card3.text = ".";
    home.card3.title = ".";
    home.card3.text = ".";
    home.card4.title = ".";
    home.card4.text = ".";
    home.save();
  }

  if (!resultAbout) {
    const about = new About();
    about.text1 = ".";
    about.text2 = ".";
    about.text3 = ".";
    about.mainImg.imgId = ".";

    about.miniImg1.imgId = ".";

    about.miniImg2.imgId = ".";

    about.miniImg3.imgId = ".";

    about.save();
  }
  if (!resultBlog) {
    const blog = new Blog();
    blog.tag1 = ".";
    blog.tag2 = ".";
    blog.tag3 = ".";
    blog.shortText = ".";
    blog.text1 = ".";
    blog.text2 = ".";
    blog.desc = ".";
    blog.mainImg.imgId = ".";

    blog.sideImg.imgId = ".";

    blog.save();
  }
  if (!resultContact) {
    const contact = new Contact();
    contact.name = ".";
    contact.email = ".";
    contact.message = ".";
    contact.save();
  }
  if (!resultFooter) {
    const footer = new Footer();
    footer.title = ".";
    footer.instagramUrl = ".";
    footer.TwitterUrl = ".";
    footer.linkedinUrl = ".";
    footer.mail = ".";
    footer.save();
  }
  if (!resultProject) {
    const project = new Project();
    project.mainImg.imgId = ".";

    project.tag = ".";
    project.name = ".";
    project.text = ".";
    project.date = ".";
    project.lang = ".";
    project.link = ".";
    project.desc = ".";
    project.save();
    console.log("Datas create");
  }
}
