'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fromUserId: {
        references: { model: 'Users' },
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      toUserId: {
        references: { model: 'Users' },
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fromUsername: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      toUsername: {
        type: Sequelize.STRING(100),
        allowNull: false,
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
    return queryInterface.dropTable('Requests');
  }
};