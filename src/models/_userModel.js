const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const buySchema = new Schema({ name: String, url: String, linkPrice: String });
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
    },

    password: {
      type: String,
      trim: true,
    },
    language: { type: String, default: "EN" },
  },
  { collection: "User", timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
