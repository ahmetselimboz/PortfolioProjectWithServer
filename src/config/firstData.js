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
    about.desc1 = ".";
    about.mainImg = ".";
    about.desc2 = ".";
    about.sideImg1 = ".";
    about.sideImg2 = ".";
    about.sideImg3 = ".";
    about.desc3 = ".";



    about.save();
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
