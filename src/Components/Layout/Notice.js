import styled from "styled-components";
import COLOR from "../MainPage/COLOR";

function NoticeLayout () {
    return (
        <NoticeBoxContainer>
            <NoticeTitleCon>

            </NoticeTitleCon>
        </NoticeBoxContainer>
    )
};


const NoticeBoxContainer = styled.div`
    position: absolute;
    top: 4rem;
    right: 2rem;
    width: 33.2rem;
    height: 25.6rem;
    border-radius: 0.8rem;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
    background-color: ${COLOR.White};
    overflow: hidden;
    transition: 1s;
    padding: 1.6rem;
    z-index: 1000;
    grid-column: 1/2;
    grid-row: 1/2;
`;
const NoticeTitleCon = styled.div`
    width: 22.1rem;
    height: 1.6rem;
    display: flex;
    justify-content: space-between;
`;

export default NoticeLayout;