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
const passport = require("passport");
require("../config/passport_local")(passport);
const bcrypt = require("bcryptjs");
const uploadFile = require("../config/multer_config");
const fs = require("fs");
const path = require("path");
const { base64ToImage, RemoveImage } = require("../config/imgto64");
var isBase64 = require("is-base64");

/////////////////////////HOMEPAGE//////////////////////////////////////
const getHomePage = async (req, res, next) => {
  const result = await Home.findOne();
  //console.log(req.protocol + "......." +req.hostname);
  if (!result) {
    res.redirect("/");
  } else {
    res.render("./ad_index", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Home Page",
      result: result,
    });
  }
};

/////////////////////////////PROJECT//////////////////////////////////

const getWorkPage = async (req, res, next) => {
  const ress = [];
  const result = await Work.find({}).sort({ createdAt: "desc" });

  if (!result) {
    res.render("./ad_work", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Work Page",
      result: ress,
    });
  } else {
    res.render("./ad_work", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Work Page",
      result: result,
    });
  }
};

const getWorkAddPage = async (req, res, next) => {
  res.render("./ad_work-add", {
    layout: "./layouts/_ad_layouts.ejs",
    title: "Admin | Work Page",
  });
};
const getWorkUpdatePage = async (req, res, next) => {
  if (!req.params.id) {
    res.redirect("/");
  } else {
    const result = await Work.findById(req.params.id);

    res.render("./ad_work-update", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Work Page",
      result: result,
    });
  }
};
const getWorkDelete = async (req, res, next) => {
  if (!req.params) {
    res.redirect("/homepage");
  } else {
    const result = await Work.findByIdAndDelete(req.params.id);

    RemoveImage("Work_"+result.name+".jpeg");
    res.redirect("/work");
  }
};
/////////////////////////////EXPERIENCE////////////////////////////////

const getExpPage = async (req, res, next) => {
  const ress = [];
  const result = await Exp.find({}).sort({ createdAt: "desc" });

  if (!result) {
    res.render("./ad_experience", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Experience Page",
      result: ress,
    });
  } else {
    res.render("./ad_experience", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Experience Page",
      result: result,
    });
  }
};

const getExpAddPage = async (req, res, next) => {
  res.render("./ad_experience-add", {
    layout: "./layouts/_ad_layouts.ejs",
    title: "Admin | Experience Page",
  });
};
const getExpUpdatePage = async (req, res, next) => {
  if (!req.params.id) {
    res.redirect("/");
  } else {
    const result = await Exp.findById(req.params.id);

    res.render("./ad_experience-update", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Experience Page",
      result: result,
    });
  }
};
const getExpDelete = async (req, res, next) => {
  if (!req.params) {
    res.redirect("/homepage");
  } else {
    const result = await Exp.findByIdAndDelete(req.params.id);
    RemoveImage("Exp_"+result.name+".jpeg");
    res.redirect("/exp");
  }
};

/////////////////////////////REFERENCE//////////////////////////////////

const getRefPage = async (req, res, next) => {
  const ress = [];
  const result = await Ref.find({}).sort({ createdAt: "desc" });

  if (!result) {
    res.render("./ad_reference", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Reference Page",
      result: ress,
    });
  } else {
    res.render("./ad_reference", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Reference Page",
      result: result,
    });
  }
};

const getRefAddPage = async (req, res, next) => {
  res.render("./ad_reference-add", {
    layout: "./layouts/_ad_layouts.ejs",
    title: "Admin | Reference Page",
  });
};

const getRefUpdatePage = async (req, res, next) => {
  if (!req.params.id) {
    res.redirect("/");
  } else {
    const result = await Ref.findById(req.params.id);

    res.render("./ad_reference-update", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Reference Page",
      result: result,
    });
  }
};

const getRefDelete = async (req, res, next) => {
  if (!req.params) {
    res.redirect("/homepage");
  } else {
    const result = await Ref.findByIdAndDelete(req.params.id);
    RemoveImage("Ref_"+result.name+".jpeg");
    res.redirect("/ref");
  }
};

/////////////////////////////SKILLS//////////////////////////////////

const getSkillsPage = async (req, res, next) => {
  const ress = [];
  const result = await Skill.find({}).sort({ createdAt: "desc" });

  if (!result) {
    res.render("./ad_skill", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Skills Page",
      result: ress,
    });
  } else {
    res.render("./ad_skill", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Skills Page",
      result: result,
    });
  }
};

