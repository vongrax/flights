import axios from "axios";
import {apiUrl} from "./constans";

const axiosApi = axios.create({
    baseURL: apiUrl
})

export default axiosApi;