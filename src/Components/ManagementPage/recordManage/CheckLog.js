import styled from "styled-components";
import redCheck from "../../../image/nolog.png";
import greenCheck from "../../../image/check.png";
import grayCheck from "../../../image/nocheck.png";

function CheckLog ({ index, item }) {
    return (
        <Container index={index}>
                {item.map((item, indexIn) => {
                    if (typeof(item) === 'string') {
                        return <Name key={indexIn} index={index}>{item}</Name>
                    } else {
                        return (
                                <Week key={indexIn}>
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
    border-radius: 0.8rem 0 0 0.8rem;
    z-index: 19;
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
    background-color: ${props => 
        !(props.index % 2 === 0) ? 'white' : 'rgba(233, 244, 248, 1)'
    };
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 4rem;
    border-radius: 0.8rem;
    background-color: ${props => 
        !(props.index % 2 === 0) ? 'rgba(0,0,0,0)': 'rgba(233, 244, 248, 1)'
    };

    &:hover {
        background-color: rgba(158, 193, 208, 1);
    }
    &:hover div {
        background-color: rgba(158, 193, 208, 1);
    }
`;
export default CheckLog;