const getSkillsAddPage = async (req, res, next) => {
  res.render("./ad_skill-add", {
    layout: "./layouts/_ad_layouts.ejs",
    title: "Admin | Skills Page",
  });
};

const getSkillsUpdatePage = async (req, res, next) => {
  if (!req.params.id) {
    res.redirect("/homepage");
  } else {
    const result = await Skill.findById(req.params.id);

    res.render("./ad_skill-update", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Skills Page",
      result: result,
    });
  }
};

const getSkillsDelete = async (req, res, next) => {
  if (!req.params) {
    res.redirect("/homepage");
  } else {
    await Skill.findByIdAndDelete(req.params.id);
    res.redirect("/skills");
  }
};

/////////////////////////////BLOG/////////////////////////////////////

const getBlogPage = async (req, res, next) => {
  const ress = [];
  const result = await Blog.find({}).sort({ createdAt: "desc" });

  if (!result) {
    res.render("./ad_blog", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Blog Page",
      result: ress,
    });
  } else {
    res.render("./ad_blog", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Blog Page",
      result: result,
    });
  }
};

const getBlogAddPage = async (req, res, next) => {
  res.render("./ad_blog-add", {
    layout: "./layouts/_ad_layouts.ejs",
    title: "Admin | Blog Page",
  });
};

const getBlogUpdatePage = async (req, res, next) => {
  if (!req.params.id) {
    res.redirect("/");
  } else {
    var tags = [];
    const result = await Blog.findById(req.params.id);
    for (let index = 0; index < result.tags.length; index++) {
      tags.push(result.tags[index].tagName);
    }

    res.render("./ad_blog-update", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Blog Page",
      result: result,
      tags: tags,
    });
  }
};
const getBlogDelete = async (req, res, next) => {
  if (!req.params) {
    res.redirect("/homepage");
  } else {
    const result = await Blog.findByIdAndDelete(req.params.id);
    RemoveImage("Blog_"+result.title.substring(0,8)+".jpeg");
    res.redirect("/blog");
  }
};

/////////////////////////////ABOUT/////////////////////////////////////

const getAboutPage = async (req, res, next) => {
  const result = await About.findOne();
  if (!result) {
    res.redirect("/");
  } else {
    res.render("./ad_about", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | About Page",
      result: result,
    });
  }
};

/////////////////////////////CONTACT//////////////////////////////////

const getContactPage = async (req, res, next) => {
  const result = await Contact.find({});
  if (!result) {
    res.redirect("/");
  } else {
    res.render("./ad_contact", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Contact Page",
      result: result,
    });
  }
};
const getContactDelete = async (req, res, next) => {
  if (!req.params) {
    res.redirect("/homepage");
  } else {
    await Contact.findByIdAndDelete(req.params.id);
    res.redirect("/contact");
  }
};

/////////////////////////////FOOTER//////////////////////////////////

const getFooterPage = async (req, res, next) => {
  const result = await Footer.findOne();

  if (!result) {
    res.redirect("/");
  } else {
    res.render("./ad_footer", {
      layout: "./layouts/_ad_layouts.ejs",
      title: "Admin | Footer Page",
      result: result,
    });
  }
};

////////////////////LOGIN/////////////////////////////

const getLogin = async (req, res, next) => {
  res.render("./login", {
    layout: false,
    title: "Admin | Login",
  });
};

//////////////////REGISTER///////////////////////////

const getRegister = async (req, res, next) => {
  res.render("./register", {
    layout: false,
    title: "Admin | Register",
  });
};

//=============POSTS=================================================

const postWorkAddPage = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/homepage");
  } else {
    const project = new Work();

    if (isBase64(req.body.mainImg, { allowMime: true })) {
      project.mainImg = await base64ToImage(
        req.body.mainImg,
        "Work_" + req.body.name + ".jpeg"
      );
    }

    project.tag = req.body.tag;
    project.name = req.body.name;
    project.text = req.body.text;
    project.date = req.body.date;
    project.lang = req.body.lang;
    project.link = req.body.link;
    project.desc = req.body.desc;

    project.save();
    res.redirect("/work");
  }
};
const postWorkUpdate = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/homepage");
  } else {
    var options = {
      mainImg: req.body.mainImg,
      tag: req.body.tag,
      name: req.body.name,
      text: req.body.text,
      date: req.body.date,
      lang: req.body.lang,
      link: req.body.link,
      desc: req.body.desc,
    };

    if (isBase64(req.body.mainImg, { allowMime: true })) {
      options.mainImg = await base64ToImage(
        req.body.mainImg,
        "Work_" + req.body.name + ".jpeg"
      );
    }

    await Work.findByIdAndUpdate(req.body.id, options);
    res.redirect("/work");
  }
};

