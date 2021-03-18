const Article = require("../models/Article")

exports.getIndex = async (req, res, next) => {
  const articles = await Article.find().sort({
    createdAt: "desc"
  })
  res.render("articles/index", { articles: articles });
};

exports.getArticles = (req, res, next) => {
    res.send("articles page")
}

exports.postArticles = async (req, res, next) => {
  const { title, description, markdown } = req.body;
  let article = new Article({
    title,
    description,
    markdown
  })

  await article.save();
  res.redirect(`/articles/${article.slug}`)
}

exports.getNew = (req, res, next) => {
  res.render("articles/new")
}

exports.getArticle = async (req, res, next) => {
  const slug = req.params.slug;
  const article = await Article.findOne({slug: slug})
  if(!article) {
    return res.redirect("/")
  }
  res.render("articles/show", { article: article })

}

exports.deleteArticle = async (req, res, next) => {
  const id = req.params.id
  await Article.findByIdAndDelete(id);
  res.redirect("/")
}

exports.getEdit = async (req, res, next) => {
  const id = req.params.id;
  const article = await Article.findById(id)
  if(!article) {
    return res.redirect("/")
  }

  res.render("articles/edit", { article: article });

}

exports.putArticle = async (req, res, next) => {
  const id = req.params.id;
  let article = await Article.findById(id)

  if(!article) {
    return res.redirect("/");
  }

  const { title, description, markdown } = req.body


  article = await new Article({
    title,
    description,
    markdown
  })

  await article.save();
  console.log(article);

  res.redirect(`/articles/${article.slug}`)

}