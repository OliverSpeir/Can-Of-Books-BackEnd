const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URL);

const Book = require('./Models/Book');

async function seed() {
  // seed the database with some cats, so I can retrieve them

    await Book.create({
        title: 'Dictionary',
        description: 'All the words ever',
        status: true
    });
    console.log('seeded dictionary')
    await Book.create({
        title: 'Dune',
        description: 'Best book ever',
        status: true
    });
    console.log('seeded Dune')
    await Book.create({
        title: 'Harry Potter',
        description: 'youre a wizard harry',
        status: true
    });
    console.log('seeded HP')
  mongoose.disconnect();
}



seed();