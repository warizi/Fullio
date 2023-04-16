import { useNavigate } from "react-router-dom";
import WaveButton from "../MainPage/ButtonStyle";
import NavBox from "../MainPage/NavBox";
import LogoImg from '../../image/LogoImage.png';
import styled from "styled-components";
import COLOR from "../MainPage/COLOR";
import BoxShadow from "../MainPage/StyleComponents";
import ProfileImage from "../../image/Profile.png";
import loginAxios from "../loginAxios";
import { useEffect, useState } from "react";
import cancelImage from '../../image/cancelMy.png';
import upImage from '../../image/upBtn.png';
import downImage from '../../image/downBtn.png';
import preAxios from "../axios";
import PwChange from "./IdPwBox/PwChange";
import axios from "axios";
import PhotoSrc from "../../image/photo.png";

const InputContainer = styled.div`
    width: ${props => props.width};
    display: inline-block;
`;
const Title = styled.h3`
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
    margin-bottom: 1.6rem;
`;
const FloatBox = styled.div`
    display: flex;
    flex-direction: row;
`;
const NavContainer = styled.div`
    width: 21.6rem;
    height: 73.6rem;
    border-radius: 0.8rem;
    background-color: ${COLOR.White};
    margin: 8.8rem 1.6rem 0;
    ${BoxShadow};
    padding: 4rem 0 0 2.7rem;
`;
const MainContainer = styled.div`
    width: 91.2rem;
    height: 73.6rem;
    background-color: ${COLOR.White};
    margin: 8.8rem 0 0;
    ${BoxShadow};
    border-radius: 0.8rem;
    padding: 4rem 4.8rem;
`;
const Mytitle = styled.h2`
    font-size: 2.4rem;
    line-height: 2.4rem;
    font-weight: 400;
    margin:0;
    margin-bottom: 3.5rem;
`;
const MyBtn = styled.div`
    height: 2.4rem;
    font-size: 2rem;
    line-height: 2.4rem;
    margin-bottom: 2rem;
    cursor: pointer;
    display: inline-block;
    color: ${props => props.active ? COLOR.Primary : COLOR.Black};
    ${props => props.active ? `border-bottom: 2px solid ${COLOR.Primary}` : ``};
    &:hover {
        color: ${COLOR.Primary};
        border-bottom: 2px solid ${COLOR.Primary};
    }
`;
const ProfileImg = styled.img`
    width: 11.2rem;
    height: 11.2rem;
    border-radius: 999rem;
`;
const ProfileInput = styled.input`
    display: none;
    opacity: 0;
    position: absolute;
    width: 3.2rem;
    height: 3.2rem;
    background-color: ${COLOR.GSD9};
`;
const ProfileContainer = styled.div`
    position: relative;
    width: 11.2rem;
    height: 100%;
    margin-right: 3.2rem;
`;
const InputBoxCon = styled.div`
    z-index: 10;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
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
const InputConBox = styled.div`
    width: 32rem;
    height: 4.2rem;
    padding: 0.9rem 1.2rem;
    border: 1px solid ${props => props.borderColor};
    border-radius: 0.8rem;
    position: relative;
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
const InfoSubmit = styled.div`
    z-index: 1000;
    font-size: 1.4rem;
    color: ${COLOR.Primary};
    cursor: pointer;
    position: absolute;
    right: 0.8rem;
    top: 0;
`;
const CommentBox = styled.div`
    width: 82.4rem;
    margin-top: 2.5rem;
`;
const CommentTitle = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    display: block;
`;
const CommentInputCon = styled.div`
    width: 82.4rem;
    height: 4.8rem;
    border: 1px solid ${COLOR.GSD9};
    border-radius: 0.8rem;
    padding: 1.4rem 1.2rem;
`;
const CommentInput = styled.input`
    height: 2rem;
    border: none;
    font-size: 1.4rem;
    line-height: 1.4rem;
    width: 80rem;

    &::placeholder {
        font-size: 1.2rem;
    }
    &:focus {
        outline: none;
    }
`;
const NickNameCount = styled.div`
    width: 3.3rem;
    height: 1.6rem;
    font-size: 1.2rem;
    color: ${COLOR.GS8c};
    position: absolute;
    top: 14rem;
    right: 1rem;
`;
const AlertMSG = styled.div`
    height: 2rem;
    font-size: 1rem;
    color: ${COLOR.Red};
    display: ${props => props.display};
    position: absolute;
    left: 1rem;
    bottom: -2rem;
