"use strict";

var express = require('express');

var Article = require('./../models/article');

var router = express.Router();
router.get('/new', function (req, res) {
  res.render('articles/new');
});
router.get('/:id', function (req, res) {});
router.post('/', function _callee(req, res) {
  var article;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          article = new Article({
            title: req.body.title,
            description: req.body.description,
            markdown: req.body.markdown
          });
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(article.save());

        case 4:
          artical = _context.sent;
          res.redirect('/articles/$(article.id)');
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.render('articles/new', {
            article: article
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
});
module.exports = router;