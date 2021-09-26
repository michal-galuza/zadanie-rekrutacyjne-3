import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: process.env.API_DOMAIN,
	validateStatus: status => status >= 200 && status < 300,
});
export default axiosInstance;
