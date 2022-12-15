const errorMiddleware = (err, request, response, next) => {
  response.status(400).json('Error');
  // console.log(err);
  next();
};

module.exports = errorMiddleware;
