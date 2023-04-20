import axios from "axios";



axios.defaults.withCredentials = true; //모든 axios요청에서 쿠키를 포함하게 합니다.
const adminAxios = axios.create({
    baseURL: "http://localhost:8000/api/admin",//기본 도메인을 설정할 수 있습니다. 
    // baseURL: "http://www.fullio.kr:8000/api/admin",
    headers:{
        "Content-Type": "application/json"
    },
    responseType : "json",
})
const adminAxiosA = axios.create({
    baseURL: "http://localhost:8000/api/admin",//기본 도메인을 설정할 수 있습니다. 
    // baseURL: "http://www.fullio.kr:8000/api/admin",
    headers:{
        "Content-Type": "application/json"
    },
    responseType : "json",
})


// axios 전처리 변수
adminAxios.interceptors.request.use((config) => {
  return adminAxiosA.get('/accesstoken')
    .then((res) => {
      if (res.status !== 200){
        return Promise.reject(new Error('AccessToken validation failed'));
      } else {
        // 만료되지 않은 AccessToken인 경우, 원래 요청을 진행합니다.
        return config;
      }
    })
    .catch((error) => {
      
      if (error.response && error.response.status === 403) {
        // AccessToken이 만료된 경우, RefreshToken으로 새로운 AccessToken을 발급합니다.
        return adminAxiosA.get("/refreshtoken")
          .then((res) => {
            if (res.status === 200) {
              // 새로운 AccessToken이 발급된 경우, 원래 요청을 진행합니다.
              return config;
            } else {
              return Promise.reject(new Error('Failed to refresh AccessToken'));
            }
          })
          .catch((error) => {
            return Promise.reject(error);
          });
      } else {
        return Promise.reject(error);
      }
    });
}, (error) => {
  return Promise.reject(error);
});

// refreshtoken 검증이 실패한 경우, 로그인 페이지로 이동합니다.
adminAxiosA.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "http://localhost:3000";
      // window.location.href = "http://www.fullio.kr";
    } else if (error.response && error.response.status === 403) {
      // Refresh Token 검증
      return adminAxiosA.get("/refreshtoken")
        .then((res) => {
          if (res.status === 200) {
            // 새로운 AccessToken이 발급된 경우, 원래 요청을 재시도합니다.
            const config = error.config;
            return adminAxiosA.request(config);
          } else {
            return Promise.reject(new Error('Failed to refresh AccessToken'));
          }
        })
        .catch((error) => {
          console.error(error);
          return Promise.reject(error);
        });
    }
    return Promise.reject(error);
  }
);

export default adminAxios;