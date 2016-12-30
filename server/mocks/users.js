/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  var users = [
    {
      id: 0,
      name: 'Remigio',
      lastname: 'Mercado',
      email: 'rmercado@gmail.com',
      role: 0,
    },
    {
      id: 1,
      name: 'Marcos',
      lastname: 'Ramirez',
      email: 'mramirez@gmail.com',
      role: 1,
    },
    {
      id: 2,
      name: 'Boberto',
      lastname: 'Zangano',
      email: 'bzangano@gmail.com',
      role: 1,
    },
    {
      id: 3,
      name: 'Pablo',
      lastname: 'Éndejo',
      email: 'pendejo@gmail.com',
      role: 1,
    },
  ];

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
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
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
