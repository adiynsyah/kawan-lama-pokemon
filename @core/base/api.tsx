
import axios from "axios";

const API = axios.create({
  responseType: 'json'
});

export default API;