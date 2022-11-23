'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

// const bookSchema = new Schema({
//       title: String,  description: String,  status: Boolean});
const bookSchema = new Schema ({
    title: {type: String, required:true},
    description: {type: String, required:true},
    status: {type:Boolean, required:true},
    img: {type: String, required: true}
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;




// const catSchema = new Schema({
//     name: {type: String, required: true},
//     color: {type: String, required: true},
//     spayNeuter: {type: Boolean, required: true},
//     location: {type: String, required: true},
//   });
