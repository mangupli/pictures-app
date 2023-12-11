const express = require('express');
const morgan = require('morgan');
const ssr = require('../middlewares/ssr');
const path = require('path');

function serverConfig(app) {
  app.use(ssr);
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, '../public')));
}

module.exports = serverConfig;
