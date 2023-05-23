const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../utils/path");

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "index.html")); //   res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});
router.get("/about.html", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "about.html")); //   res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});
router.get("/service.html", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "service.html")); //   res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});
router.get("/contact.html", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

module.exports = router;
