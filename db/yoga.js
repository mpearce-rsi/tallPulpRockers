const express = require('express');

const Router = express.Router();
const mysqlConnection = require('../config/connection');

Router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * from TableNameHere', (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

module.exports = Router;
