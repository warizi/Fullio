import styled from "styled-components";
import BarLayout from "./BarLayout";
import COLOR from "../../MainPage/COLOR";
import './main.css';
import PaginationBtn from "./PaginationBtn";
import { useEffect, useState } from "react";

const announcementDB = [
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout'
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: ''
    },
];
function AnnouncementLayout ({ setNewToggle, newDisplay}) {
    const [page, setPage] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    useEffect(() => {
        const count = announcementDB.length / 4 + 1;
        const pageArray = [];
        for (let i = 1; i < count ; i++) {
            pageArray.push(i);
        }
        setPage([...pageArray]);
    }, [announcementDB])
    function newContent () {
        setNewToggle(true);
    }
    return (
        <ALCon>
            <h3>공지</h3>
            <BarCon>
                <ItemCon width={'21rem'}>날짜</ItemCon>
                <ItemCon width={'12rem'}>No.</ItemCon>
                <ItemCon width={'50rem'}>제목</ItemCon>
                <ItemCon width={'21rem'}>작성자</ItemCon>
            </BarCon>
            <NoticeCon>강조되는 공지입니다.</NoticeCon>
            {announcementDB.map( (item, index) => {
                const pageCalc = ((pageNum - 1) * 4);
                if(pageCalc <= index && pageCalc + 4 > index ){
                    return <BarLayout key={index} date={item.date} title={item.content} number={index + 1} name={item.name}></BarLayout>
                }
            } )}
            <NewNotice onClick={newContent} display={newDisplay}>글쓰기</NewNotice>
            <div className="pagination_container">
                {page.map((item, index) => {
                    return <PaginationBtn key={index} num={item} setPageNum={setPageNum}/>
                })}
            </div>
        </ALCon>
        
    )
};
const NewNotice = styled.div`
    display: ${props => props.display};
    text-align: center;
    line-height: 3rem;
    cursor: pointer;
    width: 6rem;
    height: 3rem;
    border: 1px solid ${COLOR.Primary};
`;
const NoticeCon = styled.div`
    width: 100%;
    height: 4rem;
    background-color: gray;
    margin-bottom: 1rem;
    font-size: 2rem;
    text-align: center;
`;
const BarCon = styled.div`
    font-size: 2rem;
    width: 108.2rem;
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
`;
const ItemCon = styled.div`
    border: 0.2rem solid ${COLOR.Primary};
    height: 4rem;
    width: ${props => props.width};
    border-radius: 0.8rem;
    text-align: center;
    line-height: 4rem;
`
const ALCon = styled.div`
    width: 111.4rem;
    height: 73.4rem;
    padding: 1.6rem;
    overflow: scroll;
`;
export default AnnouncementLayout;
