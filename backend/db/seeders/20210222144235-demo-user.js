'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');
const { fa } = require('faker/lib/locales');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        dob: '1993-11-5',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        dob: '1993-11-5',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        dob: '1993-11-5',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: 'email@email.com',
        dob: '1995-03-21',
        username: 'memu',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'leeloo@email.com',
        dob: '1995-12-23',
        username: 'leeloo',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], { returning: true });
    
    const profiles = await queryInterface.bulkInsert('Profiles', [
      {
        firstName: 'Miah',
        photoUrl: 'https://res.cloudinary.com/jellynettle/image/upload/v1657843836/ubk5lkd9hzwk5wxwqp77.jpg',
        lastName: 'Chop',
        userId: users[3].id,
        gender: 'Female',
        favoriteConsole: 'PC',
        introduction: 'Is your refrigerator running?',
      },
      {
        firstName: 'Lee',
        photoUrl: 'https://res.cloudinary.com/jellynettle/image/upload/v1657843924/qbsthoynhkfx7hl9ypd7.jpg',
        lastName: 'Loo',
        userId: users[4].id,
        gender: 'Female',
        favoriteConsole: 'PC',
        introduction: 'Just be a rock... UwU',
      },
    ], { returning: true });

    const privacies = await queryInterface.bulkInsert('Privacies', [
      {
        profileId: profiles[0].id,
        displayRealName: false, 
        gender: true, 
        displayGroups: true, 
        displayFriends: true, 
        dob: true, 
        whoCanFindMe: 'anyone',
      },
      {
        profileId: profiles[1].id,
        displayRealName: false, 
        gender: true, 
        displayGroups: true, 
        displayFriends: true, 
        dob: true, 
        whoCanFindMe: 'anyone',
      },
    ], { returning: true });

  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Privacies', null, {});
    await queryInterface.bulkDelete('Profiles', null, {});
    return queryInterface.bulkDelete('Users', null, {});
  }
};
