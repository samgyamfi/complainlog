import axios from 'axios';

const service = axios.create({
    baseURL: "https://test-demo-gql-backend.herokuapp.com/api/rest",
    // baseURL: ENV_URL,
    timeout: 120000,
    
});

export default service;
