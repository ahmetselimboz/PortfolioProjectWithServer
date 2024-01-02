const getHomePage = (req, res, next) => {
  res.render("./admin/ad_index", {
    layout: "./admin/layouts/_ad_layouts.ejs",
    title: "Admin | Home Page"
  });
};

const getWorkPage = (req, res, next) => {
  res.render("./admin/ad_work", {
    layout: "./admin/layouts/_ad_layouts.ejs",
    title: "Admin | Work Page"
  });
};

module.exports = {
  getHomePage,
  getWorkPage
};
