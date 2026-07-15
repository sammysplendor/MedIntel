import axios from "axios";
import {
  DISEASE_API_BASE_URL,
  HEALTH_ALERT_API_BASE_URL,
} from "../constants/config";

export const diseaseApi = axios.create({
  baseURL: DISEASE_API_BASE_URL,
});

export const reliefApi = axios.create({
  baseURL: HEALTH_ALERT_API_BASE_URL,
});

// export const diseaseApi = axios.create({
//   baseURL: DISEASE_API_BASE_URL,
// });
