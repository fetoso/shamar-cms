/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var categoriesRouter = express.Router();

  var categories = [
       {
         id: 0,
         name: 'Rock',
         slug: 'rock',
       },
       {
         id: 1,
         name: 'Balad',
         slug: 'balad',
       },
       {
         id: 2,
         name: 'Jazz',
         slug: 'jazz',
       },
       {
         id: 3,
         name: 'Hip Hop',
         slug: 'hiphop',
       },
       {
         id: 4,
         name: 'Funk',
         slug: 'funk',
       },
     ];

  categoriesRouter.get('/', function(req, res) {
    res.send({
      'categories': categories
    });
  });

  categoriesRouter.post('/', function(req, res) {
    var newCategory = req.body.category;
    var newId = categories.length;
    newCategory.id = newId;
    categories.push(newCategory)
    res.send({
      category: newCategory
    });
  });

  categoriesRouter.get('/:id', function(req, res) {
    res.send({
      'categories': {
        id: req.params.id
      }
    });
  });

  categoriesRouter.put('/:id', function(req, res) {
    res.send({
      'categories': {
        id: req.params.id
      }
    });
  });

  categoriesRouter.delete('/:id', function(req, res) {
    var categoryId = req.param('id');
    for (var i = 0; i < categories.length; i++) {
      if (parseInt(categoryId) === categories[i].id) {
        categories.splice(i, 1);
        break;
      }
    }
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/categories', require('body-parser').json());
  app.use('/api/categories', categoriesRouter);
};
