'use strict';
module.exports = (sequelize, DataTypes) => {
  const Privacy = sequelize.define('Privacy', {
    profileId: DataTypes.INTEGER,
    firstName: DataTypes.BOOLEAN,
    lastName: DataTypes.BOOLEAN,
    gender: DataTypes.BOOLEAN,
    displayGroups: DataTypes.BOOLEAN,
    displayFriends: DataTypes.BOOLEAN,
    dob: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
    whoCanFindMe: DataTypes.STRING
  }, {});
  Privacy.associate = function(models) {
    // associations can be defined here
  };
  return Privacy;
};