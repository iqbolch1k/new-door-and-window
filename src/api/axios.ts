// src/api/axios.ts
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://doormarket.pythonanywhere.com/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;