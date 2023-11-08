

const commonResponses = require("../../common-functions/common-responses");
const CONSTANTS = require("../../constants/constant")
const errorHandler = (error, req, res, next) => {
    //status codes
    const statusCodes = {
        internal_server_error: 500,
    };

    //default error message and the default status code
    req.message = CONSTANTS.ERROR_MESSAGE.COMMON_ERROR_MESSAGE;
    req.statusCode = statusCodes.internal_server_error;

    if (error.message) {
        console.log(error.message);
    }

    if (error.statusCode) {
        console.log(error.statusCode);
        req.status = error.statusCode;
    }

    //send the error response
    commonResponses.sendCommonErrorResponse(req, res);
};

module.exports = errorHandler;