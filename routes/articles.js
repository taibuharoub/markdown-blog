const express = require("express");

const { getIndex, getArticles } = require("../controllers/articles")

const router = express.Router();

router.get("/", getIndex);
router.get("/articles", getArticles);

module.exports = router;