`;
function InputBox ({ width, title, contents }) {
    return (
        <InputContainer width={width}>
            <Title>{title}</Title>
            <FloatBox>
                {contents}
            </FloatBox>
        </InputContainer>
    )
}
function MyPageNavBox () {
    return(
        <NavContainer>
            <Mytitle>마이 페이지</Mytitle>
            <MyBtn active={true}>계정 관리</MyBtn>
            <br />
            <MyBtn active={false}>나의 이력 관리</MyBtn>
        </NavContainer>
    )
}
function InfoInput ({ borderColor, alert, display, placeholder, type, title, onChange, value, readOnly, onKeyUp }) {
    return (
        <InputCon>
            <InfoTitle>{title}</InfoTitle>
            <InputConBox borderColor={borderColor}>
            <InInput name="input-text" onKeyUp={onKeyUp} readOnly={readOnly} placeholder={placeholder} type={type} value={value} onChange={onChange} ></InInput>
            </InputConBox>
            <AlertMSG display={display}>{alert}</AlertMSG>
        </InputCon>
    )
}
function CorTitleA ({ value, onChange }) {
    return (
        <CorTitleBox>
            <CorTitleInput type='text' value={value} onChange={onChange}/>
        </CorTitleBox>
    )
}
function CorTitleB ({ value, onChange }) {
    return (
        <CorTitleBox>
            <CorTitleInput type='text' value={value} onChange={onChange}/>
        </CorTitleBox>
    )
}
function CorTitleC ({value, onChange}) {
    return (
        <CorTitleBox>
            <CorTitleInput type='text' value={value} onChange={onChange}/>
        </CorTitleBox>
    )
}
function BasicInfo ({ changeLogin }) {
    const [nickName, setNickName] = useState("");
    const [userName, setUserName] = useState("");
    const [user, setUser] = useState("");
    const [emailText, setEmailText] = useState("");
    const [phone, setPhone] = useState("");
    const [countText, setCountText] = useState('0/25');
    const [alertEmail, setAlertEmail] = useState('none');
    //인풋 핸들러
    useEffect(() => {
        preAxios.get('/main/userinfo')
        .then((res) => {
            setProfileImgURL(res.data.profil_path);
        })
        .catch((err) => {
            console.error(err);
        });
    }, []);
    useEffect(() => {
        preAxios.get('/mypage/name')
        .then((res) => {
            if(res.status === 200) {
                setUserName(res.data.userName);
            } else {
                setUserName('홍길동일까..?');
            }
        })
        .catch((error) => {console.error(error)});
        preAxios.get('/mypage/user')
        .then((res) => {
            if (res.status === 200) {
                setUser(res.data.user);
            } else {
                setUser('아이디/인재번호 불러오기 실패...');
            }
        })
        .catch((error) => {console.error(error)});
        preAxios.get('/mypage/nickname')
        .then((res) => {
            if (res.status === 200) {
                setNickName(res.data.nickName);
            } else {
                setNickName('닉네임이 없거나 불러오지 못했습니다ㅠㅠ');
            }
        })
        .catch((error) => {console.error(error)});
        preAxios.get('/mypage/email')
        .then((res) => {
            if (res.status === 200) {
                setEmailText(res.data.email);
            } else {
                setEmailText('닉네임이 없거나 불러오지 못했습니다ㅠㅠ');
            }
        })
        .catch((error) => {console.error(error)});
        preAxios.get('/mypage/phonenumber')
        .then((res) => {
            setPhone(res.data.phoneNumber);
        })
        preAxios.get('/main/userinfo')
        .then((res) => {
            if (res.data.profil_path) {
                setProfileImgURL(res.data.profil_path);
            };
        })
        .catch((err) => {
            console.error(err);
        });
        setCountText(nickName.length + '/25');
    }, [nickName]);
    function nickNameHandler (e) {
        const nickNameText = e.target.value;
        if (nickNameText.length <= 25){
            setNickName(nickNameText);
            setCountText(nickNameText.length + '/25');
        }
    }
    function emailHandler (e) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const emailText = e.target.value;
        setEmailText(emailText);
        if (re.test(emailText)) {
            setAlertEmail('none');
        } else {
            setAlertEmail('block');
        }
    }    
    function phonHandler (e) {
        const reB = /^\d{4}/;
        const reC = /^\d{3}[-]{1}/;
        const reD = /^\d{3}[-]{1}\d{1,4}/;
        const reE = /^\d{3}[-]{1}\d{5}/;
        const reF = /^\d{3}[-]{1}\d{4}[-]{1}/;
        const reG = /^\d{3}[-]{1}\d{4}[-]{1}\d{1,4}/;
        const phoneText = e.target.value;
        if(phoneText.length <= 3) {//숫자 3개일 때 그대로 적용
            console.log('숫자 3개만 있음');
            const reA = /^\d{0,3}/;
            if(reA.test(phoneText)){
                setPhone(phoneText);
            }
        } else if (phoneText.length === 4 && reB.test(phoneText)) {//숫자 4개에 하이픈 없을 때 하이픈 추가
            console.log('숫자 4개 입력');
            const phoneSplit = phoneText.split('');
            phoneSplit.splice(3, 0, '-');
            const phoneJoin = phoneSplit.join('');
            setPhone(phoneJoin);
        } else if (phoneText.length === 4 && reC.test(phoneText)) {//숫자 3개에 하이픈 있을 때 그대로 적용
            console.log('숫자 3개 하이픈 1개');
            setPhone(phoneText);
        } else if (phoneText.length >= 5 && phoneText.length <= 8 && reD.test(phoneText)){// 숫자 3개 + 하이픈 1개 + 숫자 1~4개일 때 그대로 적용
            console.log('숫자 3개 하이픈 1개 숫자 1~4개');
            setPhone(phoneText);
        } else if (phoneText.length === 9 && reE.test(phoneText)) {//숫자 3개 + 하이픈1개 + 숫자 5개 일 때 하이픈 추가
            console.log('숫자 3개 하이픈 1개 숫자 5개');
            const phoneSplit = phoneText.split('');
            phoneSplit.splice(8, 0, '-');
            const phoneJoin = phoneSplit.join('');
            setPhone(phoneJoin);
        } else if (phoneText.length === 9 && reF.test(phoneText)) {//숫자 3개 + 하이픈1개 + 숫자 4개 + 하이픈 1개 일 때 그대로 적용
            console.log('숫자 3개 하이픈 1개 숫자 4개 하이픈 1개');
            setPhone(phoneText);
        } else if (phoneText.length >= 9 && phoneText.length <= 13 && reG.test(phoneText)){//마지막 완성
            console.log('마지막 단계');
            setPhone(phoneText);
        }
    }
    function putEmail (e) {
        if (e.key === "Enter" && alertEmail === 'none') {
            alert('Email 적용 완료!')
            preAxios.put('/mypage/userupdate', {
                email: emailText,
            })
            .catch((error) => {
                console.error(error);
            })
        } else if (e.key === "Enter" && alertEmail === 'block') {
            alert('Email 형식이 올바른지 확인해주세요.:)');
        }
    }
    function putNickName (e) {
        if (e.key === "Enter") {
            alert('별명 적용 완료!')
            preAxios.put('/mypage/userupdate', {
                nickName: nickName,
            })
            .catch((error) => {
                console.error(error);
            })
        }
    }
    function putPhone (e) {
        if (e.key === "Enter") {
            alert('연락처 적용 완료!')
            console.log(phone);
            preAxios.put('/mypage/userupdate', {
                phoneNumber: phone,
            })
            .catch((error) => {
                console.error(error);
            })
        }
    }
    const [profileImgURL, setProfileImgURL] = useState(ProfileImage);

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
    return (
        <>
        <ProfileContainer>
            <ProfileImg src={profileImgURL ? profileImgURL : ProfileImage}/>
            <ProfileInput accept="image/jpg, image/png, image/jpeg, image/" type="file" id="profileUpLoad" onChange={fileAxios}/>
            <label htmlFor="profileUpLoad">
            <ImgCircle>
                <PhotoImg src={PhotoSrc} alt="프로필 사진 추가"/>
            </ImgCircle>
            </label>
        </ProfileContainer>
        <InputBoxCon>
            <InfoSubmit onClick={changeLogin}>변경하기</InfoSubmit>
            <InfoInput borderColor={COLOR.GSD9} display={'none'} placeholder={'아이디'} type={'text'} title={'아이디/인재번호'} value={user} readOnly={'readOnly'} />
            <InfoInput borderColor={COLOR.GSD9} display={'none'} placeholder={'새 비밀번호'} type={'password'} title={'비밀번호'} value={12345} readOnly={'readOnly'} />   
            <InfoInput borderColor={COLOR.GSD9} display={'none'} placeholder={'이름'} type={'text'} title={'이름'} value={userName} readOnly={'readOnly'} />
            <InfoInput borderColor={COLOR.GSD9} display={'none'} placeholder={'인재들에게 보일 별명을 적어 주세요!(25자 이내)'} type={'text'} title={'별명'} value={nickName} onKeyUp={putNickName} onChange={nickNameHandler}/>
            <NickNameCount>{countText}</NickNameCount>
            <InfoInput borderColor={alertEmail === 'block' ? COLOR.Red: COLOR.GSD9} display={alertEmail} alert={'정확한 이메일 형식으로 입력해 주세요.:)'} placeholder={'이메일을 추가 해주세요!'} type={'text'} title={'email'} value={emailText} onKeyUp={putEmail} onChange={emailHandler}/>
            <InfoInput borderColor={COLOR.GSD9} display={'none'} placeholder={'연락처'} type={'text'} title={'연락처'} value={phone} onKeyUp={putPhone} onChange={phonHandler}/>
        </InputBoxCon>
        </>
    )
}
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
const InterestMainBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
`;
const OccupationCon = styled.div`

`;
const OccupationBox = styled.div`
    width: 22.4rem;
    height: 16rem;
    border: 1px solid ${COLOR.GSD9};
    border-radius: 0.8rem;
    padding: 2.4rem 1.6rem;
`;
const OccupationSelect = styled.div`
    width: 9.3rem;
    height: 3.2rem;
    background-color: ${COLOR.GSF0};
    border: 1px dotted ${COLOR.GSBf};
    border-radius: 999rem;
    color: ${COLOR.GSBF};
    font-size: 1.4rem;
    line-height: 3.2rem;
    text-align: center;
    cursor: pointer;

    &:nth-child(2) {
        margin: 0.8rem 0;
    }
`;
const OccupationContent = styled.div`
    height: 3.2rem;
    background-color: ${props => props.color};
    border-radius: 999rem;
    padding: 0.8rem 1.4rem;
    font-size: 1.4rem;
    line-height: 1.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:nth-child(2) {
        margin: 0.8rem 0;
    }
`;
const OccupationSpan = styled.div`
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: ${COLOR.White};
`;
const CorporationCon = styled.div`
    margin-left: 3.2rem;
    position: relative;
`;
const CorporationBox = styled.div`
    width: 56.8rem;
    height: 4.2rem;
    border: 1px solid ${COLOR.GSD9};
    border-radius: 0.8rem;
    padding: 0.5rem 2.1rem;
    display: flex;
    flex-direction: row;
    position: relative;

    &:nth-child(5) {
        margin: 1.7rem 0;
    }
`;
const CorporationSubmit = styled.div`
    font-size: 1.4rem;
    color: ${COLOR.Primary};
    cursor: pointer;
    position: absolute;
    right: 0.8rem;
    top: 2.5rem;
`;
const CancelImg = styled.img`
    width: 0.933rem;
    height: 0.993rem;
    cursor: pointer;
`;
const OccuInput = styled.input`
    height: 1.6rem;
    border: none;
    color: ${COLOR.White};
    background-color: transparent;
    font-size: 1.4rem;
    line-height: 1.4rem;
    padding: 0;

    &:focus {
        outline: none;
    }
`;
const SelectCon = styled.div`
    width: 6.5rem;
    height: 3.2rem;
    border-radius: 0.8rem;
    border: 1px solid ${COLOR.GSD9};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 0.5rem;
    position: relative;
    margin-left: 2rem;
    z-index: ${props => props.index};
    background-color: ${COLOR.White};
`;
const SelectBtn = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
    display: block;