//----------------------------------------------------------------

const postBlogAdd = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/homepage");
  } else {
    let tags = [];

    const values = JSON.parse(req.body.tags); // PARSE TAGS COMING IN FROM THE FRONT END
    //console.log(values[0]);
    for (let i = 0; i < values.length; i++) {
      tags[i] = values[i]["value"];
    }

    const blog = new Blog();

    if (isBase64(req.body.mainImg, { allowMime: true })) {
      blog.mainImg = await base64ToImage(
        req.body.mainImg,
        "Blog_" + req.body.title.substring(0, 8) + ".jpeg"
      );
    }

    blog.mainImg = req.body.mainImg;
    blog.title = req.body.title;
    blog.desc = req.body.desc;
    blog.content = req.body.content;
    blog.tags = tags.map((tag) => ({ tagName: tag }));
    blog.save();
    res.redirect("/blog");
  }
};

const postBlogUpdate = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/homepage");
  } else {
    let taglar = [];

    const values = JSON.parse(req.body.tags); // PARSE TAGS COMING IN FROM THE FRONT END
    //console.log(values[0]);
    for (let i = 0; i < values.length; i++) {
      taglar[i] = values[i]["value"];
    }

    var options = {
      mainImg: req.body.mainImg,
      content: req.body.content,
      title: req.body.title,
      desc: req.body.desc,
      tags: taglar.map((tag) => ({ tagName: tag })),
    };

    if (isBase64(req.body.mainImg, { allowMime: true })) {
      options.mainImg = await base64ToImage(
        req.body.mainImg,
        "Blog_" + req.body.title.substring(0, 8) + ".jpeg"
      );
    }

    await Blog.findByIdAndUpdate(req.body.id, options);
    res.redirect("/blog");
  }
};

//----------------------------------------------------------------

const postAboutUpdate = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/homepage");
  } else {
    var options = {
      desc1: req.body.desc1,
      desc2: req.body.desc2,
      desc3: req.body.desc3,
      mainImg: req.body.mainImg,
      sideImg1: req.body.sideImg1,
      sideImg2: req.body.sideImg2,
      sideImg3: req.body.sideImg3,
    };

    if (isBase64(req.body.mainImg, { allowMime: true })) {
      options.mainImg = await base64ToImage(
        req.body.mainImg,
        "About_MainImg.jpeg"
      );
    }

    if (isBase64(req.body.sideImg1, { allowMime: true })) {
      options.sideImg1 = await base64ToImage(
        req.body.sideImg1,
        "About_sideImg1.jpeg"
      );
    }
    if (isBase64(req.body.sideImg2, { allowMime: true })) {
      options.sideImg2 = await base64ToImage(
        req.body.sideImg2,
        "About_sideImg2.jpeg"
      );
    }
    if (isBase64(req.body.sideImg3, { allowMime: true })) {
      options.sideImg3 = await base64ToImage(
        req.body.sideImg3,
        "About_sideImg3.jpeg"
      );
    }

    await About.findByIdAndUpdate(req.body.id, options);
    res.redirect("/about");
  }
};

//----------------------------------------------------------------

const postFooterUpdate = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/homepage");
  } else {
    await Footer.findByIdAndUpdate(req.body.id, {
      title: req.body.title,
      instagramUrl: req.body.instagramUrl,
      TwitterUrl: req.body.TwitterUrl,
      linkedinUrl: req.body.linkedinUrl,
      mail: req.body.mail,
    });
    res.redirect("/footer");
  }
};

//----------------------------------------------------------------

const postLogin = async (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/homepage",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res, next);
};

const postRegister = async (req, res, next) => {
  console.log(req.body);
  try {
    const _user = await User.findOne({ username: req.body.username });

    if (_user) {
      res.redirect("/register");
    } else {
      const newUser = new User({
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, 10),
      });
      await newUser.save();
      console.log("Kullanici kaydedildi");
      res.redirect("/login");
    }
  } catch (err) {}
};

//----------------------------------------------------------------

