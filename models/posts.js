const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
  title: String,
  author: String,
  featureImage: String,
  categories: [String],
  excerpt: String,
  publishDate: { type: Date, default: Date.now },
  content: String,
  urlSlug: String,
  seoDescription: String,
  focusKeyword: String,
});

module.exports = mongoose.model("Post", postsSchema);
