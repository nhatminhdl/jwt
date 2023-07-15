export const API_BASE_URL = 'https://2218-2001-ee0-54a6-7c90-54f6-7397-6d62-7e2b.ngrok-free.app';

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const LOGIN = getApiUrl('/api/auths/Login');

