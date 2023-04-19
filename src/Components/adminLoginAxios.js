import axios from "axios";

axios.defaults.withCredentials = true; //모든 axios요청에서 쿠키를 포함하게 합니다.
const adminLoginAxios = axios.create({
    baseURL: "http://localhost:8000/api/admin",//기본 도메인을 설정할 수 있습니다. 
    // baseURL: "http://www.fullio.kr:8000/api/admin",//기본 도메인을 설정할 수 있습니다. 
    headers:{
        "Content-Type": "application/json"
    },
    responseType : "json",
})

export default adminLoginAxios;