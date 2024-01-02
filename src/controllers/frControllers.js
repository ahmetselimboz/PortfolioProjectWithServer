//const About = require("../model/_aboutModel");

// const passport = require("passport");
// require("../config/passport_local")(passport);
//const { validationResult } = require("express-validator");
//const bcrypt = require("bcryptjs");


const getHomePage = async (req, res, next) => {

  res.render("./frontend/index", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: "Ahmet Selim Boz"
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