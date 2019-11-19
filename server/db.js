const Sequelize = require('sequelize');
const pg = require('pg');
const { STRING, BOOLEAN } = Sequelize;

const conn = new Sequelize('postgres://localhost:5432/babel_db', {logging:false});

const Person = conn.define('people', {
  name: {
    type: STRING,
    allowNull: false,
  },
});

const Place = conn.define('places', {
  name: {
    type: STRING,
    allowNull: false,
  },
});

const Thing = conn.define('things', {
  name: {
    type: STRING,
    allowNull: false,
  },
});

const syncAndSeed = async (force = true) => {
  try {
    await conn
      .sync({ force })
      .then(() =>
        Promise.all([
          Person.create({ name: 'Hector' }),
          Person.create({ name: 'Lachlan' }),
        ])
      )
      .then(() =>
        Promise.all([
          Place.create({ name: 'New York ' }),
          Place.create({ name: 'Australia' }),
        ])
      )
      .then(() =>
        Promise.all([
          Thing.create({ name: 'tea' }),
          Thing.create({ name: 'piano' }),
        ])
      );
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  Person,
  Place,
  Thing,
  syncAndSeed,
};
