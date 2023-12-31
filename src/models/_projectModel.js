const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const buySchema = new Schema({ name: String, url: String, linkPrice: String });
const projectSchema = new Schema(
  {
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
    tag: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },

    text: {
      type: String,
      trim: true,
    },

    date: {
      type: String,
      trim: true,
    },

    lang: {
      type: String,
      trim: true,
    },

    link: {
      type: String,
      trim: true,
    },

    desc: {
      type: String,
      trim: true,
    },
  },
  { collection: "project", timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
