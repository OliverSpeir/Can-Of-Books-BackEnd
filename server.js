'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./Models/Book');
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/books', async (request,response) => {
  const filterQuery = {};
  if (request.query.title) {    filterQuery.title = request.query.title;  }
  const books = await Book.find(filterQuery);
  response.send(books);
})

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
