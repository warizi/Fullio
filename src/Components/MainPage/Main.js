import './startWave.css'
import './Main.css';
import './Button.css';
import UserInfo from './UserInfo';
import logoImg from '../../image/LogoImage.png';
import WaveButton from './ButtonStyle';
import NavBox from './NavBox';
import CalendarBox from './CalendarBox';
import MonthRecord from './MonthRecord';
import SkillBox from './SkillBox';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import preAxios from '../axios';
import loginAxios from '../loginAxios';


function Main() {
    //더미 데이터 시작입니다. ----------------------------------------
    const MyTotalD = [
        {
          title: '나의 기록',
          count: 0,
          key: 1,
        },
        {
          title: '나의 역량',
          count: 0,
          key: 2,
        },
        {
          title: '나의 활동',
          count: 0,
          key: 3,
        },
      ];
    const strengthD = [
        {
            title: '적응(Adaptability)',
            count: 1,
            key: 1,
        },
        {
            title: '복구(Restorative)',
            count: 1,
            key: 2,
        },
        {
            title: '지적사고(Intellection)',
            count: 1,
            key: 3,
        },
        {
            title: '연결성(Connectedness)',
            count: 1,
            key: 4,
        },
        {
            title: '최상화(Maximizer)',
            count: 1,
            key: 5,
        },
    ];
    const startRecord = [{
        title: '업프로젝트',
        record: 1,
        key: 1,  
    },
    {
        title: 'CoP',
        record: 1,
        key: 2,
    },
    {
        title: '직무학습',
        record: 1,
        key: 3,
    },
    {
        title: '특강',
        record: 1,
        key: 4,
    },
    {
        title: '기타',
        record: 1,
        key: 5,
    },
    {
        title: '등등',
        record: 1,
        key: 6,
    },];
    //더미 데이터 끝입니다. ----------------------------------------

    //메인페이지 state입니다. (변경된 사항을 렌더링합니다. 주로 서버에서 받은 데이터가 들어갑니다.)
    const [getStrength, /*setGetStrength*/] = useState(strengthD);
    const [getRecord, /*setGetRecord*/] = useState(startRecord);
    const [getMyTotal, /*setGetMyTotal*/] = useState(MyTotalD);
    const [getUserInfo, setGetUserInfo] = useState({
      nickName: '사용자 인증 error',
      name: '사용자 인증 error',
      motto: '한줄다짐을 작성해 주세요!',
      number: '사용자 인증 error',
    });

    const movePage = useNavigate();
    function clickLogout () {
        alert('로그아웃.');
        //url수정 필요
        loginAxios.post("/logout")
        // .then((res) => res.json())
        .then((res) => {
            movePage('/');
        })
        .catch((error) => {
            console.error(new Error("로그아웃 중 에러 발생"));
        });
    }
    
    useEffect(() => {
        preAxios.get('/main/userinfo')
        .then((res) => {
            setGetUserInfo(res.data);
        })
        .catch((error) => {
          console.error(error);
        })
        
    },[])



    const logo = logoImg;
    return (
    <>
        <div className='start'></div>
        <div className='main-container'>
            <div className='left-container'>
                <img className='main-logo-img' src={logo} alt="Fullio Logo" />
                <NavBox />
                <WaveButton onClick={clickLogout}>로그아웃</WaveButton>
                
            </div>
            <div className='cneter-container'>
                <CalendarBox></CalendarBox>
                <SkillBox myTotal={getMyTotal}/>
                <MonthRecord value={getRecord} />
                
            </div>
            <div className='right-container'>
                <UserInfo motto={getUserInfo.motto} nickname={getUserInfo.nickName} number={getUserInfo.memberNumber} name={getUserInfo.name} strength={getStrength}/>
            </div>
        </div>
    </>
    )
}

export default Main;