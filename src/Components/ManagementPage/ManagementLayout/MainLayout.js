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
function MainLayout ({content}) {
    const [miniToggle, setMiniToggle] = useState(true);
    const movePage = useNavigate();
    function moveManagementMain () {
        movePage('/management');
    };
    function foo () {
        alert('어후 하기 싫어')
    };
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
    };
    function moveMyPage () {
        movePage('/management/mypage');
    }
    function profileToggle () {
        setMiniToggle(!miniToggle);
    }
    return (
        <main className="main-container">
            <nav className="left_container">
                <img className="logo_image" src={logoImg} alt="풀리오" onClick={moveManagementMain} />
                <NavLayout content={
                    <>
                        <ButtonLayout title={'공지사항'} onClick={foo} />
                        <ButtonLayout title={'담당 인재 설정'}/>
                        <ButtonLayout title={'성찰일지'} onClick={foo} />
                        <ButtonLayout title={'인재관리'} onClick={foo} />
                        <ButtonLayout title={'사례관리'} onClick={foo} />
                        <ButtonLayout title={'챌린지'} onClick={foo} />
                    </>
                }/>
                <WaveButton onClick={clickLogout}>로그아웃</WaveButton>
            </nav>
            <section className="main_content_box">
                <div className="profile_container">
                    <img className="profile_img" src={profileImg} alt="프로필 이미지" onClick={profileToggle}/>
                    <MiniMyPage display={miniToggle}>
                        <div className="profile_title">
                            <img className="profile_img" src={profileImg} alt="프로필 이미지" />
                            <div className="p_container">
                                <p>김윤석 매니저님</p>
                                <p>dice_123@naver.com</p>
                            </div>
                        </div>
                        <button onClick={moveMyPage}>마이페이지</button>
                        <button>알림</button>
                        <button>로그아웃</button>
                    </MiniMyPage>
                </div>
                
                {content}
            </section>
        </main>
    )
};
const MiniMyPage = styled.div`
    display: ${props => props.display ? 'none' : 'block'};
    position: absolute;
    padding: 1.6rem;
    bottom: -20rem;
    right: 0;
    width: 30rem;
    height: 20rem;
    background-color: blue;
    z-index: 1000;
`;

export default MainLayout;