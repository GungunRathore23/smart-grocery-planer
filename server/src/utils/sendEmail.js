// const nodemailer = require("nodemailer");

// const sendEmail = async (to, subject, html) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASSWORD,
//       },
//     });

//     await transporter.sendMail({
//       from: `"Smarter Grocery Planner" <${process.env.SMTP_USER}>`,
//       to,
//       subject,
//       html,
//     });

//     console.log("Email sent successfully to", to);
//   } catch (error) {
//     console.error("Email sending failed:", error.message);
//     throw new Error("Email sending failed");
//   }
// };

// module.exports = sendEmail;

const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, html) => {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("❌ SMTP credentials missing!");
      throw new Error("SMTP configuration missing");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Smarter Grocery Planner" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);

    console.log(`✅ OTP Email sent to: ${to}`);
    return true;
  } catch (error) {
    console.error("❌ Email send error:", error.message);
    throw new Error("Email sending failed");
  }
};

module.exports = sendEmail;
