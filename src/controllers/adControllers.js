const Home = require("../models/_homeModel");
const About = require("../models/_aboutModel");
const Blog = require("../models/_blogModel");
const Contact = require("../models/_contactModel");
const Footer = require("../models/_footerModel");
const Work = require("../models/_projectModel");

/////////////////////////HOMEPAGE//////////////////////////////////////
const getHomePage = async (req, res, next) => {
  const result = await Home.findOne();
  if (!result) {
    res.redirect("/");
  } else {
    res.render("./admin/ad_index", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Home Page",
      result: result,
    });
  }
};

/////////////////////////////WORK/////////////////////////////////////

const getWorkPage = async (req, res, next) => {
  const ress = [];
  const result = await Work.find({}).sort({ createdAt: "desc" });

  if (!result) {
    res.render("./admin/ad_work", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Work Page",
      result: ress,
    });
  } else {
    res.render("./admin/ad_work", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Work Page",
      result: result,
    });
  }
};

const getWorkAddPage = async (req, res, next) => {
  res.render("./admin/ad_work-add", {
    layout: "./admin/layouts/_ad_layouts.ejs",
    title: "Admin | Work Page",
  });
};
const getWorkUpdatePage = async (req, res, next) => {
  if (!req.params.id) {
    res.redirect("/");
  } else {
    const result = await Work.findById(req.params.id);

    res.render("./admin/ad_work-update", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Contact Page",
      result: result,
    });
  }
};
const getWorkDelete = async (req, res, next) => {
  if (!req.params) {
    res.redirect("/admin/homepage");
  } else {
    await Work.findByIdAndDelete(req.params.id);
    res.redirect("/admin/work");
  }
};

/////////////////////////////BLOG/////////////////////////////////////

const getBlogPage = async (req, res, next) => {
  const ress = [];
  const result = await Blog.find({}).sort({ createdAt: "desc" });

  if (!result) {
    res.render("./admin/ad_blog", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Blog Page",
      result: ress,
    });
  } else {
    res.render("./admin/ad_blog", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Blog Page",
      result: result,
    });
  }
};

const getBlogAddPage = async (req, res, next) => {
  res.render("./admin/ad_blog-add", {
    layout: "./admin/layouts/_ad_layouts.ejs",
    title: "Admin | Blog Page",
  });
};

const getBlogUpdatePage = async (req, res, next) => {
  if (!req.params.id) {
    res.redirect("/");
  } else {
    const result = await Blog.findById(req.params.id);

    res.render("./admin/ad_blog-update", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Blog Page",
      result: result,
    });
  }
};
const getBlogDelete = async (req, res, next) => {
  if (!req.params) {
    res.redirect("/admin/homepage");
  } else {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect("/admin/blog");
  }
};

/////////////////////////////ABOUT/////////////////////////////////////

const getAboutPage = async (req, res, next) => {
  const result = await About.findOne();
  if (!result) {
    res.redirect("/");
  } else {

    res.render("./admin/ad_about", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | About Page",
      result:result
    });
  }


};

/////////////////////////////CONTACT//////////////////////////////////

const getContactPage = async (req, res, next) => {

  const result = await Contact.find({});
  if (!result) {
    res.redirect("/");
  } else {

    res.render("./admin/ad_contact", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Contact Page",
      result:result
    });
  }


};
const getContactDelete = async (req, res, next) => {
  if (!req.params) {
    res.redirect("/admin/homepage");
  } else {
    await Contact.findByIdAndDelete(req.params.id);
    res.redirect("/admin/contact");
  }

};

/////////////////////////////FOOTER//////////////////////////////////

const getFooterPage =async (req, res, next) => {

  const result = await Footer.findOne();

  if (!result) {
    res.redirect("/");
  } else {

    res.render("./admin/ad_footer", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Footer Page",
      result:result
    });
  }


};

//=============POSTS=================================================

const postWorkAddPage = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/admin/homepage");
  } else {
    const project = new Work();
    project.mainImg.imgId = ".";

    project.tag = req.body.tag;
    project.name = req.body.name;
    project.text = req.body.text;
    project.date = req.body.date;
    project.lang = req.body.lang;
    project.link = req.body.link;
    project.desc = req.body.desc;
    project.save();
    res.redirect("/admin/work");
  }
};
const postWorkUpdate = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/admin/homepage");
  } else {
    await Work.findByIdAndUpdate(req.body.id, {
      mainImg: {
        imgId: ".",
      },

      tag: req.body.tag,
      name: req.body.name,
      text: req.body.text,
      date: req.body.date,
      lang: req.body.lang,
      link: req.body.link,
      desc: req.body.desc,
    });
    res.redirect("/admin/work");
  }
};

const postBlogAdd = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/admin/homepage");
  } else {
    const blog = new Blog();
    blog.tag1 = req.body.tag1;
    blog.tag2 = req.body.tag2;
    blog.tag3 = req.body.tag3;
    blog.shortText = req.body.shortText;
    blog.text1 = req.body.text1;
    blog.text2 = req.body.text2;
    blog.desc = req.body.desc;
    blog.mainImg.imgId = ".";
    blog.sideImg.imgId = ".";

    blog.save();
    res.redirect("/admin/blog");
  }
};

const postBlogUpdate = async (req, res, next) => {
 
  if (!req.body) {
    res.redirect("/admin/homepage");
  } else {
    await Blog.findByIdAndUpdate(req.body.id, {
      mainImg: {
        imgId: ".",
      },
      sideImg: {
        imgId: ".",
      },
      tag1: req.body.tag1,
      tag2: req.body.tag2,
      tag3: req.body.tag3,
      shortText: req.body.shortText,
      text1: req.body.text1,
      text2: req.body.text2,
      desc: req.body.desc,
    });
    res.redirect("/admin/blog");
  }
};

const postAboutUpdate = async (req, res, next) => {

  if (!req.body) {
    res.redirect("/admin/homepage");
  } else {
    await About.findByIdAndUpdate(req.body.id, {
      mainImg: {
        imgId: ".",
      },
      miniImg1: {
        imgId: ".",
      },
      miniImg2: {
        imgId: ".",
      },
      miniImg3: {
        imgId: ".",
      },
      text1: req.body.text1,
      text2: req.body.text2,
      text3: req.body.text3,

    });
    res.redirect("/admin/about");
  }
};

const postFooterUpdate = async (req, res, next) => {
  console.log(req.body);
  if (!req.body) {
    res.redirect("/admin/homepage");
  } else {
    await Footer.findByIdAndUpdate(req.body.id, {

      title: req.body.title,
      instagramUrl: req.body.instagramUrl,
      TwitterUrl: req.body.TwitterUrl,
      linkedinUrl: req.body.linkedinUrl,
      mail: req.body.mail,

    });
    res.redirect("/admin/footer");
  }
};

const random = async (req, res, next) => {};

module.exports = {
  getHomePage,
  getWorkPage,
  getWorkAddPage,
  getWorkUpdatePage,
  getWorkDelete,
  getBlogPage,
  getBlogAddPage,
  getBlogUpdatePage,
  getBlogDelete,
  getAboutPage,
  getContactPage,
  getContactDelete,
  getFooterPage,
  postWorkAddPage,
  postWorkUpdate,
  postBlogAdd,
  postBlogUpdate,
  postAboutUpdate,
  postFooterUpdate,
  random,
};
