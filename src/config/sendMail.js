const nodemailer = require("nodemailer");
require("dotenv").config();

const mail = async (message, email) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io",
      port: 587,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: ["ahmetselimboz46@gmail.com"],
      subject: "Website Notification",
      text: "Notification!!",
    };
    mailOptions.html = message;
    const result = await transporter.sendMail(mailOptions);

  } catch (error) {
    console.log("sendMail Error: " + error);
  }
};
module.exports = mail;
