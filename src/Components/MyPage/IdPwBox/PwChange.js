import styled from "styled-components";
import COLOR from "../../MainPage/COLOR";
import { useState } from "react";
import adminAxios from "../../adminAxios";
import preAxios from "../../axios";


function PwChange ({admin, cancelChange }) {
    const [pwText, setPwText] = useState('');
    const [newPwText, setNewPwText] = useState('');
    const [checkPwText, setCheckPwText] = useState('');
    const [pwError, setPwError] = useState('');
    const [newPwError, setNewPwError] = useState('');
    const [checkPwError, setCheckPwError] = useState('');
    const [pwBorder, setPwBorder] = useState('none');
    const [newPwBorder, setNewPwBorder] = useState('none');
    
    function pwChange (e) {
        const text = e.target.value;
        setPwText(text);
    };
    function newPwChange (e) {
        const text = e.target.value;
        setNewPwText(text);
    };
    function checkPwChange (e) {
        const text = e.target.value;
        setCheckPwText(text);
    };
    function clearAlert () {
        setPwBorder('none');
        setNewPwBorder('none');
        setPwError('');
        setNewPwError('');
        setCheckPwError('');
    };
    function submitChange () {
        if (pwText.length < 4) {
            setPwError('비밀번호를 확인해 주세요.');
            setPwBorder('1px solid red');
        } else if(pwText === newPwText) {
            //기존 패스워드와 새 패스워드가 같은 경우
            setNewPwError('기존 비밀번호와 다른 비밀번호를 입력해주세요.');
            setNewPwBorder('1px solid red');
        } else if (newPwText !== checkPwText) {
            //새 패스워드와 확인 패스워드가 일치하지 않은 경우
            setCheckPwError('새 비밀번호가 일치하지 않습니다.');
            setNewPwBorder('1px solid red');
        } else if (newPwText.length < 4) {
            //기존 패스워드와 새 패스워드가 같은 경우
            setNewPwError('비밀번호를 4자리 이상 입력해주세요.');
            setNewPwBorder('1px solid red');
        } else {
            if(window.confirm('비밀번호를 변경하시겠습니까?')) {
            // 비밀번호 변경 Axios 전송
            if (admin === 'admin') {
                adminAxios.post('change', {
                    pw1: pwText,
                    pw2: newPwText,
                })
                .then((res) => {
                    alert('변경완료!');
                    cancelChange();
                })
                .catch((err) => {
                    setPwError('비밀번호를 확인해 주세요.');
                    console.error(err);
                })
            } else if (admin === 'none') {
                preAxios.post('mypage/change', {
                    pw1: pwText,
                    pw2: newPwText,
                })
                .then((res) => {
                    alert('변경완료!');
                    cancelChange();
                })
                .catch((err) => {
                    setPwError('비밀번호를 확인해 주세요.');
                    console.error(err);
                })
            }
        }
        }};
    return (
        <ViewBack>
            <PwContainer>
                <PwTitle>비밀번호 변경</PwTitle>
                <PwInput border={pwBorder} onFocus={clearAlert} type="password" placeholder="현재 비밀번호" value={pwText} onChange={(e) => pwChange(e)}/>
                <AlertText>{pwError}</AlertText>
                <PwInput border={newPwBorder} onFocus={clearAlert} type="password" placeholder="새 비밀번호 (숫자 포함 4자 이상)" value={newPwText} onChange={(e) => newPwChange(e)} />
                <AlertText>{newPwError}</AlertText>
                <PwInput border={newPwBorder} onFocus={clearAlert} type="password" placeholder="새 비밀번호 확인" value={checkPwText} onChange={(e) => checkPwChange(e)} />
                <AlertText>{checkPwError}</AlertText>
                <PwBtn color={true} onClick={cancelChange}>변경 취소</PwBtn>
                <PwBtn onClick={submitChange} color={false} >확인</PwBtn>
            </PwContainer>
        </ViewBack>
    )
}
const PwTitle = styled.h4`
    text-align: center;
    font-weight: 500;
    display: block;
    font-size: 2rem;
    margin: 3.2rem auto;
`;
const PwBtn = styled.div`
    margin-top: 3.2rem;
    display: inline-block;
    border-radius: 0.8rem;
    text-align: center;
    line-height: 5.2rem;
    width: 15.4rem;
    height: 5.2rem;
    color: ${props => props.color ? COLOR.Primary : COLOR.White};
    margin-right: ${props => props.color ? '1.2rem' : 0};
    background-color: ${props => props.color ? COLOR.White : COLOR.Primary};
    border: 1px solid ${COLOR.Primary};
    cursor: pointer;
`;
const AlertText = styled.p`
    width: 32rem;
    height: 2.4rem;
    font-size: 1.2rem;
    margin: 0;
    padding-left: 1rem;
    color: ${COLOR.Red};
`;
const PwInput = styled.input`
    width: 32rem;
    height: 4.2rem;
    border-radius: 0.8rem;
    background-color: ${COLOR.GSF0};
    border: ${props => props.border};
    padding: 0.9rem 1.2rem;
    font-size: 1.2rem;
`;
const ViewBack = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    z-index: 5000;
`;
const PwContainer = styled.div`
    width: 37.4rem;
    height: 48rem;
    border-radius: 1.6rem;
    position: absolute;
    background-color: ${COLOR.White};
    padding: 2.7rem;
    z-index: 5001;
    left: calc((100vw - 37.4rem) / 2);
    top: 18.2rem;
`;

export default PwChange;
