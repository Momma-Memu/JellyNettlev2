'use strict';
module.exports = (sequelize, DataTypes) => {
  const Privacy = sequelize.define('Privacy', {
    profileId: DataTypes.INTEGER,
    displayRealName: DataTypes.BOOLEAN,
    gender: DataTypes.BOOLEAN,
    displayGroups: DataTypes.BOOLEAN,
    displayFriends: DataTypes.BOOLEAN,
    dob: DataTypes.BOOLEAN,
    whoCanFindMe: DataTypes.STRING
  }, {});
  Privacy.associate = function(models) {
    // associations can be defined here
  };
  return Privacy;
};