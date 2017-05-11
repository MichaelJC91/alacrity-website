const express = require('express');
const router = express.Router();
const Post = require('../../models/posts.js');

//Get all blog posts
router.get('/', (req, res) => {

  res.send('blog route');
});

//Get page with blog form
router.get('/new', (req, res) => {
  res.render('./blog/blog-new');
});

//POST Route for blog post
router.post('/new', (req, res) => {
  const { title, author, featureImage,
          categories, excerpt, publishDate,
          content, urlSlug, seoDescription, focusKeyword } = req.body;

  let categoriesArray = categories.split(',').map((word) => {
    return word.trim();
  });

  let postData = {
    title,
    author,
    featureImage,
    categories: categoriesArray,
    excerpt,
    content,
    urlSlug,
    seoDescription,
    focusKeyword
  }

  // Post.create(postData, (err, newPost) => {
  //   if(err) {
  //     console.log(err);
  //   } else {
  //     res.redirect(req.get('referer'));
  //   }
  // });
  console.log(req.body);
});

module.exports = router;
