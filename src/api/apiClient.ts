import axios from "axios";
import { baseUrl } from "./apiEndpoints";

const apiClient = axios.create({ baseURL: baseUrl });

export default apiClient;
