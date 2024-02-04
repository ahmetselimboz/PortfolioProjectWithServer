const mongoose = require("mongoose");
const dataURI = require("../config/defaultImage");
const Schema = mongoose.Schema;
const expSchema = new Schema(
  {
    tag: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },

    date: {
      type: String,
      trim: true,
    },
    desc: {
      type: String,
      trim: true,
    },
    mainImg: {
      type: String,
      trim: true,
      default: dataURI
    }

    
  },
  { collection: "experience", timestamps: true }
);

const Exp = mongoose.model("Experience", expSchema);

module.exports = Exp;
