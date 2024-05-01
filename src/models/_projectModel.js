const mongoose = require("mongoose");
const dataURI = require("../config/defaultImage");
const Schema = mongoose.Schema;
const projectSchema = new Schema(
  {
    mainImg: {
      type: String,
      trim: true,
      default: dataURI
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
  { collection: "projects", timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
