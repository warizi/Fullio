import styled from "styled-components";
import COLOR from "../../MainPage/COLOR";
import { useState } from "react";
import adminAxios from "../../adminAxios";
import preAxios from "../../axios";
import ModifyAnnouncement from "../../ManagementPage/AnnouncementPage/modifyAnnouncement";

function BarLayout ({id, admin, date, number, title, name, setNoticeArray}) {
    const [contentToggle, setContentToggle] = useState('0');
    const [content, setContent] = useState('');
    const [writerCheck, setWriterCheck] = useState(false);
    const [modiToggle, setModiToggle] = useState(false);
    function contentClick () {
        console.log(writerCheck);
        if (contentToggle === '0') {
            setContentToggle('15rem');
        } else {
            setContentToggle('0');
        }
        // 클릭한 공지의 내용을 불러옵니다.
        if (admin === 'admin') {
            adminAxios.post('notice/detail/output', {
                id: id,
            })
            .then((res) => {
                setWriterCheck(res.data.check);
                setContent(res.data.detail);
            })
            .catch((err) => {
                console.error(err);
            })
        } else if (admin === 'none') {
            preAxios.post('notice/detail/output', {
                id: id,
            })
            .then((res) => {
                setContent(res.data.detail);
            })
            .catch((err) => {
                console.error(err);
            })
        }
    };
    function noticeDelete () {
        if (window.confirm('공지를 삭제하시겠습니까?')){
            adminAxios.post('notice/detail/delete', {
                id: id,
            })
            .then((res) => {
                //삭제하고 다시 불러옵니다.(admin만 가능)
                adminAxios.get('notice/output')
                .then((res) => {
                    setNoticeArray([...res.data]);
                })
                .catch((err) => {
                    console.error(err);
                })
            })
            .catch((err) => {
                console.error(err);
            })
        }
    }
    function modifyClick () {
        setModiToggle(true);
    }
    return (<>
        {modiToggle ? <ModifyAnnouncement setNoticeArray={setNoticeArray} id={id} setModiToggle={setModiToggle} content={content} title={title}/>: <></>}
        <BarCon onClick={contentClick}>
            <ItemCon width={'21rem'}>{date}</ItemCon>
            <ItemCon width={'12rem'}>{number}</ItemCon>
            <ItemCon width={'50rem'}>{title}</ItemCon>
            <ItemCon width={'21rem'}>{name}</ItemCon>
        </BarCon>
        <ContentCon>
            <ContentItem height={contentToggle}>
                {admin === 'admin' && writerCheck ? <CrudBtn onClick={modifyClick} style={{bottom: 0, right: '9rem'}}>수정</CrudBtn> :<></>}
                {admin === 'admin' && writerCheck ? <CrudBtn style={{bottom: 0, right: 0}} onClick={noticeDelete}>삭제</CrudBtn> : <></>}
                {content}
            </ContentItem>
        </ContentCon>
    </>)
};
const CrudBtn = styled.button`
    width: 8rem;
    height: 4rem;
    background-color: ${COLOR.Primary};
    border-radius: 0.8rem;
    border: none;
    color: white;
    position: absolute;
    cursor: pointer;
`;
const ContentItem = styled.div`
    width: 70rem;
    grid-column: 3/4;
    overflow: scroll;
    height: ${props => props.height};
    transition: 0.5s;
    position: relative;
    transform: translateX(11rem);
`;
const ContentCon = styled.div`
    position: relative;
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