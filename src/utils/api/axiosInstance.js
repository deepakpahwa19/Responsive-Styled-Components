import axios from 'axios';

const config = {
    baseURL: 'https://api.myjson.com/bins/rz0wi',
    headers: { Accept: 'application/json' },
    timeout: 30000
}

export const axiosInstance = axios.create(config);
