# book-management-system
This repo contains a node.js server with crud operation using database mongoDB and global error handling.

Setup:
  1. clone the repo
  2. npm i
  3. npm start (the application by default runs on local port 3000, make sure this port is available).

Decisions/Assumption during development: 
  This is a simple crud operation application. Latest avaialbe versions are used for like express, mongodb, mongoose, cors etc.
  For payload validation JOI is used and async/await is used with arrow functions and we do not need to put try/catch block 
  with DAL as we are handling errors globally, this will reduce the code and improve the readability as well.
  Environment setup is done through .env file and environment config files under folder config/.

API endponts and there usage:
1. **/add-new-book**
  description: Use this end point to add new book record.
    method: post
   sample payload json: 
   {
     "title": "test title",
     "author": "test author",
     "summary": "test summary"
   }

2. **/get-all-books**
   description: Use this api end point to get all records.
   method: get

3. **/get-book/:bookId**
   description: Use this end point to get specific book record with bookId.
   method: get

4. **/update-book**
   description: Use this end point to update book record.
   method: put
   sample payload json:
   {
    "bookId": "654b4873a101ee3d7e2449be",
     "title": "test titles",
     "author": "test author",
     "summary": "test summary"
  }

5. **/delete-book/:bookId**
   description: Use this end point to delete a record.
   method: delete
   
