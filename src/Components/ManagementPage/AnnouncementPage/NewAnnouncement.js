import { useState } from "react";
import styled from "styled-components";
import adminAxios from "../../adminAxios";
import BoxShadow from "../../MainPage/StyleComponents";
import COLOR from "../../MainPage/COLOR";

function NewAnnouncement ({ reload, setReload, setNewToggle}) {
    const [titleValue, setTitleValue] = useState(``);
    const [contentValue, setContentValue] = useState(``);
    

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
            setNewToggle(false);
            setTitleValue('');
            setContentValue('');
        }
    }
    //새로 작성 Axios 
    function submitNew () {
        
        if(window.confirm('글을 게시하겠습니까?')){
            adminAxios.put('notice/detail/input', {
                title: titleValue,
                detail: contentValue,
            })
            .then((res) => {
                setNewToggle(false);
                setReload(reload + 1);
                alert('성공');
            })
            .catch((err) => {
                console.error(err);
            });
        }
    }
    return (
        <NewCon>
            <TitleInput type="text" placeholder="제목" value={titleValue} onChange={titleChange}/>
            <NameCon>MERGE</NameCon>
            <ContentTextArea placeholder="공지 내용" value={contentValue} onChange={contentChange}/>
            <SubmitBtn onClick={cancelNew}>작성취소</SubmitBtn>
            <SubmitBtn onClick={submitNew}>작성</SubmitBtn>
        </NewCon>
    )
}
const SubmitBtn = styled.div`
    cursor: pointer;
    background-color: ${COLOR.White};
    ${BoxShadow};
    line-height: 3rem;
    text-align: center;
    overflow: hidden;
    color: black;
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
export default NewAnnouncement;