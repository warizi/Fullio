import { useNavigate } from "react-router-dom";
import ButtonLayout from "../../Layout/ButtonLayout";
import NavLayout from "../../Layout/NavLayout";
import WaveButton from "../../MainPage/ButtonStyle";
import loginAxios from "../../loginAxios";
import "../CSS/main.css";
import SubNavBox from "../../Layout/SectionLayout/SubNavBox";
import RightContainer from "../../Layout/SectionLayout/RightContainer";
import styled from "styled-components";
import profileImg from "../../../image/Profile.png";
import COLOR from "../../MainPage/COLOR";
import axios from "axios";
import preAxios from "../../axios";
import { useState } from "react";
import ProfileImage from "../../../image/Profile.png";
import PhotoSrc from "../../../image/photo.png";
import PwChange from "../../MyPage/IdPwBox/PwChange";
import logoimg from "../../../image/LogoImage.png";

function ManageMyPage () {
    const [loginToggle, setLoginToggel] = useState(true);
    const [profileImgURL, setProfileImgURL] = useState(ProfileImage);
    const navBtn = [{title: '계정관리', id: 'mmp1',}]
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
        alert('버튼 동작');
    }
    function fileAxios (e) {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        axios.put('http://localhost:8000/api/files/image', formData ,{ 
            headers: {
                "content-Type": 'multipart/form-data',
            }})
            .then((res) => {
                    preAxios.get('/main/userinfo')
                    .then((res) => {
                        setProfileImgURL(res.data.profil_path);
                    })
                    .catch((err) => {
                        console.error(err);
                    })
            })
            .catch((err) => 
            console.error(err)
            );
    }
    function changeLogin () {
        setLoginToggel(false);
    }
    function cancelChange() {
        setLoginToggel(true);
    }
    function moveMain () {
        movePage('/management');
    }
    function personInChargeMove () {
        movePage('/management/personincharge');
    }
    return (
        <>
        <main className="main-container">
            <nav className="left_container">
                <Logimg src={logoimg} alt="풀리오" onClick={moveMain}/>
                <NavLayout content={
                <>
                    <ButtonLayout title={'공지사항'} onClick={foo} />
                    <ButtonLayout title={'담당 인재 설정'} onClick={personInChargeMove} />
                    <ButtonLayout title={'성찰일지'} onClick={foo} />
                    <ButtonLayout title={'인재관리'} onClick={foo} />
                    <ButtonLayout title={'사례관리'} onClick={foo} />
                    <ButtonLayout title={'챌린지'} onClick={foo} />
                </>}/>
                <WaveButton onClick={clickLogout}>로그아웃</WaveButton>
            </nav>
            <SubNavBox title={'마이 페이지'} btnArray={navBtn}/>
            <RightContainer>
                <Title>기본 정보</Title>
                {loginToggle ? <></> : <PwChange cancelChange={cancelChange}/>}
                {/* 프로필 */}
                <FloatBox>
                <ProfileContainer>
                    <InputContainer>
                            <ProfileImg src={profileImgURL ? profileImgURL : profileImg} alt="프로필 사진"/>
                            <ProfileInput accept="image/jpg, image/png, image/jpeg"  type="file" id="profileUpLoad" onChange={fileAxios}/>
                            <label htmlFor="profileUpLoad">
                            <ImgCircle>
                                <PhotoImg src={PhotoSrc} alt="프로필 사진 추가"/>
                            </ImgCircle>
                            </label>
                    </InputContainer>
                    
                </ProfileContainer>
                {/* 인풋 시작 */}
                <InputFlat>
                    <InfoSubmit onClick={changeLogin}>변경하기</InfoSubmit>
                    <InputBoxCon>
                        <InputCon>
                        <InfoTitle>아이디</InfoTitle>
                            <InputConBox>
                                <InInput name="input-text" readOnly type="text" value={'아이디'}/>
                            </InputConBox>
                        </InputCon>
                    </InputBoxCon>
                    <InputBoxCon>
                        <InputCon>
                        <InfoTitle>비밀번호</InfoTitle>
                            <InputConBox>
                                <InInput name="input-text" readOnly type="password" value={'0000'}/>
                            </InputConBox>
                        </InputCon>
                    </InputBoxCon>
                    <InputBoxCon>
                        <InputCon>
                        <InfoTitle>이름</InfoTitle>
                            <InputConBox>
                                <InInput name="input-text" readOnly type="text" value={'김윤석'}/>
                            </InputConBox>
                        </InputCon>
                    </InputBoxCon>
                    <InputBoxCon>
                        <InputCon>
                        <InfoTitle>소속부서</InfoTitle>
                            <InputConBox>
                                <InInput name="input-text" readOnly type="text" value={'취/창업 관리팀'}/>
                            </InputConBox>
                        </InputCon>
                    </InputBoxCon>
                </InputFlat>
                    {/* 인풋 끝 */}
                </FloatBox>
            </RightContainer>
        </main>
        </>
    )
};
const Logimg = styled.img`
    position: absolute;
    width: 3.7rem;
    height: 5.6rem;
    transform: translateY(-7.2rem);
    cursor: pointer;
`;
const InputFlat = styled.div`
    width: 67.2rem;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
`;
const InInput = styled.input`
    width: 25.9rem;
    height: 2.4rem;
    font-size: 1.4rem;
    border: none;
    
    &::placeholder {
        font-size: 1.2rem;
    }

    &:focus {
        border: none;
        outline: none;
    }
`;
const InputConBox = styled.div`
    width: 32rem;
    height: 4.2rem;
    padding: 0.9rem 1.2rem;
    border: 1px solid ${COLOR.GSD9};
    border-radius: 0.8rem;
    position: relative;
`;
const InputCon = styled.div`
    display: inline-block;
    width: 32rem;
    position: relative;
`;
const InfoTitle = styled.h3`
    font-size: 1.4rem;
    line-height: 1.4rem;
    margin: 0;
    margin-bottom: 0.8rem;
`;
const InputBoxCon = styled.div`
    z-index: 10;
    position: relative;
`;
const InfoSubmit = styled.div`
    z-index: 1000;
    font-size: 1.4rem;
    color: ${COLOR.Primary};
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
`;
const ProfileInput = styled.input`
    display: none;
    opacity: 0;
    position: absolute;
    width: 3.2rem;
    height: 3.2rem;
    background-color: ${COLOR.GSD9};
`;
const PhotoImg = styled.img`
    width: 2.4rem;
    height: 2.4rem;
`;
const ImgCircle = styled.div`
    position: absolute;
    border-radius: 999rem;
    width: 3.2rem;
    height: 3.2rem;
    background-color: ${COLOR.GSD9};
    bottom: 0;
    right: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FloatBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
`;
const Title = styled.h3`
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
    margin-bottom: 1.6rem;
`;
const InputContainer = styled.div`
    width: ${props => props.width};
    display: inline-block;
`;
const ProfileContainer = styled.div`
    position: relative;
    width: 11.2rem;
    height: 100%;
    margin-right: 3.2rem;
`;
const ProfileImg = styled.img`
    width: 11.2rem;
    height: 11.2rem;
    border-radius: 999rem;
`;
export default ManageMyPage;