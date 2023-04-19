import styled from "styled-components";
import COLOR from "../MainPage/COLOR";
import BoxShadow from "../MainPage/StyleComponents";
import waveRecord from "../../image/recordWave.png";
import rightBtn from "../../image/rightBtn.png";
import downABtn from "../../image/downBtn.png";
import plusBtn from "../../image/plusBtn.png";
import { useState } from "react";
import preAxios from "../axios";
import { useEffect } from "react";

const dragDBA = [];

let dragStartIndex = null;
let dragEnterIndex = null;

function NavContainer ({ title, category, onChange, remove, setRemove }) {
    const [newCategoryText, setNewCategoryText] = useState('');
    const [newCategoryToggle, setNewCategoryToggle] = useState(false);
    const [modalDisplay, setModalDisplay] = useState('none');
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [deleteCategoryX, setDeleteCatgoryX] = useState(0);
    const [deleteCategoryY, setDeleteCatgoryY] = useState(0);
    const tagImgSrc = waveRecord;
    const rightImgSrc = rightBtn;
    const plusImgSrc = plusBtn;

    const [dragDB, setDragDB] = useState(dragDBA);

    const [img, setImg] = useState(rightBtn);
    const [dis, setDis] = useState('none');

    useEffect(() => {
        preAxios.post('logs/output', {
            category: 'title',
        })
        .then((res) => {
            setDragDB([...res.data]);
        })
        .catch((err) => {
            console.error(err);
        })
    }, [])

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
                setRemove(1);
            }
        }
    }
    function deep () {
        if(remove === 0){
            onChange('심화교육');
        }else {
            if(window.confirm("수정하던 기록이 있습니다. 이동하시겠습니까?")){
                onChange('심화교육');
                setRemove(1);
            }
        }
    }
    function dragStart (e, index) {
        dragStartIndex = index;
    }
    function dragEnter (e, index) {
        dragEnterIndex = index;
        // const startDBIndex = dragDB[dragStartIndex];
        // const enterDBIndex = dragDB[dragEnterIndex];
        // const dbNew = [...dragDB];
        // const enterindex = dbNew.indexOf(enterDBIndex);
        // dbNew.splice(enterindex + 1, 0, startDBIndex);
        // setDragDB([...dbNew]);
    }
    function dragLeave (e, index) {
        // const startDBIndex = dragDB[dragStartIndex];
        // const enterDBIndex = dragDB[dragEnterIndex];
        // const dbNew = [...dragDB];
        // const enterindex = dbNew.indexOf(enterDBIndex);
        // dbNew.splice(enterindex + 1, 1);
        // setDragDB([...dbNew]);
    }
    function dragEnd (e, index) {
        const startDBIndex = dragDB[dragStartIndex];
        const enterDBIndex = dragDB[dragEnterIndex];
        const dbNew = [...dragDB];
        dbNew.splice(dragStartIndex, 1);
        const enterindex = dbNew.indexOf(enterDBIndex);
        dbNew.splice(enterindex + 1, 0, startDBIndex);
        setDragDB([...dbNew]);
        dragStartIndex = null;
        dragEnterIndex = null;
        //드래그 앤 드랍을 마치면 변경 사항을 서버에 적용 Axios를 보냅니다.
        console.log(dbNew);

        preAxios.put('/logs/input', dbNew)
        .then((res) => {
            if(res.data.success) {
                //카테고리 리스트를 다시 불러옵니다. 
                preAxios.post('logs/output')
                .then((res) => {
                    setDragDB(res.data);
                })
                .catch((err) => {
                    console.error(err);
                })
            }
        })
        .catch((err) => {
            console.error(err);
        })
    }
    function categoryMouseDown (e, index) {
        if(e.button === 2) {
            const x = Math.abs(e.pageX);
            const y = Math.abs(e.pageY);
            setDeleteCatgoryX(x);
            setDeleteCatgoryY(y);
            setModalDisplay('block');
            setCategoryIndex(index);
            console.log(categoryIndex);
        }
    }
    window.addEventListener('click', () => {
        setModalDisplay('none');
    })
    function categryContextMenu (e) {
        e.preventDefault();
    }
    function deleteCateroryBtn () {
        const deleteDB = dragDB;
        deleteDB.splice(categoryIndex, 1);
        setDragDB(deleteDB);
    }
    function newCategoryBtn() {
        setNewCategoryToggle(true);
    }
    function newCategoryTextHanler (e) {
        const text = e.target.value;
        setNewCategoryText(text);
    }
    function submitNewCategory (e) {
        if (e.key === "Enter") {
            const newDB = dragDB;
            const length = newDB.length + 1;
            const newCategory = {
                rank: length,
                title: newCategoryText,
            }
            newDB.push(newCategory);
            setNewCategoryToggle(false);
            setNewCategoryText('');
            setDragDB([...newDB]);

            console.log('enter');
            preAxios.put('logs/input', [{
                rank: length,
                title: newCategoryText,
            }])
            .then((res) => {
                console.log(res.data);
                preAxios.post('/logs/output', {
                    category: 'title',
                })
                .then ((res) => {
                    setDragDB([...res.data]);
                })
                .catch((err) => {
                    console.error(err);
                })
            })
            .catch((err) => {
                console.error(err);
            });
        }
    }
    function activityCategory (e, categoryId) {
        if(remove === 0){
            onChange(categoryId);
        }else {
            if(window.confirm("수정하던 기록이 있습니다. 이동하시겠습니까?")){
                onChange(categoryId);
                setRemove(1);
            }
        }
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
                    <TagImg btn={true}  src={plusImgSrc} onClick={newCategoryBtn}/>
                </ListBox>
                
                {dragDB.map((item, index) => {
                     return (       
                            <ListBox 
                                onContextMenu={categryContextMenu}
                                onMouseDown={(e) => categoryMouseDown(e, index)}
                                draggable
                                key={index}
                                onDragStart={(e) => dragStart(e, index)}
                                onDragEnter={(e) => dragEnter(e, index)}
                                onDragEnd={(e) => dragEnd(e, index)}
                                onDragLeave={(e) => dragLeave(e, index)}
                                onClick={(e) => activityCategory(e, item.id)}
                            >
                                <TagImg btn={true} src={rightImgSrc} />
                                <Div>{item.title}</Div>
                            </ListBox>
                            )
                })}
                {newCategoryToggle ? 
                    <ListBox>
                        <TagImg btn={true} src={rightImgSrc} />
                        <NewCategoryInput placeholder="새로운 활동" value={newCategoryText} onChange={newCategoryTextHanler} onKeyDown={submitNewCategory}/>
                    </ListBox>
                : <></>}
            </CustomCategory>
            <DeleteCategryBox display={modalDisplay} onContextMenu={categryContextMenu} deleteCategoryX={deleteCategoryX} deleteCategoryY={deleteCategoryY} onClick={deleteCateroryBtn}>삭제</DeleteCategryBox>
        </NavBoxContainer>
    )
}
//카테고리 추가 input 
const NewCategoryInput = styled.input`
    vertical-align: 20%;   
    border-radius: 0.8rem;
    border: 1px solid ${COLOR.GSD9};
    height: 2.4rem;
    width: 14rem;
`;
//카테고리 삭제 창
const DeleteCategryBox = styled.div`
    display: ${props => props.display};
    position: absolute;
    top: ${props => props.deleteCategoryY + 1}px;
    left: ${props => props.deleteCategoryX + 1}px;
    width: 100px;
    height: 40px;
    background-color: white;
    z-index: 9999;
    font-size: 1.6rem;
    line-height: 40px;
    padding-left: 4rem;
    ${BoxShadow};
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