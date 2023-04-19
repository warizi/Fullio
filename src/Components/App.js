
import { useState, useEffect } from 'react';
import LoginBox from './LoginBox';
import './Button.css';
import { useNavigate } from 'react-router-dom';
import loginAxios from './loginAxios';
import adminLoginAxios from './adminLoginAxios';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const movePage = useNavigate();

  useEffect(() => {
      loginAxios.get('/accesstoken')
      .then((res) => {
        if (res.status === 200) {//fetch함수 사용시 res.ok로 status 200~299를 감지하지만 axios는 직접 res.status로 값을 가져와야 합니다.
          movePage('/main');
        } else if (res.status === 401){
            loginAxios.get("/refreshtoken")
            .then((res) => {
              if (res.status === 200) {//fetch함수 사용시 res.ok로 status 200~299를 감지하지만 axios는 직접 res.status로 값을 가져와야 합니다. 
                movePage('/main');
              } else if (res.status === 210){
                setIsLoading(false);
              }
            })
            .catch((error) => {
              console.error(error);
              setIsLoading(false);
            });
        }
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
      //admin
      adminLoginAxios.get('/accesstoken')
      .then((res) => {
        if (res.status === 200) {//fetch함수 사용시 res.ok로 status 200~299를 감지하지만 axios는 직접 res.status로 값을 가져와야 합니다.
          movePage('/management');
        } else if (res.status === 401){
            adminLoginAxios.get("/refreshtoken")
            .then((res) => {
              if (res.status === 200) {//fetch함수 사용시 res.ok로 status 200~299를 감지하지만 axios는 직접 res.status로 값을 가져와야 합니다. 
                movePage('/management');
              } else if (res.status === 210){
                setIsLoading(false);
              }
            })
            .catch((error) => {
              console.error(error);
              setIsLoading(false);
            });
        }
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
      
  }, [movePage]);


  return (
    <div className='root'>
      {isLoading ? <p>유효성 검사 중...</p> : <LoginBox />}
    </div>
  );
}

export default App;