'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./Models/Book');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.DB_URL);


app.get('/books', async (request,response) => {
  const filterQuery = {};
  if (request.query.title) {    filterQuery.title = request.query.title;  }
  const books = await Book.find(filterQuery);
  response.send(books);
})

app.post('/books', async (request,response) => {
  try{
    const newBook = await Book.create(request.body);
    response.send(newBook);

  }catch(error){
    console.error(error);
    response.status(500).send('Error creating Book');
  }
})

app.delete('/books/:id', async (request, response) => {
  const id = request.params.id;

  try {
    await Book.findByIdAndDelete(id);
    response.status(204).send('success');
  } catch (error) {
    console.error(error);
    response.status(404).send(`Unable to delete book with id ${id}`)
  }
});

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
