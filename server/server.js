const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const {Person,Place,Thing,syncAndSeed} = require('./db');
const chalk = require('chalk');
app.use(express.static(path.join(__dirname, '../static')))
app.get('/', (req, res, next) => {
  try {
    
    // res.sendFile('/Users/hector/Fullstack/acme-babel-webpack/static/index.html');
    res.sendFile(path.join(__dirname, '/index.html'))
  } catch (err) {
    next(err);
  }
});

app.get('/api/people', async (req, res, next) => {
  await Person.findAll()
    .then(people => res.send(people))
    .catch(next);
});

app.get('/api/places', async (req, res, next) => {
  await Place.findAll()
    .then(places => res.send(places))
    .catch(next);
});

app.get('/api/things', async (req, res, next) => {
  await Thing.findAll()
    .then(things => res.send(things))
    .catch(next);
});

syncAndSeed().then(() => {
    app.listen(PORT, () => {
      console.log(chalk.yellow(`Serving on port: ${PORT}`));
    });
  });

