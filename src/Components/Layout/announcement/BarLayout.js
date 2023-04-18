import styled from "styled-components";
import COLOR from "../../MainPage/COLOR";
import { useState } from "react";

function BarLayout ({date, number, title, name}) {
    const [contentToggle, setContentToggle] = useState('0');
    function contentClick () {
        if (contentToggle === '0') {
            setContentToggle('15rem');
        } else {
            setContentToggle('0');
        }
    };
    return (<>
        <BarCon onClick={contentClick}>
            <ItemCon width={'21rem'}>{date}</ItemCon>
            <ItemCon width={'12rem'}>{number}</ItemCon>
            <ItemCon width={'50rem'}>{title}</ItemCon>
            <ItemCon width={'21rem'}>{name}</ItemCon>
        </BarCon>
        <ContentCon>
            <ContentItem height={contentToggle}>
                {<><p>이것은 테스트 텍스트입니다.</p>
                <p>이것은 테스트 텍스트입니다.</p>
                <p>이것은 테스트 텍스트입니다.</p></>}
            </ContentItem>
        </ContentCon>
    </>)
};
const ContentItem = styled.div`
    width: 50rem;
    grid-column: 3/4;
    overflow: scroll;
    height: ${props => props.height};
    transition: 0.5s;
`;
const ContentCon = styled.div`
    width: 108.2rem;
    display: grid;
    grid-template-column: 2fr 1fr 7fr;
    margin-bottom: 1rem;
`;
const BarCon = styled.div`
    width: 108.2rem;
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
`;
const ItemCon = styled.div`
    border: 0.1rem solid ${COLOR.Primary};
    height: 4rem;
    width: ${props => props.width};
    border-radius: 0.8rem;
    text-align: center;
    line-height: 4rem;
`
export default BarLayout;