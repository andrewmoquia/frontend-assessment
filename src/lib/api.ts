import axios from 'axios';

const serverApi = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

serverApi.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('Server API error:', error.response?.data || error.message);
        return Promise.reject(error);
    },
);

export default serverApi;
