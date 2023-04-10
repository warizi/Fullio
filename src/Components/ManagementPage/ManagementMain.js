import styled from "styled-components";
import NavBox from "../MainPage/NavBox";
import WaveButton from "../MainPage/ButtonStyle";
import { useNavigate } from "react-router-dom";
import loginAxios from "../loginAxios";
import LogoImg from "../../image/LogoImage.png";

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
    }
    return (<>
        <MainContainer>
            <LeftContainer>
                <NavBox />
                <WaveButton onClick={clickLogout}></WaveButton>
            </LeftContainer>
            <CenterContainer>

            </CenterContainer>
        </MainContainer>
    </>)
}
const CenterContainer = styled.div`
    width: 114.4rem;
    height: 73.6rem;
    margin-top: 8.8rem;
    margin-left: 1.6rem;
    background-color: green;
`;
const MainContainer = styled.div`
    width: 137.6rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: blue;
`;
const LeftContainer = styled.div`
    width: 21.6rem;
    height: 73.6rem;
    margin-top: 8.8rem;
    display: flex;
    flex-direction: column;
    z-index: 0;
    background-color: yellow;
`;

export default ManagementMain;