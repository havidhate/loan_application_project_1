require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendTestEmail() {
  try {
    await transporter.sendMail({
      from: `"Loan App" <${process.env.EMAIL_USER}>`,
      to: "gruhapatyagni@gmai.com", // change to your personal email
      subject: "✅ Test Email from Loan Application",
      html: "<h2>This is a test email sent via Brevo SMTP!</h2>",
    });

    console.log("✅ Test email sent successfully!");
  } catch (err) {
    console.error("❌ Failed to send test email:", err);
  }
}

sendTestEmail();
