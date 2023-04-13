import styled from "styled-components";
import COLOR from "../MainPage/COLOR";
import NoticeItem from "../ManagementPage/notice/NoticeItem";


function NoticeLayout ({ noticeArray }) {
    return (
        <NoticeBoxContainer>
            <NoticeTitleCon>
                <NoticeTitle>알림</NoticeTitle>
                <ReadNotice>모두 읽음</ReadNotice>
            </NoticeTitleCon>
            <ContentBox>
                {noticeArray.map((item, index) => {
                    return <NoticeItem 
                                key={index}
                                ballColor={item.ballColor} 
                                checked={item.checked} 
                                content={item.content} 
                                who={item.who} 
                                date={item.date} 
                                type={item.type}
                            />
                })}
            </ContentBox>
        </NoticeBoxContainer>
    )
};
const ReadNotice = styled.span`
    color: ${COLOR.GSBF};
    font-size: 1.2rem;
    cursor: pointer;
`;
const NoticeTitle = styled.span`
    font-size: 1.4rem;
    font-weight: 500;
`;
const ContentBox = styled.div`
    height: 19rem;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const NoticeBoxContainer = styled.div`
    width: 33.2rem;
    height: 25.6rem;
    border-radius: 0.8rem;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
    background-color: ${COLOR.White};
    overflow: hidden;
    transition: 1s;
    padding: 1.6rem;
    z-index: 1000;
    grid-column: 1/2;
    grid-row: 1/2;
`;
const NoticeTitleCon = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
`;

export default NoticeLayout;