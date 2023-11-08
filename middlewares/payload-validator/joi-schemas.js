const Joi = require("joi");

module.exports = {
  /**
   * add new book record payload validator
   */
  addNewBook: Joi.object().keys({
    title: Joi.string().min(3).required(),
    author: Joi.string().required(),
    summary: Joi.string().required()
  }),

  /** 
   * update book record payload validator
  */
  updateBook: Joi.object().keys({
    bookId: Joi.string().required(),
    title: Joi.string().min(3).required(),
    author: Joi.string().required(),
    summary: Joi.string().required(),
  }),
};
