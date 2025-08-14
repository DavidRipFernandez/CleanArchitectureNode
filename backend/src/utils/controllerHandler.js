
const { sendResponse } = require('./responseUtils');

function controllerHandler(controllerFn, config = {}) {
  return async (req, res) => {
    try {
      const result = await controllerFn(req, res);
      if (result && !result.__customResponse) {
        // Si el método devuelve un resultado simple, úsalo en la estructura estándar
        return sendResponse(res, {
          statusCode: result.statusCode || 200,
          success: true,
          message: result.message || config.successMessage || "Operación exitosa.",
          technicalMessage: result.technicalMessage || "",
          data: result.data !== undefined ? result.data : result
        });
      }
      // Si el controlador ya manejó la respuesta (por ejemplo, devolviendo __customResponse), no hace nada
    } catch (error) {
      // Si se especifica status personalizado en el error, úsalo
      const statusCode = error.status || 500;
      return sendResponse(res, {
        statusCode,
        success: false,
        message: config.errorMessage || "Ocurrió un error en el servidor.",
        technicalMessage: error.message,
        data: null
      });
    }
  };
}

module.exports = { controllerHandler };
