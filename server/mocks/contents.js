/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var contents = require('../db.js').Content;
  var contentsRouter = express.Router();

  contentsRouter.get('/', function(req, res) {
    // res.send({
    //   'contents': []
    // });
    res.send({
      data: contents,
      paginator: {
        "limit": 10,
        "page": 1,
        "total": 1,
        "count": contents.length,
        "num_pages": 1
      }
    });
  });

  contentsRouter.post('/', function(req, res) {
    var newContent = req.body.content;
    var newId = contents.length;
    newContent._id = newId;
    contents.push(newContent)
    res.send({
      data: newContent
    });
  });

  contentsRouter.get('/:id', function(req, res) {
    res.send({
      data: {
        _id: req.params.id
      }
    });
  });

  contentsRouter.put('/:id', function(req, res) {
    var editedContent = req.body.content;
    editedContent._id = req.params.id;
    for (var i = 0; i < contents.length; i++) {
      if (contents[i]['_id'] == req.params.id) {
          contents[i] = editedContent
          res.send({
            data: {
              _id: req.params.id
            }
          });
      } else if (contents.length-1) {
        res.status(204).end();
      }
    }
  });

  contentsRouter.delete('/:id', function(req, res) {
    var contentId = req.param('id');
    for (var i = 0; i < contents.length; i++) {
      if (parseInt(contentId) === contents[i]._id) {
        contents.splice(i, 1);
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
  //app.use('/api/contents', require('body-parser').json());
  app.use('/api/contents', contentsRouter);
};
