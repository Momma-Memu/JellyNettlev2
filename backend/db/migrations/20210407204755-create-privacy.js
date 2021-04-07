'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Privacies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.BOOLEAN
      },
      lastName: {
        type: Sequelize.BOOLEAN
      },
      gender: {
        type: Sequelize.BOOLEAN
      },
      displayGroups: {
        type: Sequelize.BOOLEAN
      },
      displayFriends: {
        type: Sequelize.BOOLEAN
      },
      dob: {
        type: Sequelize.BOOLEAN
      },
      type: {
        type: Sequelize.STRING
      },
      whoCanFindMe: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Privacies');
  }
};