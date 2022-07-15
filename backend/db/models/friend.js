'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    friendId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Friend.associate = function(models) {
    Friend.belongsToMany(models.User, {through: 'friend', foreignKey: 'userId', otherKey: 'friendId'});
  };
  return Friend;
};