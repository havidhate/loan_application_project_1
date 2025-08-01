// routes/document.routes.js
const express = require("express");
const router = express.Router();
const {
  uploadDocument,
  getUserDocuments,
  updateDocumentStatus,
} = require("../controllers/document.controller");

const { verifyToken } = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload.middleware");

// @route POST /api/document/upload
router.post("/upload", verifyToken, upload.single("file"), uploadDocument);

// @route GET /api/document/
router.get("/", verifyToken, getUserDocuments);

// @route PATCH /api/document/:id/status
router.patch("/:id/status", verifyToken, updateDocumentStatus);

module.exports = router;
