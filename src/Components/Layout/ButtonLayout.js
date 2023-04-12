import COLOR from "../MainPage/COLOR";
import WavePrimary from "../../image/wavePrimary.png";
import styled from "styled-components";

const waveButtonPrimary = WavePrimary;
function ButtonLayout ({ title, onClick }) {
    return (
        <Button onClick={onClick}>{title}</Button>
        //props => selectColor로 선택된 버튼을 설정할 수 있습니다.
    )
}
const Button = styled.button`
    width: 18.4rem;
    height: 5.2rem;
    border: 1px solid ${COLOR.Primary};
    text-align: center;
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
    margin-bottom: 1.6rem;
    &:hover {
        color: ${COLOR.White};
        background-position-y: -10rem;
        background-size: 400% 400%;

    }
`;

export default ButtonLayout;