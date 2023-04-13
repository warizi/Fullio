import styled from "styled-components";
import redCheck from "../../../image/nolog.png";
import greenCheck from "../../../image/check.png";
import grayCheck from "../../../image/nocheck.png";

function CheckLog ({ index, item }) {
    return (
        <Container index={index}>
                {item.map((item, index) => {
                    if (typeof(item) === 'string') {
                        return <Name>{item}</Name>
                    } else {
                        return (
                                <Week key={index}>
                                    {item ? 
                                    <CheckImg src={greenCheck} alt="체크됨"/> : 
                                    (item === null ? 
                                    <CheckImg src={redCheck} alt="기록 없음"/> : 
                                    <CheckImg src={grayCheck} alt="체크안됨" />
                                    )}
                                </Week>
                            )
                    }
                })}
        </Container>
    )
}
const CheckImg = styled.img`
    width: 2.8rem;
    height: 2.8rem;
`;
const Week = styled.div`
    width: 6.4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Name = styled.div`
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    height: 4rem;
    width: 7rem;
    font-size: 1.6rem;
    line-height: 4rem;
    color: black;
    text-align: center;
    margin-right: 1rem;
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 4rem;
    border-radius: 0.8rem;
    background-color: ${props => 
        !(props.index % 2 === 0) ? 'rgba(0,0,0,0)': 'rgba(140, 201, 225, 0.2)'
    };

    &:hover {
        background-color: rgba(59, 133, 163, 0.3);
    }
`;
export default CheckLog;