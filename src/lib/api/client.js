import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const client = axios.create();

client.defaults.baseURL = process.env.REACT_APP_BASE_URL;
export default client;
