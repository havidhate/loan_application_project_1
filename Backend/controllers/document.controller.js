// controllers/document.controller.js
const Document = require("../models/Document");
const path = require("path");

// @route POST /api/document/upload
// @desc  Upload a document
exports.uploadDocument = async (req, res) => {
  try {
    const { type, loanId } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const doc = new Document({
      user: req.user.id,
      loan: loanId,
      type,
      filePath: req.file.path,
    });

    await doc.save();

    res.status(201).json({ message: "Document uploaded successfully", doc });
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
};

// @route GET /api/document/
// @desc  Get all uploaded documents for user
exports.getUserDocuments = async (req, res) => {
  try {
    const docs = await Document.find({ user: req.user.id });
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch documents", error: error.message });
  }
};

// @route PATCH /api/document/:id/status
// @desc  Admin (or simulation) changes document status
exports.updateDocumentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const doc = await Document.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!doc) return res.status(404).json({ message: "Document not found" });

    res.status(200).json({ message: "Status updated", doc });
  } catch (error) {
    res.status(500).json({ message: "Error updating status", error: error.message });
  }
};
