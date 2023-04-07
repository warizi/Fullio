import styled from "styled-components";
import COLOR from "./COLOR";

const StrongContainer = styled.div`
    width: 25rem;
    height: 14.5rem;
    margin: 1.8rem 0;
    text-align: center;
    line-height: 14.8rem;
    color: #bfbfbf;
    font-size: 1.4rem;
`;

const StrongItem = styled.div`
    width: 24rem;
    height: 2.5rem;
    margin-bottom: 0.5rem;
    color: black;
    font-size: 1.4rem;
    line-height: 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;

    &:nth-child(5) {
        margin-bottom: 0;
    }
`;
const StrongCircle = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 999rem;
    background-color: yellow;
`;
const StrongCountCircle = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 999rem;
    background-color: ${COLOR.GSD9};
    margin-left: 0.6rem;
    margin-right: 1.4rem;
`;
const Span = styled.div`
    line-height: 2.5rem;
    display: inline-block;
    overflow: hidden;
`;

function StrongItems ({ value, count }) {
    return (
        <StrongItem>
            <StrongCircle>R</StrongCircle>
            <StrongCountCircle>{count}</StrongCountCircle>
            <Span>
            {value}
            </Span>
        </StrongItem>
    )
}


function StrongTest ({ strength }) {
    return (
        <StrongContainer>
            {strength.map((item) => {
                return <StrongItems key={item.key} value={item.title} count={item.count} ></StrongItems>
            })}
        </StrongContainer>
    )
}



export default StrongTest;