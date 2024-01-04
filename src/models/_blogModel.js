const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const buySchema = new Schema({ name: String, url: String, linkPrice: String });
const blogSchema = new Schema(
  {
    tag1: {
      type: String,
      trim: true,
    },
    tag2: {
      type: String,
      trim: true,
    },

    tag3: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    shortText: {
      type: String,
      trim: true,
    },

   

    desc1: {
      type: String,
      trim: true,
    },

    desc2: {
      type: String,
      trim: true,
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
  },
  { collection: "blog", timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
