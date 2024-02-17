const Home = require("../models/_homeModel");
const About = require("../models/_aboutModel");
const Blog = require("../models/_blogModel");
const Contact = require("../models/_contactModel");
const Footer = require("../models/_footerModel");
const Work = require("../models/_projectModel");
const User = require("../models/_userModel");
const Ref = require("../models/_referenceModel");
const Skill = require("../models/_skillsModel");
const Exp = require("../models/_experienceModel");
const mongoose = require("mongoose");
const mail = require("../config/sendMail");

const getHomePage = async (req, res, next) => {
  const result = await Home.findOne();
  const resultWork = await Work.find({}).sort({ createdAt: "desc" }).limit(4);
  const resultBlog = await Blog.find({}).sort({ createdAt: "desc" }).limit(4);
  const resultRef = await Ref.find({}).sort({ createdAt: "desc" }).limit(3);
  const resultExp = await Exp.find({}).sort({ createdAt: "desc" }).limit(3);
  const resultFooter = await Footer.findOne();

  res.render("./frontend/index", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: "Ahmet Selim Boz",
    result: result,
    resultWork: resultWork,
    resultBlog: resultBlog,
    resultRef: resultRef,
    resultFooter: resultFooter,
    resultExp: resultExp,
  });
};

const getWorkPage = async (req, res, next) => {
  const resultFooter = await Footer.findOne();
  const resultWork = await Work.find({}).sort({ createdAt: "desc" });
  const resultRef = await Ref.find({}).sort({ createdAt: "desc" });
  const resultExp = await Exp.find({}).sort({ createdAt: "desc" });
  const resultSkill = await Skill.find({}).sort({ percent: "desc" });

  res.render("./frontend/work", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: "Work",
    resultWork: resultWork,
    resultFooter: resultFooter,
    resultRef: resultRef,
    resultExp: resultExp,
    resultSkill: resultSkill,
  });
};

const getWorkDetailPage = async (req, res, next) => {
  const result = await Work.findById(req.params.id);
  const resultFooter = await Footer.findOne();

  res.render("./frontend/work-detail", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: result.name,
    result: result,
    resultFooter: resultFooter,
  });
};
const getBlogPage = async (req, res, next) => {
  const resultFooter = await Footer.findOne();
  const resultBlog = await Blog.find({}).sort({ createdAt: "desc" });

  res.render("./frontend/blog", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: "Blog",
    resultBlog: resultBlog,
    resultFooter: resultFooter,
  });
};
const getBlogDetailPage = async (req, res, next) => {
  const resultFooter = await Footer.findOne();
  const result = await Blog.findById(req.params.id);

  try {
    var data = await Blog.find({ _id: { $ne: req.params.id } }).limit(6);
  } catch (err) {
    console.error("Sorgu hatası:", err);
  }

  res.render("./frontend/blog-detail", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: "Blog",
    result: result,
    resultFooter: resultFooter,
    data: data,
  });
};
const getAboutPage = async (req, res, next) => {
  const resultFooter = await Footer.findOne();
  const resultAbout = await About.findOne();

  res.render("./frontend/about", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: "About",
    resultAbout: resultAbout,
    resultFooter: resultFooter,
  });
};
const getContactPage = async (req, res, next) => {
  const resultFooter = await Footer.findOne();
  res.render("./frontend/contact", {
    layout: "./frontend/layouts/_layouts.ejs",
    title: "Contact",
    resultFooter: resultFooter,
  });
};
const postContact = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/contact");
  } else {
    const contact = new Contact();
    contact.name = req.body.name;
    contact.email = req.body.email;
    contact.message = req.body.message;
    contact.save();
    mail("<h4>Name: "+req.body.name+"</h4>"  +"<h4>Email: "+req.body.email+"</h4>"  +  "<u>Message:</u><br/><p>" + req.body.message + "</p>", req.body.email)
    res.redirect("/homepage");
  }
};

module.exports = {
  getHomePage,
  getWorkPage,
  getBlogPage,
  getAboutPage,
  getContactPage,
  getWorkDetailPage,
  postContact,
  getBlogDetailPage,
};
