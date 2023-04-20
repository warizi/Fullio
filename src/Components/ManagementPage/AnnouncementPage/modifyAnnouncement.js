import { useState } from "react";
import styled from "styled-components";
import adminAxios from "../../adminAxios";
import { useEffect } from "react";
import COLOR from "../../MainPage/COLOR";

function ModifyAnnouncement ({ setNoticeArray, id, setModiToggle, content, title, name}) {
    const [titleValue, setTitleValue] = useState(``);
    const [contentValue, setContentValue] = useState(``);
    
    useEffect(() => {
        setTitleValue(title);
        setContentValue(content);
    }, [])

    function titleChange (e) {
        const text = e.target.value;
        setTitleValue(text);
    }
    function contentChange (e) {
        const text = e.target.value;
        setContentValue(text);
    }
    function cancelNew () {
        if(window.confirm('작성을 취소하시겠습니까?')){
            setModiToggle(false);
            setTitleValue('');
            setContentValue('');
        }
    }
    //새로 작성 Axios 
    function submitNew () {
        //필요시 시간 추출
        // let today = new Date();   
        // let hours = today.getHours(); // 시
        // let minutes = today.getMinutes();  // 분
        // let seconds = today.getSeconds();  // 초
        // let year = today.getFullYear(); // 년도
        // let month = today.getMonth() + 1;  // 월
        // let date = today.getDate();  // 날짜
        // let day = today.getDay();  // 요일
        // console.log(`${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초`);
        
        if(window.confirm('글을 수정하겠습니까?')){
            adminAxios.put('notice/detail/input', {
                title: titleValue,
                detail: contentValue,
                id: id,
            })
            .then((res) => {
                adminAxios.get('notice/output')
                .then((res) => {
                    setNoticeArray([...res.data]);
                    alert('성공');
                    setModiToggle(false);
                })
                .catch((err) => {
                    console.error(err);
                })
            })
            .catch((err) => {
                console.error(err);
            });
            setModiToggle(false);
        }
    }
    return (
        <NewCon>
            <TitleInput type="text" placeholder="제목" value={titleValue} onChange={titleChange}/>
            <NameCon>{name}</NameCon>
            <ContentTextArea placeholder="공지 내용" value={contentValue} onChange={contentChange}/>
            <SubmitBtn onClick={cancelNew}>작성취소</SubmitBtn>
            <SubmitBtn onClick={submitNew}>작성</SubmitBtn>
        </NewCon>
    )
}
const SubmitBtn = styled.button`
    display: inline-block;
    width: 10rem;
    height: 3rem;
`;
const ContentTextArea = styled.textarea`
    width: 110rem;
    height: 50rem;
    resize: none;
`;
const NewCon = styled.div`
    width: 111rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3000;
    background-color: ${COLOR.Primary};
`;
const NameCon = styled.div`
    display: inline-block;
    width: 15rem;
    height: 6rem;
    text-align: center;
    font-size: 2rem;
    line-height: 6rem;
    border: 1px solid black;
`;
const TitleInput = styled.input`
    display: inline-block;
    width: 90rem;
    height: 6rem;
    font-size: 1.6rem;
    line-height: 5rem;
`;
export default ModifyAnnouncement;