const postHomePage = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/homepage");
  } else {
    //console.log(req.body.sideImg);

    var options = {
      sideImg: req.body.sideImg,
      profilImg: req.body.profilImg,

      mainText: req.body.mainText,
      card1: {
        title: req.body.card1Title,
        text: req.body.card1Text,
      },
      card2: {
        title: req.body.card2Title,
        text: req.body.card2Text,
      },
      card3: {
        title: req.body.card3Title,
        text: req.body.card3Text,
      },
      card4: {
        title: req.body.card4Title,
        text: req.body.card4Text,
      },
    };

    if (isBase64(req.body.sideImg, { allowMime: true })) {
      const sideImg = await base64ToImage(
        req.body.sideImg,
        "Home_Side_Img.jpeg"
      );

      options.sideImg = sideImg;
    }

    if (isBase64(req.body.profilImg, { allowMime: true })) {
      options.profilImg = await base64ToImage(
        req.body.profilImg,
        "Home_profilImg.jpeg"
      );
    }

    await Home.findByIdAndUpdate(req.body.id, options);
    res.redirect("/homepage");
  }
};

//----------------------------------------------------------------

const postRefAddPage = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/homepage");
  } else {
    const ref = new Ref();

    if (isBase64(req.body.mainImg, { allowMime: true })) {
      ref.mainImg = await base64ToImage(
        req.body.mainImg,
        "Ref_" + req.body.name + ".jpeg"
      );
    }

    ref.mainImg = req.body.mainImg;
    ref.name = req.body.name;
    ref.title = req.body.title;
    ref.text = req.body.text;

    ref.save();
    res.redirect("/ref");
  }
};

const postRefUpdate = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/homepage");
  } else {
    var options = {
      mainImg: req.body.mainImg,
      name: req.body.name,
      title: req.body.title,
      text: req.body.text,
    };

    if (isBase64(req.body.mainImg, { allowMime: true })) {
      options.mainImg = await base64ToImage(
        req.body.mainImg,
        "Ref_" + req.body.name + ".jpeg"
      );
    }

    await Ref.findByIdAndUpdate(req.body.id, options);
    res.redirect("/ref");
  }
};

//----------------------------------------------------------------

const postExpAddPage = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/homepage");
  } else {
    const exp = new Exp();

    exp.name = req.body.name;
    exp.tag = req.body.tag;
    exp.date = req.body.date;
    exp.desc = req.body.desc;

    if (isBase64(req.body.mainImg, { allowMime: true })) {
      exp.mainImg = await base64ToImage(
        req.body.mainImg,
        "Exp_" + req.body.name + ".jpeg"
      );
    }

    exp.save();
    res.redirect("/exp");
  }
};

const postExpUpdate = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/homepage");
  } else {
    var options = {
      name: req.body.name,
      tag: req.body.tag,
      date: req.body.date,
      desc: req.body.desc,
      mainImg: req.body.mainImg,
    };
    
    if (isBase64(req.body.mainImg, { allowMime: true })) {
      project.mainImg = await base64ToImage(
        req.body.mainImg,
        "Exp_" + req.body.name + ".jpeg"
      );
    }


    await Exp.findByIdAndUpdate(req.body.id, options);
    res.redirect("/exp");
  }
};

//----------------------------------------------------------------

const postSkillsAddPage = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/homepage");
  } else {
    const skill = new Skill();

    skill.name = req.body.name;
    skill.percent = req.body.percent;
    skill.save();
    res.redirect("/skills");
  }
};

const postSkillsUpdate = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/homepage");
  } else {
    var options = {
      name: req.body.name,
      percent: req.body.percent,
    };

    await Skill.findByIdAndUpdate(req.body.id, options);
    res.redirect("/skills");
  }
};

module.exports = {
  getHomePage,
  getWorkPage,
  getWorkAddPage,
  getWorkUpdatePage,
  getWorkDelete,
  getRefPage,
  getRefAddPage,
  getRefUpdatePage,
  getRefDelete,
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
  getLogin,
  getRegister,
  postLogin,
  postRegister,
  postHomePage,
  postRefAddPage,
  postRefUpdate,
  getExpPage,
  getExpAddPage,
  getExpUpdatePage,
  getExpDelete,
  postExpAddPage,
  postExpUpdate,
  getSkillsPage,
  getSkillsAddPage,
  getSkillsUpdatePage,
  getSkillsDelete,
  postSkillsAddPage,
  postSkillsUpdate,
};
