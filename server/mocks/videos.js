/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var _ = require('underscore');
  var videosRouter = express.Router();

  var videos = [
    {
      id: 0,
      name: 'El video mas cool',
      status: -1,
      video_url: 'http://video.webmfiles.org/big-buck-bunny_trailer.webm',
      shams: 0,
      user_id: 0,
    },
    {
      id: 1,
      name: 'Otro video',
      status: -1,
      video_url: 'http://video.webmfiles.org/big-buck-bunny_trailer.webm',
      shams: 0,
      user_id: 2,
    },
    {
      id: 2,
      name: 'Pelicula 100',
      status: 0,
      video_url: 'http://video.webmfiles.org/big-buck-bunny_trailer.webm',
      shams: 0,
      user_id: 3,
    },
    {
      id: 3,
      name: 'Filme "Grabado"',
      status: 1,
      video_url: 'http://video.webmfiles.org/big-buck-bunny_trailer.webm',
      shams: 30,
      user_id: 1,
    },
    {
      id: 4,
      name: 'Le filme',
      status: 0,
      video_url: 'http://video.webmfiles.org/big-buck-bunny_trailer.webm',
      shams: 0,
      user_id: 0,
    },
  ];

  videosRouter.get('/', function(req, res) {
    if (req.query.status) {
      var list = _.where(videos, { status: parseInt(req.query.status) });
      res.send({
        'videos': list
      });
    } else {
      res.send({
        'videos': videos
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
    editedVideo.id = req.params.id;
    for (var i = 0; i < videos.length; i++) {
      if (videos[i]['id'] == req.params.id) {
          videos[i] = editedVideo
          res.send({
            'videos': {
              id: req.params.id
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
