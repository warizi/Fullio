
import '../MainPage/Main.css';
import '../Button.css';
import '../MainPage/startWave.css'
import NavBox from '../MainPage/NavBox';
import WaveButton from '../MainPage/ButtonStyle';
import logoImg from '../../image/LogoImage.png';
import loginAxios from '../loginAxios';
import { useNavigate } from 'react-router-dom';
import NavContainer from './NavContainer';
import MainContainer from './MainContainer';

function RecordMain () {
    const logo = logoImg;
    const movePage = useNavigate();

    function moveMain () {
        movePage('/main');
    }
    function clickLogout () {
        alert('로그아웃 되었습니다!');
        loginAxios.post("/logout")
        .then((res) => {
            movePage('/');
        })
        .catch((error) => {
            console.error(new Error("로그아웃 중 에러 발생"));
        });
    }
    
    return(
            <>
            <div className='start'></div>
            <div className='main-container'>
                <div className='left-container'>
                    <img onClick={moveMain} className='main-logo-img' src={logo} alt="Fullio Logo" />
                    <NavBox selectColor={'background-position-y: -10rem;background-size: 400% 400%;color: white;'} />
                    <WaveButton onClick={clickLogout}>로그아웃</WaveButton>
                </div>
                <NavContainer title={'카테고리'}/>
                <MainContainer />
            </div>
        </>
    )
};

export default RecordMain;