const getHomePage = (req, res, next) => {

    res.render("./admin/ad_index", {
      layout: "./admin/layouts/_ad_layouts.ejs",
     
    });
  };
  
  
  
  
  
  module.exports = {
    getHomePage,
  
  };