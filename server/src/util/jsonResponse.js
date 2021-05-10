const jsonResponse = (message, response = {}) => {
  return {
    message,
    ...response,
  };
};

module.exports = jsonResponse;
