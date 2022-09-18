"use strict";

var express = require('express');

var mongoose = require('mongoose');

var articleRouter = require('./routes/articles');

var app = express();
mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.set('view engine', 'ejs');
app.use(express.urlencoded({
  extended: true
}));
app.get('/', function (req, res) {
  var articles = [{
    title: 'Test Article',
    createdAt: new Date(),
    description: 'Test description'
  }, {
    title: 'Test Article 2',
    createdAt: new Date(),
    description: 'Test description 2'
  }];
  res.render('articles/index', {
    articles: articles
  });
});
app.use('/articles', articleRouter);
app.listen(5600);