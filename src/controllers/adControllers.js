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
const { base64ToImage } = require("../config/imgto64");

function isBase64(link) {
  const regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}?={2}?)$/;
  return regex.test(link);
}
/////////////////////////HOMEPAGE//////////////////////////////////////
const getHomePage = async (req, res, next) => {
  const result = await Home.findOne();
  //console.log(req.protocol + "......." +req.hostname);
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

/////////////////////////////PROJECT//////////////////////////////////

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
      title: "Admin | Work Page",
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
/////////////////////////////EXPERIENCE////////////////////////////////

const getExpPage = async (req, res, next) => {
  const ress = [];
  const result = await Exp.find({}).sort({ createdAt: "desc" });

  if (!result) {
    res.render("./admin/ad_experience", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Experience Page",
      result: ress,
    });
  } else {
    res.render("./admin/ad_experience", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Experience Page",
      result: result,
    });
  }
};

const getExpAddPage = async (req, res, next) => {
  res.render("./admin/ad_experience-add", {
    layout: "./admin/layouts/_ad_layouts.ejs",
    title: "Admin | Experience Page",
  });
};
const getExpUpdatePage = async (req, res, next) => {
  if (!req.params.id) {
    res.redirect("/");
  } else {
    const result = await Exp.findById(req.params.id);

    res.render("./admin/ad_experience-update", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Experience Page",
      result: result,
    });
  }
};
const getExpDelete = async (req, res, next) => {
  if (!req.params) {
    res.redirect("/admin/homepage");
  } else {
    await Exp.findByIdAndDelete(req.params.id);
    res.redirect("/admin/exp");
  }
};

/////////////////////////////REFERENCE//////////////////////////////////

const getRefPage = async (req, res, next) => {
  const ress = [];
  const result = await Ref.find({}).sort({ createdAt: "desc" });

  if (!result) {
    res.render("./admin/ad_reference", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Reference Page",
      result: ress,
    });
  } else {
    res.render("./admin/ad_reference", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Reference Page",
      result: result,
    });
  }
};

const getRefAddPage = async (req, res, next) => {
  res.render("./admin/ad_reference-add", {
    layout: "./admin/layouts/_ad_layouts.ejs",
    title: "Admin | Reference Page",
  });
};

const getRefUpdatePage = async (req, res, next) => {
  if (!req.params.id) {
    res.redirect("/");
  } else {
    const result = await Ref.findById(req.params.id);

    res.render("./admin/ad_reference-update", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Reference Page",
      result: result,
    });
  }
};

const getRefDelete = async (req, res, next) => {
  if (!req.params) {
    res.redirect("/admin/homepage");
  } else {
    await Ref.findByIdAndDelete(req.params.id);
    res.redirect("/admin/ref");
  }
};

/////////////////////////////SKILLS//////////////////////////////////

const getSkillsPage = async (req, res, next) => {
  const ress = [];
  const result = await Skill.find({}).sort({ createdAt: "desc" });

  if (!result) {
    res.render("./admin/ad_skill", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Skills Page",
      result: ress,
    });
  } else {
    res.render("./admin/ad_skill", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Skills Page",
      result: result,
    });
  }
};

const getSkillsAddPage = async (req, res, next) => {
  res.render("./admin/ad_skill-add", {
    layout: "./admin/layouts/_ad_layouts.ejs",
    title: "Admin | Skills Page",
  });
};

const getSkillsUpdatePage = async (req, res, next) => {
  if (!req.params.id) {
    res.redirect("/admin/homepage");
  } else {
    const result = await Skill.findById(req.params.id);

    res.render("./admin/ad_skill-update", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Skills Page",
      result: result,
    });
  }
};

