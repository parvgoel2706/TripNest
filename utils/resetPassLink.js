const nodemailer = require("nodemailer");

module.exports.auth = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user:process.env.NODEMAILER_EMAIL,
    pass:process.env.NODEMAILER_PASSWORD,
  },
});

module.exports.receiver = {
  from: process.env.NODEMAILER_EMAIL,
  to: "",
  subject: "Password reset link",
};

// auth.sendMail(receiver, (error, emailResponse) => {
//   if (error) throw error;
//   console.log("success!");
//   response.end();
// });
