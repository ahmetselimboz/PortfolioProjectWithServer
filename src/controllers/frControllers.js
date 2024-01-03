const Home = require("../models/_homeModel");
const About = require("../models/_aboutModel");
const Blog = require("../models/_blogModel");
const Contact = require("../models/_contactModel");
const Footer = require("../models/_footerModel");
const Work = require("../models/_projectModel");
const User = require("../models/_userModel");


const getHomePage = async (req, res, next) => {

  const result = await Home.findOne();

  res.render("./frontend/index", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: "Ahmet Selim Boz",
    result:result
  });
};

const getWorkPage = async (req, res, next) => {

  res.render("./frontend/work", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: "Work"
  });
};
const getBlogPage = async (req, res, next) => {

  res.render("./frontend/blog", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: "Blog"
  });
};
const getAboutPage = async (req, res, next) => {

  res.render("./frontend/about", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: "About"
  });
};
const getContactPage = async (req, res, next) => {

  res.render("./frontend/contact", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: "Contact"
  });
};





module.exports = {
  getHomePage,
  getWorkPage,
  getBlogPage,
  getAboutPage,
  getContactPage
};