exports.getIndex = (req, res, next) => {
  res.render("index", { text: "articles" });
};

exports.getArticles = (req, res, next) => {
    res.send("articles page")
}