`;
const SelectListBox = styled.div`
    display: ${props => props.dis};
    padding: 1rem 0.3rem;
    position: absolute;
    left: 0;
    top: 3.5rem;
    width: 6rem;
    height: 6.2rem;
    border-radius: 0.8rem;
    background-color: ${COLOR.White};
    z-index: 1000;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2);
`;
const SelectItem = styled.div`
    position: relative;
    width: 5.4rem;
    height: 2.2rem;
    border-radius: 0.4rem;
    line-height: 2.2rem;
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: ${COLOR.PrimaryLight};
    }
`;
const CorTitleBox = styled.div`
    width: 12.8rem;
    height: 3.2rem;
    border: 1px solid ${COLOR.GSD9};
    border-radius: 0.8rem;
    padding: 0.8rem 0.4rem;
    margin-left: 6rem;
`;
const CorTitleInput = styled.input`
    width: 12rem;
    height: 1.6rem;
    font-size: 1.2rem;
    line-height: 1.6rem;
    padding: 0;
    border: none;

    &:focus {
        outline: none;
    }
`;
function Interest () {
    const [occuAToggle, setOccuAToggle] = useState(false);
    const [occuBToggle, setOccuBToggle] = useState(false);
    const [occuCToggle, setOccuCToggle] = useState(false);
    const [corSelectA, setCorSelectA] = useState(1);
    const [occuSelectA, setOccuSelectA] = useState(1);
    const [corSelectB, setCorSelectB] = useState(1);
    const [occuSelectB, setOccuSelectB] = useState(1);
    const [corSelectC, setCorSelectC] = useState(1);
    const [occuSelectC, setOccuSelectC] = useState(1);
    
    function occuHandlerA() {
        setOccuAToggle(!occuAToggle);
        setOccuInputToggleA(false);
    }
    function occuHandlerB() {
        setOccuBToggle(!occuBToggle);
        setOccuInputToggleB(false);
    }
    function occuHandlerC() {
        setOccuCToggle(!occuCToggle);
        setOccuInputToggleC(false);
    }
    const [corInputToggle, setCorInputToggle] = useState(false);
    function CorporationBtn() {
        setCorInputToggle(!corInputToggle);
        if (corInputToggle) {
            if (corSelectA === '실습..'){
                setCorSelectA('실습/인턴');
                setSelectTitleA('실습/인턴');
            }
            if (corSelectB === '실습..'){
                setCorSelectB('실습/인턴');
                setSelectTitleB('실습/인턴');
            }
            if (corSelectC === '실습..'){
                setCorSelectC('실습/인턴');
                setSelectTitleC('실습/인턴');
            }
            preAxios.put('/mypage/enterpriseinput', [
                {
                    title: corTitleValueA,
                    region: occuSelectA,
                    division: corSelectA,
                    key: 1,
                },
                {
                    title: corTitleValueB,
                    region: occuSelectB,
                    division: corSelectB,
                    key: 2,
                },
                {
                    title: corTitleValueC,
                    region: occuSelectC,
                    division: corSelectC,
                    key: 3,
                },
            ])
            .catch((error) => {console.error(error)});
        } else {
            if (corSelectA === '실습/인턴'){
                setCorSelectA('실습..');
                setSelectTitleA('실습..');
            }
            if (corSelectB === '실습/인턴'){
                setCorSelectB('실습..');
                setSelectTitleB('실습..');
            }
            if (corSelectC === '실습/인턴'){
                setCorSelectC('실습..');
                setSelectTitleC('실습..');
            }
        }
    }
    const cancelImgCor = cancelImage;
    const [occuInputToggleA, setOccuInputToggleA] = useState(false);
    function occuInputHandlerA(e) {
        if(e.key === 'Enter') {
            setOccuInputToggleA(!occuInputToggleA);
            preAxios.put('/mypage/jobinput', [
                {
                    title: occuTextA,
                    key: 1,
                }
            ])
            .catch((error) => {
                console.error(error);
            })
        } else {
            switch (e.detail) {
                case 2: {
                    setOccuInputToggleA(!occuInputToggleA);
                    break;
                }
                default: {
                    break;
                }
            }
        }
        
    }
    const [occuTextA, setOccuTextA] = useState('');
    function occuInputTextA (e) {
        const occuText = e.target.value;
        setOccuTextA(occuText);
    }
    const [occuInputToggleB, setOccuInputToggleB] = useState(false);
    function occuInputHandlerB(e) {
        if(e.key === 'Enter') {
            setOccuInputToggleB(!occuInputToggleB);
            preAxios.put('/mypage/jobinput',[
                {
                    title: occuTextB,
                    key: 2,
                }
            ])
            .catch((error) => {
                console.error(error);
            })
        } else {
            switch (e.detail) {
                case 2: {
                    setOccuInputToggleB(!occuInputToggleB);
                    break;
                }
                default: {
                    break;
                }
            }
        }
        
    }
    const [occuTextB, setOccuTextB] = useState('');
    function occuInputTextB (e) {
        const occuText = e.target.value;
        setOccuTextB(occuText);
    }
    const [occuInputToggleC, setOccuInputToggleC] = useState(false);
    function occuInputHandlerC(e) {
        if(e.key === 'Enter') {
            setOccuInputToggleC(!occuInputToggleC);
            preAxios.put('/mypage/jobinput',[
                {
                    title: occuTextC,
                    key: 3,
                }
            ])
            .catch((error) => {
                console.error(error);
            })
        } else {
            switch (e.detail) {
                case 2: {
                    setOccuInputToggleC(!occuInputToggleC);
                    break;
                }
                default: {
                    break;
                }
            }
        }
        
    }
    
    const [occuTextC, setOccuTextC] = useState('');
    function occuInputTextC (e) {
        const occuText = e.target.value;
        setOccuTextC(occuText);
    }

    function stopEvent (e) {
        e.stopPropagation();
    }

    const imgUp = upImage;
    const imgDown = downImage;
    //관심 기업 취업/인턴 구분 Selector 
    //1순위
    const [selectDisA, setSelectDisA] = useState('none');
    const [selectTitleA, setSelectTitleA] = useState('취업');
    function SelectCorA () {
        function selectToggleBtnA () {
            if (selectDisA === 'none') {
                setSelectDisA('block');
            } else {
                setSelectDisA('none');
            }
        }
        function selectA () {
            setSelectTitleA('취업');
            setSelectDisA('none');
            setCorSelectA('취업');
        }
        function selectB () {
            setSelectDisA('none');
            setSelectTitleA('실습..');
            setCorSelectA('실습/인턴');
        }
        return (
            <SelectCon>
                <div>
                {selectTitleA}
                </div>
                {selectDisA === 'none' ? <SelectBtn src={imgDown} onClick={selectToggleBtnA}/> : <SelectBtn src={imgUp} onClick={selectToggleBtnA}/>}
                <SelectListBox dis={selectDisA}>
                    <SelectItem onClick={selectA}>취업</SelectItem>
                    <SelectItem onClick={selectB}>실습/인턴</SelectItem>
                </SelectListBox>
            </SelectCon>
        )
    }
    //2순위
    const [selectDisB, setSelectDisB] = useState('none');
    const [selectTitleB, setSelectTitleB] = useState('취업');
    function SelectCorB () {
        function selectToggleBtnB () {
            if (selectDisB === 'none') {
                setSelectDisB('block');
            } else {
                setSelectDisB('none');
            }
        }
        function selectA () {
            setSelectTitleB('취업');
            setSelectDisB('none');
            setCorSelectB('취업')
        }
        function selectB () {
            setSelectDisB('none');
            setSelectTitleB('실습..');
            setCorSelectB('실습/인턴');
        }
        return (
            <SelectCon>
                <div>
                {selectTitleB}
                </div>
                {selectDisB === 'none' ? <SelectBtn src={imgDown} onClick={selectToggleBtnB}/> : <SelectBtn src={imgUp} onClick={selectToggleBtnB}/>}
                <SelectListBox dis={selectDisB}>
                    <SelectItem onClick={selectA}>취업</SelectItem>
                    <SelectItem onClick={selectB}>실습/인턴</SelectItem>
                </SelectListBox>
            </SelectCon>
        )
    }
    //3순위
    const [selectDisC, setSelectDisC] = useState('none');
    const [selectTitleC, setSelectTitleC] = useState('취업');
    function SelectCorC () {
        function selectToggleBtnC () {
            if (selectDisC === 'none') {
                setSelectDisC('block');
            } else {
                setSelectDisC('none');
            }
        }
        function selectA () {
            setSelectTitleC('취업');
            setSelectDisC('none');
            setCorSelectC('취업');
        }
        function selectB () {
            setSelectDisC('none');
            setSelectTitleC('실습..');
            setCorSelectC('실습/인턴');
        }
        return (
            <SelectCon>
                <div>
                {selectTitleC}
                </div>
                {selectDisC === 'none' ? <SelectBtn src={imgDown} onClick={selectToggleBtnC}/> : <SelectBtn src={imgUp} onClick={selectToggleBtnC}/>}
                <SelectListBox dis={selectDisC}>
                    <SelectItem onClick={selectA}>취업</SelectItem>
                    <SelectItem onClick={selectB}>실습/인턴</SelectItem>
                </SelectListBox>
            </SelectCon>
        )
    }
    //관심 기업 기업명
    
    //관심 기업 도내/도외 구분 Selector 
    //1순위
    const [selectDisAA, setSelectDisAA] = useState('none');
    const [selectTitleAA, setSelectTitleAA] = useState('도내');
    function SelectCorAA () {
        function selectToggleBtnAA () {
            if (selectDisAA === 'none') {
                setSelectDisAA('block');
            } else {
                setSelectDisAA('none');
            }
        }
        function selectA () {
            setSelectTitleAA('도내');
            setSelectDisAA('none');
            setOccuSelectA('도내');
        }
        function selectB () {
            setSelectDisAA('none');
            setSelectTitleAA('도외');
            setOccuSelectA('도외');
        }
        return (
            <SelectCon>
                <div>
                {selectTitleAA}
                </div>
                {selectDisAA === 'none' ? <SelectBtn src={imgDown} onClick={selectToggleBtnAA}/> : <SelectBtn src={imgUp} onClick={selectToggleBtnAA}/>}
                <SelectListBox dis={selectDisAA}>
                    <SelectItem onClick={selectA}>도내</SelectItem>
                    <SelectItem onClick={selectB}>도외</SelectItem>
                </SelectListBox>
            </SelectCon>
        )
    }
    //2순위
    const [selectDisBB, setSelectDisBB] = useState('none');
    const [selectTitleBB, setSelectTitleBB] = useState('도내');
    function SelectCorBB () {
        function selectToggleBtnBB () {
            if (selectDisBB === 'none') {
                setSelectDisBB('block');
            } else {
                setSelectDisBB('none');
            }
        }
        function selectA () {
            setSelectTitleBB('도내');
            setSelectDisBB('none');
            setOccuSelectB('도내');
        }
        function selectB () {
            setSelectDisBB('none');
            setSelectTitleBB('도외');
            setOccuSelectB('도외');
        }
        return (
            <SelectCon>
                <div>
                {selectTitleBB}
                </div>
                {selectDisBB === 'none' ? <SelectBtn src={imgDown} onClick={selectToggleBtnBB}/> : <SelectBtn src={imgUp} onClick={selectToggleBtnBB}/>}
                <SelectListBox dis={selectDisBB}>
                    <SelectItem onClick={selectA}>도내</SelectItem>
                    <SelectItem onClick={selectB}>도외</SelectItem>
                </SelectListBox>
            </SelectCon>
        )
    }
    //3순위
    const [selectDisCC, setSelectDisCC] = useState('none');
    const [selectTitleCC, setSelectTitleCC] = useState('도내');
    function SelectCorCC () {
        function selectToggleBtnCC () {
            if (selectDisCC === 'none') {
                setSelectDisCC('block');
            } else {
                setSelectDisCC('none');
            }
        }
        function selectA () {
            setSelectTitleCC('도내');
            setSelectDisCC('none');
            setOccuSelectC('도내');
        }
        function selectB () {
            setSelectDisCC('none');
            setSelectTitleCC('도외');
            setOccuSelectC('도외');
        }
        return (
            <SelectCon>
                <div>
                {selectTitleCC}
                </div>
                {selectDisCC === 'none' ? <SelectBtn src={imgDown} onClick={selectToggleBtnCC}/> : <SelectBtn src={imgUp} onClick={selectToggleBtnCC}/>}
                <SelectListBox dis={selectDisCC}>
                    <SelectItem onClick={selectA}>도내</SelectItem>
                    <SelectItem onClick={selectB}>도외</SelectItem>
                </SelectListBox>
            </SelectCon>
        )
    }
    //관심 기업명
    //1순위
    const [corTitleValueA, setCorTitleValueA] = useState('');
    function textHandlerA (e) {
        const textA = e.target.value;
        setCorTitleValueA(textA);
    }
    
    //2순위
    const [corTitleValueB, setCorTitleValueB] = useState('');
    function textHandlerB (e) {
        const textA = e.target.value;
        setCorTitleValueB(textA);
    }
    
    //3순위
    const [corTitleValueC, setCorTitleValueC] = useState('');
    function textHandlerC (e) {
        const textA = e.target.value;
        setCorTitleValueC(textA);
    }
    useEffect(() => {
        preAxios.get('/mypage/joboutput')
        .then((res) => {
            if (res.status === 200) {
                if (res.data[0].title.length > 0) {
                    setOccuTextA(res.data[0].title);
                    setOccuInputToggleA(true);
                    setOccuAToggle(true);
                } 
                if (res.data[1].title.length > 0) {
                    setOccuTextB(res.data[1].title);
                    setOccuInputToggleB(true);
                    setOccuBToggle(true);
                }
                if (res.data[2].title.length > 0) {
                    setOccuTextC(res.data[2].title);
                    setOccuInputToggleC(true);
                    setOccuCToggle(true);
                }
            } 
        })
        .catch((error) => {
            console.error(error);
        });

        preAxios.get('/mypage/enterpriseoutput')
        .then((res) => {
            if (res.status === 200) {
                setCorSelectA(res.data[0].division);
                setSelectTitleA(res.data[0].division);
                setCorTitleValueA(res.data[0].title);
                setOccuSelectA(res.data[0].region);
                setSelectTitleAA(res.data[0].region);

                setCorSelectB(res.data[1].division);
                setSelectTitleB(res.data[1].division);
                setCorTitleValueB(res.data[1].title);
                setOccuSelectB(res.data[1].region);
                setSelectTitleBB(res.data[1].region);

                setCorSelectC(res.data[2].division);
                setSelectTitleC(res.data[2].division);
                setCorTitleValueC(res.data[2].title);
                setOccuSelectC(res.data[2].region);
                setSelectTitleCC(res.data[2].region);
            }
        })
        .catch((error) => {
            console.error(error);
        })
        
    }, [])
   
    return (
        <InterestMainBox>
            <OccupationCon>
                <CommentTitle>나의 관심 직군</CommentTitle>
                <OccupationBox>
                    {occuAToggle ?
                        <OccupationContent color={'#b093e7'} onClick={occuInputHandlerA}>
                            {occuInputToggleA ? <OccuInput onKeyUp={occuInputHandlerA} onClick={stopEvent} value={occuTextA} onChange={occuInputTextA}/> : <OccupationSpan>{occuTextA}</OccupationSpan>}
                            <CancelImg src={cancelImgCor} onClick={occuHandlerA}/>
                        </OccupationContent> 
                        : <OccupationSelect onClick={occuHandlerA}>+ 추가하기</OccupationSelect>
                    }
                    {occuBToggle ? 
                        <OccupationContent color={'#a8da3d'} onClick={occuInputHandlerB}>
                            {occuInputToggleB ? <OccuInput onKeyUp={occuInputHandlerB} onClick={stopEvent} value={occuTextB} onChange={occuInputTextB}/> : <OccupationSpan>{occuTextB}</OccupationSpan>}
                        <CancelImg src={cancelImgCor} onClick={occuHandlerB}/>
                        </OccupationContent> 
                        : <OccupationSelect onClick={occuHandlerB}>+ 추가하기</OccupationSelect>
                    }
                    {occuCToggle ? 
                        <OccupationContent color={'#81aae8'} onClick={occuInputHandlerC}>
                            {occuInputToggleC ? <OccuInput onKeyUp={occuInputHandlerC} onClick={stopEvent} value={occuTextC} onChange={occuInputTextC}/> : <OccupationSpan>{occuTextC}</OccupationSpan>}
                        <CancelImg src={cancelImgCor} onClick={occuHandlerC}/>
                        </OccupationContent> 
                        : <OccupationSelect onClick={occuHandlerC}>+ 추가하기</OccupationSelect>
                    }
                </OccupationBox>
            </OccupationCon>
            <CorporationCon>
                {corInputToggle ? <CorporationSubmit onClick={CorporationBtn}>완료하기</CorporationSubmit> : <CorporationSubmit onClick={CorporationBtn}>변경하기</CorporationSubmit>}
                <CommentTitle>나의 관심 기업</CommentTitle>
                <CorTitleName>
                    <CorTitleCon>구분</CorTitleCon>
                    <CorTitleCon>기업명</CorTitleCon>
                    <CorTitleCon>지역</CorTitleCon>
                </CorTitleName>
                <CorporationBox>
                    <SpanCor>1/</SpanCor>
                    {corInputToggle ?
                    <> 
                    <SelectCorA index={1}/>
                    <CorTitleA value={corTitleValueA} onChange={textHandlerA}/>
                    <SelectCorAA index={1}/>
                    </> : true ? <>
                    <DivisionCon>{corSelectA}</DivisionCon>
                    <EnterpriseCon>{corTitleValueA}</EnterpriseCon>
                    <ResionCon>{occuSelectA}</ResionCon>
                    </> :
                    <SpanCorTog>변경하기를 눌러 나의 관심 기업을 추가해 보세요.</SpanCorTog>
                    }
                    
                </CorporationBox>
                <CorporationBox>
                    <SpanCor>2/</SpanCor>
                    {corInputToggle ?
                    <> 
                    <SelectCorB index={2}/>
                    <CorTitleB value={corTitleValueB} onChange={textHandlerB} />
                    <SelectCorBB index={2}/>
                    </> : true ? <>
                    <DivisionCon>{corSelectB}</DivisionCon>
                    <EnterpriseCon>{corTitleValueB}</EnterpriseCon>
                    <ResionCon>{occuSelectB}</ResionCon>
                    </> :
                    <SpanCorTog>변경하기를 눌러 나의 관심 기업을 추가해 보세요.</SpanCorTog>
                    }
                </CorporationBox>
                <CorporationBox>
                    <SpanCor>3/</SpanCor>
                    {corInputToggle ?
                    <> 
                    <SelectCorC index={3}/>
                    <CorTitleC value={corTitleValueC} onChange={textHandlerC} />
                    <SelectCorCC index={3}/>
                    </> : true ? <>
                    <DivisionCon>{corSelectC}</DivisionCon>
                    <EnterpriseCon>{corTitleValueC}</EnterpriseCon>
                    <ResionCon>{occuSelectC}</ResionCon>
                    </> :
                    <SpanCorTog>변경하기를 눌러 나의 관심 기업을 추가해 보세요.</SpanCorTog>
                    }
                </CorporationBox>
            </CorporationCon>
        </InterestMainBox>
    )
}
const DivisionCon = styled.div`
    width: 6rem;
    height: 3.2rem;
    font-size: 1.2rem;
    line-height: 3.2rem;
    margin-left: 1.5rem;
