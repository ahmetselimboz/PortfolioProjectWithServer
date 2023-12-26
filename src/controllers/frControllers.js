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





module.exports = {
  getHomePage,

};