import axios from 'axios';
import queryString from 'query-string';


const axiosClient = axios.create({
    baseURL: 'https://mok2-pressa.herokuapp.com',
    headers: {
         'Content-Type': 'application/json'
    },
   
    paramsSerializer: params => queryString.stringify(params)
   
});
axiosClient.interceptors.request.use(async (config) => config);
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});
export default axiosClient;