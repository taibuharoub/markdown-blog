const express = require("express");
const catchAsync = require("../utils/catchAsync");

const {
  getIndex,
  getArticles,
  getNew,
  postArticles,
  getArticle,
  deleteArticle,
  getEdit,
  putArticle
} = require("../controllers/articles");

const router = express.Router();

router.get("/", catchAsync(getIndex));

router.route("/articles").get(getArticles).post(catchAsync(postArticles));

/* router.get("/articles", getArticles);
router.post("/articles", postArticles) */
router.get("/articles/new", getNew);
router.get("/articles/edit/:id", catchAsync(getEdit));

router.get("/articles/:slug", catchAsync(getArticle));

router.put("/articles/:id", catchAsync(putArticle))

router.delete("/articles/:id", catchAsync(deleteArticle))

module.exports = router;
