export const hostURL = "http://localhost:8080";

export const getErrorMessage = error => {
  let errorMessage;
  if (error.response) {
    switch (error.response.status) {
      case 400:
        errorMessage =
          "Wrong request. Server was not able to process the request";
        break;
      case 401:
        errorMessage =
          "User authentication failed. User does not have the necessary credentials to access this resource";
        break;
      case 403:
        errorMessage =
          "Access failure. User does not have the necessary permissions to access this resource";
        break;
      case 404:
        errorMessage = "Data requested could not be found in server/database";
        break;
      case 410:
        errorMessage = error.response.data;
        break;
      default:
        errorMessage =
          "We seem to be experiencing technical difficulties and could not process your request at this time. Please try again";
    }
  } else if (error.request) {
    errorMessage = "Request was sent but server provided no response";
  } else {
    errorMessage = "Unexpected error, request was not sent";
  }
  return errorMessage;
};
