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
        
        if(window.confirm('글을 수정하겠습니까?')){
            adminAxios.put('notice/detail/input', {
                title: titleValue,
                detail: contentValue,
                id: id,
            })
            .then((res) => {
                adminAxios.get('notice/default')
                .then((res) => {
                    const array = res.data;
                    setNoticeArray([...array.reverse()]);
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