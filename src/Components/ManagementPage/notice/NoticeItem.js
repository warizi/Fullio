import styled from "styled-components";
import COLOR from "../../MainPage/COLOR";

function NoticeItem ({ ballColor, checked, content, type, date, who }) {

    return (
        <Container>
            <TypeBall ballColor={ballColor}/>
            <TextBox color={checked}>
                [{type}] {who + content}
                <DateTag>{date}</DateTag>
            </TextBox>
        </Container>
    )
}
const DateTag = styled.div`
    font-size: 0.5rem;
    color: ${COLOR.GSBF};
    margin-left: 0.5rem;
    display: inline-block;
`;
const TextBox = styled.div`
    width: 100%;
    height: 3.2rem;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: ${props => !props.checked ? COLOR.Black : COLOR.GSBF };
    display: inline-block;
`;
const TypeBall = styled.div`
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 999rem;
    display: inline-block;
    background-color: ${props => props.ballColor};
    margin: 0.9rem 0;
    margin-right: 0.7rem;
`;
const Container = styled.div`
    width: 100%;
    height: 3.2rem;
    margin-bottom: 1.8rem;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`;
export default NoticeItem;