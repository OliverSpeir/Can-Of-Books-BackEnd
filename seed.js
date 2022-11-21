const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URL);

const Cat = require('./models/Book');

async function seed() {
  // seed the database with some cats, so I can retrieve them
  const bookOne = new Book({
    title: 'Dictionary',
    description: 'All the words ever',
    status: true,
  });
  bookOne.save(function (err) {
    if (err) console.error(err);
    else console.log('seeded Dictionary');
  });
  const bookTwo = new Book({
    title: 'Dune',
    description: 'The Best Book Ever',
    status: true,
  });
  bookTwo.save(function (err) {
    if (err) console.error(err);
    else console.log('seeded db');
  });
  const bookThree = new Book({
    title: 'Harry Potter',
    description: 'Youre a wizard harry',
    status: true,
  });
  bookThree.save(function (err) {
    if (err) console.error(err);
    else console.log('seeded HP');
  });
  console.log('seeded DB');

  mongoose.disconnect();
}

seed();