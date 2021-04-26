'use strict';
const { Validator } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 20]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favoriteConsole: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    introduction: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Profile.associate = function(models) {
    Profile.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Profile;
};