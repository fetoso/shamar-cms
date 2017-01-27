/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var videos = require('../db.js').Video;
  var users = require('../db.js').User;
  var _ = require('underscore');
  var videosRouter = express.Router();

  videosRouter.get('/', function(req, res) {
    if (req.query.status) {
      var list = _.where(videos, { status: req.query.status });
      // res.send({
      //   'videos': list
      // });
      res.send({
        data: list,
        paginator: {
          "limit": 10,
          "page": 1,
          "total": 1,
          "count": list.length,
          "num_pages": 1
        }
      });
    } else {
      // res.send({
      //   'videos': videos
      // });
      res.send({
        data: videos,
        paginator: {
          "limit": 10,
          "page": 1,
          "total": 1,
          "count": videos.length,
          "num_pages": 1
        }
      });
    }
  });

  videosRouter.post('/', function(req, res) {
    var newVideo = req.body.video;
    var newId = videos.length;
    newVideo.id = newId;
    videos.push(newVideo)
    res.send({
      video: newVideo
    });
  });

  videosRouter.get('/:id', function(req, res) {
    res.send({
      'videos': {
        id: req.params.id
      }
    });
  });

  videosRouter.put('/:id', function(req, res) {
    var editedVideo = req.body.video;
    editedVideo._id = req.params.id;
    for (var i = 0; i < videos.length; i++) {
      if (videos[i]['_id'] == req.params.id) {
          videos[i] = editedVideo
          res.send({
            data: {
              _id: req.params.id
            }
          });
      } else if (videos.length-1) {
        res.status(204).end();
      }
    }
  });

  videosRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/videos', require('body-parser').json());
  app.use('/api/videos', videosRouter);
};
