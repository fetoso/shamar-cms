/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var tokensRouter = express.Router();
  var jwt = require('jsonwebtoken');

  var user = {
    email: 'test@test.com',
    password: 'secret'
  }

  tokensRouter.get('/', function(req, res) {
    res.send({
      'tokens': []
    });
  });

  tokensRouter.post('/', function(req, res) {
      if (req.body.email === user.email && req.body.password === user.password) {
          var token;

          token = jwt.sign({ email: user.email }, 'secretkey');

          res.send({
              token: token
          });
      } else {
          res.status(401).end();
      }
  });

  tokensRouter.get('/:id', function(req, res) {
    res.send({
      'tokens': {
        id: req.params.id
      }
    });
  });

  tokensRouter.put('/:id', function(req, res) {
    res.send({
      'tokens': {
        id: req.params.id
      }
    });
  });

  tokensRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/tokens', require('body-parser').json());
  app.use('/api/tokens', tokensRouter);
};
