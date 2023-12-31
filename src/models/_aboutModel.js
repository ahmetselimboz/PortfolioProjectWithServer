const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const buySchema = new Schema({ name: String, url: String, linkPrice: String });
const aboutSchema = new Schema(
  {
    text1: {
      type: String,
      
    },
    text2: {
      type: String,

    },

    text3: {
      type: String,
     
    },

    mainImg: {
      imgId: {
        type: String,
        trim: true,
      },
      imgName: {
        type: String,
        default: "defaultUser.png",
      },
    },
    miniImg1: {
      imgId: {
        type: String,
        trim: true,
      },
      imgName: {
        type: String,
        default: "defaultUser.png",
      },
    },
    miniImg2: {
      imgId: {
        type: String,
        trim: true,
      },
      imgName: {
        type: String,
        default: "defaultUser.png",
      },
    },
    miniImg3: {
      imgId: {
        type: String,
        trim: true,
      },
      imgName: {
        type: String,
        default: "defaultUser.png",
      },
    },



   
  },
  { collection: "about", timestamps: true }
);

const About = mongoose.model("About", aboutSchema);

module.exports = About;
