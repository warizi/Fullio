
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
import { useState } from 'react';



function RecordMain () {
    const [removeAlet, setRemoveAlet] = useState(0);
    const logo = logoImg;
    const movePage = useNavigate();
    //기록페이지 공통, 심화, 커스텀카테고리 등을 변경하는 스테이트입니다.
    const [category, setCategory] = useState('공통교육');
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
                    <NavBox remove={removeAlet} selectColor={'background-position-y: -10rem;background-size: 400% 400%;color: white;'} />
                    <WaveButton onClick={clickLogout}>로그아웃</WaveButton>
                </div>
                <NavContainer remove={removeAlet} setRemove={setRemoveAlet} title={'카테고리'} category={category} onChange={setCategory}/>
                <MainContainer remove={removeAlet} setRemove={setRemoveAlet} category={category} />
            </div>
        </>
    )
};

export default RecordMain;