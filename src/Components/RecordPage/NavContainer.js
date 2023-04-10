import styled from "styled-components";
import COLOR from "../MainPage/COLOR";
import BoxShadow from "../MainPage/StyleComponents";
import waveRecord from "../../image/recordWave.png";
import rightBtn from "../../image/rightBtn.png";
import downABtn from "../../image/downBtn.png";
import plusBtn from "../../image/plusBtn.png";
import { useState } from "react";

const dragDBA = [
    {
        title: '내일프로젝트',
    },
    {
        title: '업프로젝트',
    },
    {
        title: 'CoP',
    },
    {
        title: '프론트엔드 스터디',
    },
]

let dragStartIndex = null;
let dragEnterIndex = null;

function NavContainer ({ title, category, onChange, remove, setRemove }) {
    const tagImgSrc = waveRecord;
    const rightImgSrc = rightBtn;
    const plusImgSrc = plusBtn;

    const [dragDB, setDragDB] = useState(dragDBA);

    const [img, setImg] = useState(rightBtn);
    const [dis, setDis] = useState('none');


    function downClick () {
        if(img === rightBtn) {
            setImg(downABtn);
            setDis('block');
        } else {
            setImg(rightBtn);
            setDis('none');
        }
    }
//remove는 배열길이 이를 통해 confirm확인 구현할 것!! 
    //일단 공통, 심화 두개로 변경하는 카테고리 스테이트 
    function common () {
        if(remove === 0){
            onChange('공통교육');
        }else {
            if(window.confirm("수정하던 기록이 있습니다. 이동하시겠습니까?")){
                onChange('공통교육');
                setRemove(0);
            }
        }
    }
    function deep () {
        if(remove === 0){
            onChange('심화교육');
        }else {
            if(window.confirm("수정하던 기록이 있습니다. 이동하시겠습니까?")){
                onChange('심화교육');
                setRemove(0);
            }
        }
    }
    function dragStart (e, index) {
        dragStartIndex = index;
        console.log('스타트 인덱스', index);
    }
    function dragEnter (e, index) {
        dragEnterIndex = index;
        const startDBIndex = dragDB[dragStartIndex];
        const enterDBIndex = dragDB[dragEnterIndex];
        const dbNew = [...dragDB];
        const enterindex = dbNew.indexOf(enterDBIndex);
        dbNew.splice(enterindex + 1, 0, startDBIndex);
        setDragDB([...dbNew]);
        console.log('엔터 인덱스', index);
    }
    function dragLeave (e, index) {
        const startDBIndex = dragDB[dragStartIndex];
        const enterDBIndex = dragDB[dragEnterIndex];
        const dbNew = [...dragDB];
        const enterindex = dbNew.indexOf(enterDBIndex);
        dbNew.splice(enterindex + 1, 1);
        console.log('지워짐', dbNew);
        setDragDB([...dbNew]);
        console.log('리브 인덱스', index);
    }
    function dragEnd (e, index) {
        // const startDBIndex = dragDB[dragStartIndex];
        // const enterDBIndex = dragDB[dragEnterIndex];
        // const dbNew = [...dragDB];
        // dbNew.splice(dragStartIndex, 1);
        // const enterindex = dbNew.indexOf(enterDBIndex);
        // dbNew.splice(enterindex + 1, 0, startDBIndex);
        // setDragDB([...dbNew]);
        dragStartIndex = null;
        dragEnterIndex = null;
    }

    return (
        <NavBoxContainer>
            <Title>{title}</Title>
            <BasicCategory>
                <ListBox>
                    <TagImg  src={tagImgSrc} />
                    <Div title='true'>주간 성찰 일지</Div>
                </ListBox>
                <ListBox>
                    <TagImg src={rightImgSrc} />
                    {category === '공통교육' ? <DivA onClick={common}>공통교육</DivA> : <Div onClick={common}>공통교육</Div>}
                </ListBox>
                <ListBox>
                    <TagImg src={rightImgSrc} />
                    {category === '심화교육' ? <DivA onClick={deep}>심화교육</DivA> : <Div onClick={deep}>심화교육</Div>}
                </ListBox>
            </BasicCategory>
            <CustomCategory>
                <ListBox>
                    <TagImg  src={tagImgSrc} />
                    <Div title='true'>활동 기록</Div>
                    <TagImg btn={true}  src={plusImgSrc} />
                </ListBox>
                
                <ListBox draggable={true}>
                    <TagImg onClick={downClick} btn={true} src={img} />
                    <Div>내일프로젝트</Div>
                </ListBox>
                        <DownCon display={dis}>
                        <ListBox>
                            <TagImg btn={true} src={rightImgSrc} />
                            <Div>내일프로젝트1</Div>
                        </ListBox>
                        <ListBox>
                            <TagImg btn={true} src={rightImgSrc} />
                            <Div>내일프로젝트2</Div>
                        </ListBox>
                        </DownCon>
                <ListBox draggable={true}>
                    <TagImg btn={true} src={rightImgSrc} />
                    <Div >특강</Div>
                </ListBox>
                <ListBox>
                    <TagImg btn={true} src={rightImgSrc} />
                    <Div>CoP</Div>
                </ListBox>
                <ListBox>
                    <TagImg btn={true} src={rightImgSrc} />
                    <Div>토익 스터디</Div>
                </ListBox>
                <ListBox>
                    <TagImg btn={true} src={rightImgSrc} />
                    <Div>GA4 스터디</Div>
                </ListBox>
            {/* 드래그 앤 드랍 연습 시작 */}
            <hr></hr>
            {dragDB.map((item, index) => {
                return    <DragListBox 
                            draggable 
                            key={index}
                            onDragStart={(e) => dragStart(e, index)}
                            onDragEnter={(e) => dragEnter(e, index)}
                            onDragEnd={(e) => dragEnd(e, index)}
                            onDragLeave={(e) => dragLeave(e, index)}
                        >
                           {item.title}
                        </DragListBox>
            })}
            {/* 드래그 앤 드랍 연습 끝 */}


            </CustomCategory>
        </NavBoxContainer>
    )
}

