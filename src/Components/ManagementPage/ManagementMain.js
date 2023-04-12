import { useNavigate } from "react-router-dom";
import WaveButton from "../MainPage/ButtonStyle";
import "./CSS/main.css";
import loginAxios from "../loginAxios";
import NavLayout from "../Layout/NavLayout";
import ButtonLayout from "../Layout/ButtonLayout";
import COLOR from "../MainPage/COLOR";
import WavePrimary from "../../image/wavePrimary.png";
import styled from "styled-components";
import BoxShadow from "../MainPage/StyleComponents";
import NoticeLayout from "../Layout/Notice";
function ManagementMain () {
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
    };
    function foo() {
        alert('성공');
    };
    function moveSetting () {

    };
    return (
        <div className="main_container">
            <div className="left_container">
                <NavLayout content={<>
                    <ButtonLayout title={'인재관리'} onClick={foo}/>
                    <ButtonLayout title={'성찰일지 관리'} onClick={foo}/>
                    <ButtonLayout title={'공지 관리'} onClick={foo}/>
                    <ButtonLayout title={'챌린지'} onClick={foo}/>
                    </>
                } />
                <PrimaryButton onClick={moveSetting}>설정</PrimaryButton>
                <WaveButton onClick={clickLogout}>로그아웃</WaveButton>
            </div>
            <div className="center_container management_grid">
                <NoticeLayout />
            </div>
        </div>
    )
};

const PrimaryButton = styled.button`
    width: 21.6rem;
    height: 5.2rem;
    border: 1px solid ${COLOR.Primary};
    text-align: center;
    line-height: 5rem;
    color: ${COLOR.Primary};
    background-color: ${COLOR.White};
    border-radius: 0.8rem;
    font-size: 1.6rem;
    cursor: pointer;
    background-image: url(${WavePrimary});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: 0.3s;
    background-position-y: 5rem;
    ${props => props.selectColor};
    margin: 1.6rem 0;
    ${BoxShadow};
    &:hover {
        color: ${COLOR.White};
        background-position-y: -10rem;
        background-size: 400% 400%;

    }
`;

export default ManagementMain;