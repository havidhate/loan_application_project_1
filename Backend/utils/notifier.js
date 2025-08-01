// utils/notifier.js
const cron = require("node-cron");
const Repayment = require("../models/Repayment");
const User = require("../models/User");
const sendEmail = require("./email.service");
const { format } = require("date-fns");

// Runs every day at 8 AM
cron.schedule("0 8 * * *", async () => {
  console.log("🔔 Running daily repayment reminder job...");

  const today = new Date().toISOString().split("T")[0];

  try {
    const dueRepayments = await Repayment.find({
      dueDate: { $lte: today },
      status: { $ne: "paid" },
    }).populate("user");

    for (let payment of dueRepayments) {
      await sendEmail({
        to: payment.user.email,
        subject: "⏰ Loan Repayment Reminder",
        html: `
          <p>Dear ${payment.user.name},</p>
          <p>Your repayment of <strong>₹${payment.amount}</strong> is due on <strong>${format(new Date(payment.dueDate), "dd MMM yyyy")}</strong>.</p>
          <p>Please log in to your account to complete the payment.</p>
          <br/>
          <p>Thank you,<br/>Loan Application System</p>
        `,
      });
    }

    console.log("✅ Reminders sent:", dueRepayments.length);
  } catch (err) {
    console.error("❌ Error in reminder job:", err.message);
  }
});
