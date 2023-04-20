import { useNavigate } from "react-router-dom";
import logoImg from "../../../image/LogoImage.png";
import "./MainLayout.css";
import NavLayout from "../../Layout/NavLayout";
import ButtonLayout from "../../Layout/ButtonLayout";
import WaveButton from "../../MainPage/ButtonStyle";
import loginAxios from "../../loginAxios";
import profileImg from "../../../image/Profile.png";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import adminLoginAxios from "../../adminLoginAxios";
function MainLayout ({content, page}) {
    const [miniHeight, setMiniHeight] = useState('0rem');
    const [miniWidth, setMiniWidth] = useState('0rem');
    const movePage = useNavigate();
    const [noticeHeight, setNoticeHeight] = useState(0);
    const [aa, setAa] = useState('');
    const [bb, setBb] = useState('');
    const [cc, setCc] = useState('');
    const [dd, setDd] = useState('');
    const [ee, setEe] = useState('');
    const [ff, setFf] = useState('');
    useEffect(() => {
        if (page === '공지') {
            setAa('background-position-y: -10rem;background-size: 400% 400%;color: white;');
        } else if (page === '담당 인재 설정') {
            setBb('background-position-y: -10rem;background-size: 400% 400%;color: white;');
        } else if (page === '성찰일지') {
            setCc('background-position-y: -10rem;background-size: 400% 400%;color: white;');
        }
    }, [])
    function moveManagementMain () {
        movePage('/management');
    };
    function clickLogout () {
        alert('로그아웃.');
        //url수정 필요
        adminLoginAxios.post("/logout")
        // .then((res) => res.json())
        .then((res) => {
            movePage('/');
        })
        .catch((error) => {
            console.error(new Error("로그아웃 중 에러 발생"));
        });
    };
    function moveMyPage () {
        movePage('/management/mypage');
    };
    function profileToggle () {
        if (miniHeight === 0 && miniWidth === 0) {
            setMiniHeight('30rem');
            setMiniWidth('20rem');
        } else {
            setMiniHeight(0);
            setMiniWidth(0);
        }
    };
    function noticeDisplay () {
        if (noticeHeight === 0) {
            setNoticeHeight(10);
        } else {
            setNoticeHeight(0);
        }
        console.log(noticeHeight);
    };
    function movePageClick (e) {
        const title = e.target.innerHTML;
        if (title === '공지사항') {
            movePage('/management/announcement');
        } else if (title === '담당 인재 설정') {
            movePage('/management/personincharge');
        } else if (title === '성찰일지') {
            movePage('/management/record');
        } else {
            alert('업데이트 예정');
        }
    }
    return (
        <main className="main-container">
            <nav className="left_container">
                <img className="logo_image" src={logoImg} alt="풀리오" onClick={moveManagementMain} />
                <NavLayout content={
                    <>
                        <ButtonLayout selectColor={aa} title={'공지사항'} onClick={(e) => movePageClick(e)} />
                        <ButtonLayout selectColor={bb} title={'담당 인재 설정'} onClick={(e) => movePageClick(e)}/>
                        <ButtonLayout selectColor={cc} title={'성찰일지'} onClick={(e) => movePageClick(e)} />
                        <ButtonLayout selectColor={dd} title={'인재관리'} onClick={(e) => movePageClick(e)} />
                        <ButtonLayout selectColor={ee} title={'사례관리'} onClick={(e) => movePageClick(e)} />
                        <ButtonLayout selectColor={ff} title={'챌린지'} onClick={(e) => movePageClick(e)} />
                    </>
                }/>
                <WaveButton onClick={clickLogout}>로그아웃</WaveButton>
            </nav>
            <section className="main_content_box">
                <div className="profile_container">
                    <img className="profile_img" src={profileImg} alt="프로필 이미지" onClick={profileToggle}/>
                    <MiniMyPage width={miniWidth} height={miniHeight}>
                        <div className="profile_title">
                            <img className="profile_img" src={profileImg} alt="프로필 이미지" />
                            <div className="p_container">
                                <p>김윤석 매니저님</p>
                                <p>dice_123@naver.com</p>
                            </div>
                        </div>
                        <BtnMini onClick={moveMyPage}>마이페이지</BtnMini>
                        <BtnMini onClick={noticeDisplay}>알림</BtnMini>
                        <Notice height={noticeHeight} />
                        <BtnMini onClick={clickLogout}>로그아웃</BtnMini>
                    </MiniMyPage>
                </div>
                {content}
            </section>
        </main>
    )
};
const Notice = styled.div`
    width: 100%;
    height: ${props => props.height}rem;
    transition: 0.5s;
`;
const BtnMini = styled.button`
    display: block;
    margin: 1rem 0;
`;
const MiniMyPage = styled.div`
    overflow: hidden;
    position: absolute;
    width: ${props => props.width};
    height: ${props => props.height};
    right: 0;
    background-color: blue;
    z-index: 1000;
    transition: 0.5s;
`;

export default MainLayout;