const getSkillsDelete = async (req, res, next) => {
  if (!req.params) {
    res.redirect("/admin/homepage");
  } else {
    await Skill.findByIdAndDelete(req.params.id);
    res.redirect("/admin/skills");
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
    var tags = [];
    const result = await Blog.findById(req.params.id);
    for (let index = 0; index < result.tags.length; index++) {
      tags.push(result.tags[index].tagName);
    }

    res.render("./admin/ad_blog-update", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Blog Page",
      result: result,
      tags: tags,
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
    res.render("./admin/ad_contact", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Contact Page",
      result: result,
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

const getFooterPage = async (req, res, next) => {
  const result = await Footer.findOne();

  if (!result) {
    res.redirect("/");
  } else {
    res.render("./admin/ad_footer", {
      layout: "./admin/layouts/_ad_layouts.ejs",
      title: "Admin | Footer Page",
      result: result,
    });
  }
};

////////////////////LOGIN/////////////////////////////

const getLogin = async (req, res, next) => {
  res.render("./admin/login", {
    layout: false,
    title: "Admin | Login",
  });
};

//////////////////REGISTER///////////////////////////

const getRegister = async (req, res, next) => {
  res.render("./admin/register", {
    layout: false,
    title: "Admin | Register",
  });
};

//=============POSTS=================================================

const postWorkAddPage = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/admin/homepage");
  } else {
    const project = new Work();

    project.mainImg = req.body.mainImg;
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

    await Work.findByIdAndUpdate(req.body.id, options);
    res.redirect("/admin/work");
  }
};

//----------------------------------------------------------------

const postBlogAdd = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/admin/homepage");
  } else {
    let tags = [];

    const values = JSON.parse(req.body.tags); // PARSE TAGS COMING IN FROM THE FRONT END
    //console.log(values[0]);
    for (let i = 0; i < values.length; i++) {
      tags[i] = values[i]["value"];
    }

    const blog = new Blog();
    blog.mainImg = req.body.mainImg;
    blog.title = req.body.title;
    blog.desc = req.body.desc;
    blog.content = req.body.content;
    blog.tags = tags.map((tag) => ({ tagName: tag }));
    blog.save();
    res.redirect("/admin/blog");
  }
};

const postBlogUpdate = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/admin/homepage");
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

    await Blog.findByIdAndUpdate(req.body.id, options);
    res.redirect("/admin/blog");
  }
};

//----------------------------------------------------------------

const postAboutUpdate = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/admin/homepage");
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

    await About.findByIdAndUpdate(req.body.id, options);
    res.redirect("/admin/about");
  }
};

//----------------------------------------------------------------

const postFooterUpdate = async (req, res, next) => {
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

//----------------------------------------------------------------

const postLogin = async (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/admin/homepage",
    failureRedirect: "/admin/login",
    failureFlash: true,
  })(req, res, next);
};

const postRegister = async (req, res, next) => {
  console.log(req.body);
  try {
    const _user = await User.findOne({ username: req.body.username });

    if (_user) {
      res.redirect("/admin/register");
    } else {
      const newUser = new User({
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, 10),
      });
      await newUser.save();
      console.log("Kullanici kaydedildi");
      res.redirect("/admin/login");
    }
  } catch (err) {}
};

//----------------------------------------------------------------

const postHomePage = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/admin/homepage");
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

    if (isBase64(req.body.sideImg)) {
      console.log(req.body.sideImg);
      const sideImg = await base64ToImage(
        req.body.sideImg,
        "Home_Side_Img.jpeg"
      );
     
      options.sideImg = sideImg;
    }

    if (isBase64(req.body.profilImg)) {
      options.profilImg = await base64ToImage(
        req.body.profilImg,
        "Home_profilImg.jpeg"
      );
    }

    await Home.findByIdAndUpdate(req.body.id, options);
    res.redirect("/admin/homepage");
  }
};

//----------------------------------------------------------------

const postRefAddPage = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/admin/homepage");
  } else {
    const ref = new Ref();

    ref.mainImg = req.body.mainImg;
    ref.name = req.body.name;
    ref.title = req.body.title;
    ref.text = req.body.text;

    ref.save();
    res.redirect("/admin/ref");
  }
};

const postRefUpdate = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/admin/homepage");
  } else {
    var options = {
      mainImg: req.body.mainImg,
      name: req.body.name,
      title: req.body.title,
      text: req.body.text,
    };

    await Ref.findByIdAndUpdate(req.body.id, options);
    res.redirect("/admin/ref");
  }
};

//----------------------------------------------------------------

const postExpAddPage = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/admin/homepage");
  } else {
    console.log(req.body);
    const exp = new Exp();

    exp.name = req.body.name;
    exp.tag = req.body.tag;
    exp.date = req.body.date;
    exp.desc = req.body.desc;
    exp.mainImg = req.body.mainImg;

    exp.save();
    res.redirect("/admin/exp");
  }
};

const postExpUpdate = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/admin/homepage");
  } else {
    var options = {
      name: req.body.name,
      tag: req.body.tag,
      date: req.body.date,
      desc: req.body.desc,
      mainImg: req.body.mainImg,
    };

    await Exp.findByIdAndUpdate(req.body.id, options);
    res.redirect("/admin/exp");
  }
};

//----------------------------------------------------------------

const postSkillsAddPage = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/admin/homepage");
  } else {
    const skill = new Skill();

    skill.name = req.body.name;
    skill.percent = req.body.percent;
    skill.save();
    res.redirect("/admin/skills");
  }
};

const postSkillsUpdate = async (req, res, next) => {
  if (!req.body) {
    res.redirect("/admin/homepage");
  } else {
    var options = {
      name: req.body.name,
      percent: req.body.percent,
    };

    await Skill.findByIdAndUpdate(req.body.id, options);
    res.redirect("/admin/skills");
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
