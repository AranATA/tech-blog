const { User } = require('../models');

const userdata =
[
  {
    "username": "Can",
    "password": "password"
  },
  {
    "username": "Ali",
    "password": "password"
  },
  {
    "username": "Bono",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;

