import axios from "axios";
import {
  DISEASE_API_BASE_URL,
  NEWS_API_BASE_URL,
  WORLDBANK_API_BASE_URL,
} from "../constants/config";

const NEWS_API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

export const diseaseApi = axios.create({
  baseURL: DISEASE_API_BASE_URL,
});

export const worldbankApi = axios.create({
  baseURL: WORLDBANK_API_BASE_URL,
  params: { format: "json", per_page: 300 },
});

export const newsApi = axios.create({
  baseURL: NEWS_API_BASE_URL,
  params: {
    apikey: NEWS_API_KEY,
  },
});
