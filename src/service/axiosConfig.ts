import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  

//   // Add a request interceptor
//   Api.interceptors.request.use(
//     (config) => {
//       // You can add authentication headers here if needed
//       const token = localStorage.getItem('token');
//       if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );
  
//   // Add a response interceptor
//   Api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       // Handle errors here (e.g., redirect to login page on 401)
//       return Promise.reject(error);
//     }
//   );
  
  export default Api;