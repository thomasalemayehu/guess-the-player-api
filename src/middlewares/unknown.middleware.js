const unknownMiddleware = (request, response, next) => {
  response.status(404).json({ message: 'Endpoint not found' });
  next();
};

module.exports = unknownMiddleware;
