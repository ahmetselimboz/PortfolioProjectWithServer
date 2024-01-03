const Home = require("../models/_homeModel");
const About = require("../models/_aboutModel");
const Blog = require("../models/_blogModel");
const Contact = require("../models/_contactModel");
const Footer = require("../models/_footerModel");
const Work = require("../models/_projectModel");
const User = require("../models/_userModel");


const getHomePage = async (req, res, next) => {

  const result = await Home.findOne();
  const resultWork = await Work.find({});
  const resultBlog = await Blog.find({});
  const resultFooter = await Footer.findOne();

  res.render("./frontend/index", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: "Ahmet Selim Boz",
    result:result,
    resultWork:resultWork,
    resultBlog:resultBlog,
    resultFooter:resultFooter
  });
};

const getWorkPage = async (req, res, next) => {
  const resultFooter = await Footer.findOne();

  res.render("./frontend/work", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: "Work",
    resultFooter:resultFooter
  });
};
const getBlogPage = async (req, res, next) => {
  const resultFooter = await Footer.findOne();
  res.render("./frontend/blog", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: "Blog",
    resultFooter:resultFooter
  });
};
const getAboutPage = async (req, res, next) => {
  const resultFooter = await Footer.findOne();
  res.render("./frontend/about", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: "About",
    resultFooter:resultFooter
  });
};
const getContactPage = async (req, res, next) => {
  const resultFooter = await Footer.findOne();
  res.render("./frontend/contact", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: "Contact",
    resultFooter:resultFooter
  });
};





module.exports = {
  getHomePage,
  getWorkPage,
  getBlogPage,
  getAboutPage,
  getContactPage
};