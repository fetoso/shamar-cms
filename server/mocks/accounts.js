/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var users = require('../db.js').User;
  var _ = require('underscore');
  var accountsRouter = express.Router();
  var jwt = require('jsonwebtoken');

  var admins = _.where(users, { "is_admin": true });

  accountsRouter.get('/', function(req, res) {
    res.send({
      'accounts': []
    });
  });

  accountsRouter.post('/signup', function(req, res) {
    var newUser = req.body.user;
    var newId = users.length;
    newUser.id = newId;
    users.push(newUser)
    res.send({
      data: newUser
    });
  });

  accountsRouter.post('/login', function(req, res) {
    for (var i = 0; i < admins.length; i++) {
      if (req.body.email === admins[i].email && req.body.password === admins[i].password) {
          var token;

          token = jwt.sign({ email: admins[i].email }, 'secretkey');

          res.send({
            "data": {
              "_id": admins[i]._id,
              "email": admins[i].email,
              "first_name": admins[i].first_name,
              "last_name": admins[i].last_name,
              "token": token
            }
          });
      } else if (i == admins.length-1) {
          res.status(401).end();
      }
    }
  });

  accountsRouter.get('/:id', function(req, res) {
    res.send({
      'accounts': {
        id: req.params.id
      }
    });
  });

  accountsRouter.put('/:id', function(req, res) {
    res.send({
      'accounts': {
        id: req.params.id
      }
    });
  });

  accountsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/accounts', require('body-parser').json());
  app.use('/api/accounts', accountsRouter);
};
