const nodemailer = require("nodemailer");
require("dotenv").config();

const mail = async (message, email) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: '"'+email+'" <foo@example.com>',
      to: ["ahmetselimboz46@gmail.com"],
      subject: "Website Notification",
      text: "Notification!!",
    };
    mailOptions.html = message;
    await transporter.sendMail(mailOptions);

    
  } catch (error) {}
};
module.exports = mail;
