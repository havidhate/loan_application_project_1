// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/error.middleware");

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

// App init
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static file serving
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/loan", require("./routes/loan.routes"));
app.use("/api/document", require("./routes/document.routes"));
app.use("/api/status", require("./routes/status.routes"));
app.use("/api/calendar", require("./routes/calendar.routes"));

// Error handler (should be last middleware)
app.use(errorHandler);

// Cron job for reminders
require("./utils/notifier");

// Server start
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