`;
const EnterpriseCon = styled.div`
    width: 12.8rem;
    height: 3.2rem;
    font-size: 1.2rem;
    line-height: 3.2rem;
    margin-left: 7rem;
`;
const ResionCon = styled.div`
    width: 6rem;
    heigth: 3.2rem;
    font-size: 1.2rem;
    line-height: 3.2rem;
    margin-left: 2.5rem;
`;
const CorTitleName = styled.div`
    width: 29.4rem;
    height: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    left: 18rem;
    top: 3rem;
`;
const CorTitleCon = styled.div`
    height: 2rem;
    font-size: 1.4rem;
    line-height: 2rem;
`;
const SpanCor = styled.span`
    margin-right: 11.5rem;
`;
const SpanCorTog = styled.span`
    color: ${COLOR.GS8c};
    font-size: 1.2rem;
`;
function MyMainBox({ changeLogin }) {
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        preAxios.get('/mypage/motto')
        .then((res) => {
            if(res.status === 200) {
                setCommentText(res.data.motto);
            } else {
                setCommentText('한 줄 다짐을 불러오지 못했어요ㅠㅠ');
            }
        })
        .catch((error) => {console.error(error)});
    }, [])

    function commentHandler (e) {
        const commentValue = e.target.value;
        if (commentValue.length <= 60) {
            setCommentText(commentValue);
        }
    }
    function commentPut (e) {
        if (e.key === 'Enter') {
            preAxios.put('/mypage/userupdate', {
                motto: commentText,
            })
            .catch((error) => {console.error(error)})
            alert('한 줄 다짐 적용 완료!')
        }
    }
    return (
        <MainContainer>
            <InputBox
                width={'82.4rem'}
                title={'기본 정보'}
                contents={<BasicInfo changeLogin={changeLogin}/>}
            />
            <CommentBox>
            <CommentTitle>한 줄 다짐</CommentTitle>
            <CommentInputCon>
                <CommentInput onKeyUp={commentPut} oplaceholder="나의 한 줄 다짐을 적어 보세요! (60자 이내)" type='text' value={commentText} onChange={commentHandler}/>
            </CommentInputCon>
            </CommentBox>
            <Interest />
        </MainContainer>
    )
}


function MyPage() {
    const [loginBox, setLoginBox] = useState(false);
    const movePage = useNavigate();

    function moveMainPage() {
        movePage('/main');
    }
    function loginBoxToggle () {
        setLoginBox(!loginBox);
    }
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
    return (
        <>
            { !loginBox ? <></> : <PwChange cancelChange={loginBoxToggle}/>}
            <div className='start'></div>
            <div className='main-container'>
                <div className='left-container'>
                    <img className='main-logo-img'  onClick={moveMainPage} src={LogoImg} alt="Fullio Logo" />
                    <NavBox />
                    <WaveButton onClick={clickLogout}>로그아웃</WaveButton>
                </div>
                <MyPageNavBox />
                <MyMainBox changeLogin={loginBoxToggle}/>
            </div>
        </>
    )
}
export default MyPage;