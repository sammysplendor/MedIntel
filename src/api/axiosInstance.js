import axios from "axios";
import {
  DISEASE_API_BASE_URL,
  WORLDBANK_API_BASE_URL,
} from "../constants/config";

export const diseaseApi = axios.create({
  baseURL: DISEASE_API_BASE_URL,
});

export const worldbankApi = axios.create({
  baseURL: WORLDBANK_API_BASE_URL,
  params: { format: "json", per_page: 300 },
});
