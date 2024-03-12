import axios from "axios";
import { BaseUrl } from "./baseUrl";

const AxiosInstance = axios.create({
  baseURL: BaseUrl,
  timeout: 200000,
});

export { AxiosInstance };
