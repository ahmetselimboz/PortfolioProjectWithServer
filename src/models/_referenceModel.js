const mongoose = require("mongoose");
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
  { collection: "reference", timestamps: true }
);

const Ref = mongoose.model("Reference", refSchema);

module.exports = Ref;
