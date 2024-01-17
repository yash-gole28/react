import axios from "axios";

var BackendUrl = 'http://localhost:8005/api/v1'

if(process.env.MODE === "PRODUCTION"){

}
const api = axios.create({baseURL: BackendUrl})

export default api