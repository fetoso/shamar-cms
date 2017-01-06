/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var users = require('../db.js').User;
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.send({
      'users': users
    });
  });

  usersRouter.post('/', function(req, res) {
    var newUser = req.body.user;
    var newId = users.length;
    newUser.id = newId;
    users.push(newUser)
    res.send({
      user: newUser
    });
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.put('/:id', function(req, res) {
    var editedUser = req.body.user;
    editedUser.id = req.params.id;
    for (var i = 0; i < users.length; i++) {
      if (users[i]['id'] == req.params.id) {
          users[i] = editedUser
          res.send({
            'users': {
              id: req.params.id
            }
          });
      } else if (users.length-1) {
        res.status(204).end();
      }
    }
  });

  usersRouter.delete('/:id', function(req, res) {
    var userId = req.param('id');
    for (var i = 0; i < users.length; i++) {
      if (parseInt(userId) === users[i].id) {
        users.splice(i, 1);
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
  //app.use('/api/users', require('body-parser').json());
  app.use('/api/users', usersRouter);
};
