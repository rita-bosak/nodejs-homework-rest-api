const messages = {
  400: 'Bad request',
  401: 'Not Authorized',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict',
};

const createError = (status, message = messages[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = createError;
