import styled from "styled-components";
import COLOR from "../../MainPage/COLOR";


function PwChange ({ cancelChange }) {
    const [pwText, setPwText] = 
    function submitChange () {
        alert('비밀번호 변경');
        cancelChange();
    }
    return (
        <ViewBack>
            <PwContainer>
                <PwTitle>비밀번호 변경</PwTitle>
                <PwInput type="password" placeholder="현재 비밀번호"/>
                <AlertText></AlertText>
                <PwInput type="password" placeholder="새 비밀번호 (숫자 포함 4자 이상)"/>
                <AlertText></AlertText>
                <PwInput type="password" placeholder="새 비밀번호 확인"/>
                <AlertText></AlertText>
                <PwBtn color={true} onClick={cancelChange}>변경 취소</PwBtn>
                <PwBtn color={false} onClick={submitChange}>확인</PwBtn>
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
    border: none;
    padding: 0.9rem 1.2rem;
    font-size: 1.2rem
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


