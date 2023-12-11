'use strict';
const { Picture } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Picture.create({
      filePath: '/img/Elbrus-Bootcamp.png',
    });
  },

  async down(queryInterface, Sequelize) {
    await Picture.destroy({});
  },
};
