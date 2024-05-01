const mongoose = require("mongoose");
const dataURI = require("../config/defaultImage");
const Schema = mongoose.Schema;
// const buySchema = new Schema({ name: String, url: String, linkPrice: String });
const refSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },

    title: {
      type: String,
      trim: true,
    },
    text: {
      type: String,
      trim: true,
    },
    mainImg: {
      type: String,
      trim: true,
      default: dataURI
    },
  },
  { collection: "references", timestamps: true }
);

const Ref = mongoose.model("Reference", refSchema);

module.exports = Ref;