//드래그 앤 드랍 연습 시작 

const DragListBox = styled.div`
    width: 18rem;
    height: 3rem;
    background-color: ${COLOR.Primary};
    cursor: pointer;
    margin-bottom: 1rem;
`;

//드래그 앤 드랍 연습 끝
const DownCon = styled.div`
    display: ${props => props.display};
    margin-left: 2rem;
`;
const CustomCategory = styled.div`
    width: 21.6rem;
`;
const DivA = styled.span`
    vertical-align: 20%;
    cursor: ${props => props.title ? 'default' : 'pointer'};
    margin-right: 0.5rem;
    color: #3B85A3;
    text-decoration-line: underline;

    &:hover {
        color: ${props => props.title ? 'black' : '#3B85A3'};
        text-decoration-line: ${props => props.title ? 'none': 'underline'};
    }
`;
const Div = styled.span`
    vertical-align: 20%;
    cursor: ${props => props.title ? 'default' : 'pointer'};
    margin-right: 0.5rem;

    &:hover {
        color: ${props => props.title ? 'black' : '#3B85A3'};
        text-decoration-line: ${props => props.title ? 'none': 'underline'};
    }
`;
const TagImg = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.3rem;
    cursor: ${props => props.btn ? 'pointer' : 'default'};
`;
const ListBox = styled.div`
    width: 21.6rem;
    height: 2.4rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-decoration-line: ${'none'};
    margin-bottom: 1rem;
`;
const NavBoxContainer = styled.div`
    width: 21.6rem;
    height: 73.6rem;
    border-radius: 0.8rem;
    background-color: ${COLOR.White};
    margin: 8.8rem 1.6rem 0;
    ${BoxShadow};
    padding: 2rem 0 0 2.7rem;
`;
const Title = styled.h2`
    font-size: 2.4rem;
    line-height: 2.4rem;
    font-weight: 400;
    margin:0;
    margin-bottom: 3.5rem;
`;
const BasicCategory = styled.div`
    margin-bottom: 1rem;
    height: 11.4rem;
    width: 16.8rem;
    border-bottom: 1px solid black;
`;
export default NavContainer;