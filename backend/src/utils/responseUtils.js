class ApiResponse {
  constructor({ success, responseCode, message, technicalMessage, data = null }) {
    this.success = success;
    this.responseCode = responseCode; // Usamos status HTTP aquí
    this.message = message;
    this.technicalMessage = technicalMessage;
    this.data = data;
  }
}

const sendResponse = (res, { statusCode = 200, message, technicalMessage, success, data = null }) => {
  return res.status(statusCode).json(
    new ApiResponse({
      success,
      responseCode: statusCode,
      message,
      technicalMessage,
      data,
    })
  );
};

module.exports = { sendResponse };