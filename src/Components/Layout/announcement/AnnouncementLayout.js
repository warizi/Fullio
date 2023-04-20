import styled from "styled-components";
import BarLayout from "./BarLayout";
import COLOR from "../../MainPage/COLOR";
import './main.css';
import PaginationBtn from "./PaginationBtn";
import { useEffect, useState } from "react";
import adminAxios from "../../adminAxios";
import preAxios from "../../axios";

const announceArray = [
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워',
        id: '1',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '',
        id: '2',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout',
        id: '3',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '',
        id: '4',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '',
        id: '5',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워',
        id: '6',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout',
        id: '7',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '',
        id: '8',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '',
        id: '9',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워',
        id: '10',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout',
        id: '11',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '',
        id: '12',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '',
        id: '13',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워',
        id: '14',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout',
        id: '15',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '',
        id: '16',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '',
        id: '17',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워',
        id: '18',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout',
        id: '19',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '',
        id: '20',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '',
        id: '21',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워',
        id: '22',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout',
        id: '23',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '',
        id: '24',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '',
        id: '25',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워',
        id: '26',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout',
        id: '27',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '',
        id: '28',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '',
        id: '29',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '내 모든 action 어린 너의 힘을 키워',
        id: '30',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '난 세상 중심의 Yout',
        id: '31',
    },
    {   
        date: '2023.01.04',
        name: 'MERGE',
        content: '',
        id: '32',
    },
];
function AnnouncementLayout ({reload, admin, setNewToggle, newDisplay}) {
    const [noticeArray, setNoticeArray] = useState(announceArray);
    const [page, setPage] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    useEffect(() => {
        if(admin === 'admin') {
            adminAxios.get('notice/default')
            .then((res) => {
                const array = res.data;

                setNoticeArray([...array.reverse()]);
            })
            .catch((err) => {
                console.error(err);
            });
        } else if (admin === 'none') {
            preAxios.get('notice/default')
            .then((res) => {
                const array = res.data;
                setNoticeArray([...array.reverse()]);
            })
            .catch((err) => {
                console.error(err);
            });
        };
    }, [reload])
    useEffect(() => {
        const count = noticeArray.length / 4 + 1;
        const pageArray = [];
        for (let i = 1; i < count ; i++) {
            pageArray.push(i);
        }
        setPage([...pageArray]);
    }, [noticeArray])
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
            {noticeArray.map( (item, index) => {
                const pageCalc = ((pageNum - 1) * 4);
                if(pageCalc <= index && pageCalc + 4 > index ){
                    return <BarLayout 
                                setNoticeArray={setNoticeArray} 
                                createdAt={item.createdAt}
                                admin={admin} 
                                key={index}
                                id={item.id} 
                                date={item.time} 
                                title={item.title} 
                                number={item.id} 
                                name={item.name}>
                            </BarLayout>
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
