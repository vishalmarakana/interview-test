import axios from "axios";
import { hostURL, getErrorMessage } from "./apiUtils";

const serviceUrl = `${hostURL}/shipments`;

export const fetchShipments = () => {
  return axios
    .get(serviceUrl)
    .then(resolve)
    .catch(handleError);
};

const resolve = response => {
  return response.data;
};

const handleError = error => {
  if (axios.isCancel(error)) {
    return undefined;
  } else {
    throw new Error(`Could not fetch data: ${getErrorMessage(error)}`);
  }
};
