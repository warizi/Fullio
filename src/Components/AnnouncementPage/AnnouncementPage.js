import NavBox from "../MainPage/NavBox";
import '../MainPage/Main.css';
import WaveButton from "../MainPage/ButtonStyle";
import logoImg from '../../image/LogoImage.png';
import { useNavigate } from "react-router-dom";
import loginAxios from "../loginAxios";
import { useState } from "react";
import styled from "styled-components";
import BoxShadow from "../MainPage/StyleComponents";
import AnnouncementLayout from "../Layout/announcement/AnnouncementLayout";
function AnnouncementPage () {
    const [removeAlet, setRemoveAlet] = useState(0);
    const admin = 'none';
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
    return (
        <>
        <div className='start'></div>
        <div className='main-container'>
            <div className='left-container'>
                <img onClick={moveMain} className='main-logo-img' src={logo} alt="Fullio Logo" />
                <NavBox remove={removeAlet} selectColor={'공지'} />
                <WaveButton onClick={clickLogout}>로그아웃</WaveButton>
            </div>
            <div className="center_container">
                <ContentLayout>
                    <AnnouncementLayout admin={admin} newDisplay={'none'} />
                </ContentLayout>
            </div>
        </div>
    </>
        )
}
const ContentLayout = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
    background-color: white;
    ${BoxShadow};
`;
export default AnnouncementPage;