"use strict";

const booksManagementModel = require("../models/books-management/books_management_schema");
const ObjectId = require("mongodb").ObjectId; // to string to mongoId
const commonResponses = require("../common-functions/common-responses");


module.exports = {

    /**
    * 
    * @param {*} req 
    * @param {*} res 
    * description: Adds new book data record.
    */
    addNewBook: (req, res) => {

        const insertData = {
            title: req.body.title,
            author: req.body.author,
            summary: req.body.summary,
        };

        //insert data
        booksManagementModel.create(
            insertData
        )
            .then((item) => {
                req.data = item;
                req.message = "Added new book Successfully.";
                commonResponses.sendCommonSuccessResponse(req, res);
            })
            .catch((err) => {
                req.data = { err };
                req.message = "Unable to add new book.";
                commonResponses.sendCommonErrorResponse(req, res);
            });
    },

    /**
    * 
    * @param {*} req 
    * @param {*} res 
    * description: Update book data on behalf of bookId.
    */
    updateBookData: async (req, res) => {
        const filter = {
            _id: new ObjectId(req.body.bookId),
        }
        const update = {
            title: req.body.title,
            author: req.body.author,
            summary: req.body.summary,
        };

        //update book data
        const result = await booksManagementModel
            .updateOne(
                filter,
                update,
            );

        if (!result) {
            const exception = new Error("Error: Unable to update book data.");
            exception.name = "Custom Error";
            throw exception;
        };

        req.message = "Book data updated Successfully.";
        commonResponses.sendCommonSuccessResponse(req, res);
    },

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * description: returns the book data on behalf its id.
     */
    getBookById: async (req, res) => {
        if (!req.params.bookId) {
            const exception = new Error("Error: bookId is required.");
            exception.name = "Validation Error";
            throw exception;
        };

        const bookId = req.params.bookId;
        const o_id = new ObjectId(bookId);
        const result = await booksManagementModel.findOne({ _id: o_id }, { __v: 0 });

        if (!result) {
            req.message = "Unable to fetch book data.";
            return commonResponses.sendCommonErrorResponse(req, res);
        }

        req.message = "Book data fetched successfully";
        req.data = result;
        commonResponses = commonResponses.sendCommonSuccessResponse(req, res);
    },

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * description: returns all books records.
     */
    getAllBooksData: async (req, res) => {
        const result = await booksManagementModel.find({}, { __v: 0 });
        if (!result) {
            throw err;
        } else {
            req.data = result;
            req.message = "Book data fetched Successfully.";
            commonResponses.sendCommonSuccessResponse(req, res);
        };
    },

    /**
    * 
    * @param {*} req 
    * @param {*} res 
    * description: delete book data record on behalf of its id.
    */
    deleteBookData: async (req, res) => {
        if (!req.params.bookId) {
            const exception = new Error("Error: bookId is required.");
            exception.name = "Validation Error";
            throw exception;
        };

        const bookId = req.params.bookId;
        const o_id = new ObjectId(bookId);
        const result = await booksManagementModel.deleteOne({ _id: o_id });

        if (!result.deletedCount) {
            req.message = "Unable to delete the record.";
            return commonResponses.sendCommonErrorResponse(req, res);
        }

        req.message = "Record deleted successfully";
        req.data = result;
        commonResponses = commonResponses.sendCommonSuccessResponse(req, res);
    },
};
