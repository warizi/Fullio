import styled from "styled-components";
import COLOR from "../MainPage/COLOR";

function PrimaryBasicButton({ width, height, onClick, content}) {
    return (
        <ButtonContainer onClick={onClick} width={width} height={height}>
            {content}
        </ButtonContainer>
    )
}
const ButtonContainer = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${COLOR.Primary};
    border-radius: 0.8rem;
    color: white;
    cursor: pointer;
    font-size: 1.6rem;
    text-align: center;
    line-height: ${props => props.height};
    &:hover {
        background-color: ${COLOR.PrimaryDark};
    }
`;

export default PrimaryBasicButton;