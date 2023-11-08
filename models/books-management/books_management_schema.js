const mongoose = require("mongoose");

//creating mongoose schema
const books_management_schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    author: { type: String, required: true, index: true },
    summary: { type: String, required: true, index: true },
},
);
//creating mongoose model;
const booksManagementSchema = mongoose.model('booksManagementSchema', books_management_schema);

module.exports = booksManagementSchema;