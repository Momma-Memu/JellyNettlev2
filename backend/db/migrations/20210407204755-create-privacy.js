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
      profileId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Profiles' }
      },
      displayRealName: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      gender: {
        type: Sequelize.BOOLEAN
      },
      displayGroups: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      displayFriends: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      dob: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      whoCanFindMe: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Privacies');
  }
};