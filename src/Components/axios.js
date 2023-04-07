import axios from "axios";



axios.defaults.withCredentials = true; //모든 axios요청에서 쿠키를 포함하게 합니다.
const preAxios = axios.create({
    baseURL: "http://localhost:8000/api",//기본 도메인을 설정할 수 있습니다. 
    // baseURL: "http://www.fullio.kr:8000/api",
    headers:{
        "Content-Type": "application/json"
    },
    responseType : "json",
})
const preAxiosA = axios.create({
    baseURL: "http://localhost:8000/api",//기본 도메인을 설정할 수 있습니다. 
    // baseURL: "http://www.fullio.kr:8000/api",
    headers:{
        "Content-Type": "application/json"
    },
    responseType : "json",
})


// axios 전처리 변수
preAxios.interceptors.request.use((config) => {
  return preAxiosA.get('/accesstoken')
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
        return preAxiosA.get("/refreshtoken")
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
preAxiosA.interceptors.response.use(
  (response) => response,
  (error) => {
    
    if (error.response && error.response.status === 401) {
      window.location.href = "http://localhost:3000";
      // window.location.href = "http://www.fullio.kr";
    } else if (error.response && error.response.status === 403) {
      // Refresh Token 검증
      return preAxiosA.get("/refreshtoken")
        .then((res) => {
          if (res.status === 200) {
            // 새로운 AccessToken이 발급된 경우, 원래 요청을 재시도합니다.
            console.log('토큰재발급됨')
            const config = error.config;
            return preAxiosA.request(config);
          } else {
            return Promise.reject(new Error('Failed to refresh AccessToken'));
          }
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject(error);
        });
    }
    return Promise.reject(error);
  }
);

export default preAxios;