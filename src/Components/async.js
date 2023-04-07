import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com',
});

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    const { status } = error.response;

    // access Token이 만료되고, refresh Token이 있는 경우
    if (status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const { data } = await axios.post('/auth/refresh', {
          refreshToken: 'your_refresh_token',
        });
        
        // 새로운 access Token으로 originalRequest를 재시도
        instance.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
        return instance(originalRequest);
        
      } catch (error) {
        // refresh Token이 만료된 경우 로그인 페이지로 이동 등의 작업 수행
        console.error(error);
      }
    }

    return Promise.reject(error);
  }
);