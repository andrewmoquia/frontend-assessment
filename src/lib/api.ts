import axios from 'axios';

const username = process.env.API_USERNAME!;
const password = process.env.API_PASSWORD!;

const credentials = `${username}:${password}`;
const encodedCredentials = Buffer.from(credentials).toString('base64');

const serverApi = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + encodedCredentials,
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
