const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const buySchema = new Schema({ name: String, url: String, linkPrice: String });
const homeSchema = new Schema(
  {
    profilImg: {
      imgId: {
        type: String,
        trim: true,
      },
      imgName: {
        type: String,
        default: "defaultUser.png",
      },
    },
    sideImg: {
      imgId: {
        type: String,
        trim: true,
      },
      imgName: {
        type: String,
        default: "defaultUser.png",
      },
    },

    mainText: {
      type: String,
      trim: true,
    },
    card1: {
      title: {
        type: String,
        trim: true,
      },
      text: {
        type: String,
        trim: true,
      },
    },
    card2: {
      title: {
        type: String,
        trim: true,
      },
      text: {
        type: String,
        trim: true,
      },
    },
    card3: {
      title: {
        type: String,
        trim: true,
      },
      text: {
        type: String,
        trim: true,
      },
    },
    card4: {
      title: {
        type: String,
        trim: true,
      },
      text: {
        type: String,
        trim: true,
      },
    }
  },
  { collection: "home", timestamps: true }
);

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;
