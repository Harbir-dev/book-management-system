module.exports = {
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   * description: send common success response
   */
  sendCommonSuccessResponse: (req, res) => {
    res.send({
      status: 200,
      data: req.data || {},
      message: req.message || "",
    });
  },

  /**
   * 
   * @param {*} req 
   * @param {*} res 
   * description: send common error response
   */
  sendCommonErrorResponse: (req, res) => {
    res.status(req.status || 400).send({
      error: req.data || {},
      message: req.message || "",
    });
  },
};
