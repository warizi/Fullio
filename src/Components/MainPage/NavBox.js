import styled from "styled-components"
import COLOR from "./COLOR";
import BoxShadow from "./StyleComponents";
import WavePrimary from "../../image/wavePrimary.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function NavBox ({ selectColor }) {
    const moveRecordPage = useNavigate();
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');
    useEffect(() => {
        if (selectColor === '공지') {
            setThird('background-position-y: -10rem;background-size: 400% 400%;color: white;');
        } else if (selectColor === '기록') {
            setFirst('background-position-y: -10rem;background-size: 400% 400%;color: white;');   
        } else if (selectColor === '포트폴리오'){
            setSecond('background-position-y: -10rem;background-size: 400% 400%;color: white;');
        }
    }, [])
    function moveRecordPageClick () {
        moveRecordPage('/main/Record');
    }
    function movePageClick () {
        moveRecordPage('/main/announcement');
    }
    function movePageMain () {
        moveRecordPage('/main');
    }
    return (
        <NavContainer className="nav-container">
            <Button selectColor={first} onClick={moveRecordPageClick}>기록</Button>
            <Button selectColor={second} onClick={movePageMain}>포트폴리오</Button>
            <Button selectColor={third} onClick={movePageClick}>공지</Button>
        </NavContainer>
    )
}

const NavContainer =styled.div`
    background-color: ${COLOR.White};
    width: 21.6rem;
    height: 23.3rem;
    border-radius: 0.8rem;
    padding: 2rem 1.6rem;
    ${BoxShadow}
`;
const waveButtonPrimary = WavePrimary;
const Button = styled.button`
    width: 18.4rem;
    height: 5.2rem;
    border: 1px solid ${COLOR.Primary};
    text-align: center:
    line-height: 5rem;
    color: ${COLOR.Primary}; 
    background-color: ${COLOR.White};
    border-radius: 0.8rem;
    font-size: 1.6rem;
    cursor: pointer;
    background-image: url(${waveButtonPrimary});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: 0.3s;
    background-position-y: 5rem;

    ${props => props.selectColor};

    &:hover {
        color: ${COLOR.White};
        background-position-y: -10rem;
        background-size: 400% 400%;

    }
    &:nth-child(2) {
        margin: 1.7rem 0;
    }
`;

export default NavBox;