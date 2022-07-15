'use strict';
module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Request', {
    fromUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    toUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fromUsername: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    toUsername: {
      type: DataTypes.STRING(100),
      allowNull: false,
    }
  }, {});
  Request.associate = function(models) {
    Request.belongsTo(models.User, { foreignKey: 'toUserId' });
  };
  return Request;
};