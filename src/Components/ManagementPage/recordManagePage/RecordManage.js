import styled from "styled-components";
import MainLayout from "../ManagementLayout/MainLayout";
import "./main.css";
import BoxShadow from "../../MainPage/StyleComponents";
import COLOR from "../../MainPage/COLOR";
import { useState } from "react";
import { useEffect } from "react";
import RecordMainBox from "../../RecordPage/RecordBox/RecordMainBox";
import adminAxios from "../../adminAxios";

function SelectListBox ({onClick, member, memberNumber, title, reset, setReset, category, setRecordArray, setSelectPerson}) {
    const [backColor, setBackColor] = useState('white');
    useEffect(() => {
        if (reset === 2) {
            setReset(0);
            setBackColor('white');
        }
    }, [reset])
    function colorHandler () {
        if (backColor === 'white') {
            setSelectPerson(memberNumber);
            setReset(2);
            setTimeout(() => {
                setBackColor(COLOR.Primary); 
            }, 1) 
        } else {
            setBackColor('white');
            setSelectPerson('');
        }
        //adminAxios 작성 -> 해당 인재 기록 불러오기
        member(memberNumber);
        adminAxios.post('manage/member/management/records/output', {
            category: category,
            memberNumber: memberNumber,
        })
        .then((res) => {
            setRecordArray(res.data.reverse());
        })
        .catch((err) => {
            console.error(err);
        })
    }
    return <SelectItemBox color={backColor} onClick={colorHandler}>{title}</SelectItemBox>
}
function RecordManage() {

    const [member, setMember] = useState();
    const [resetColor, setResetColor] = useState(0);
    const [selectList, setSelectList] = useState([]);
    const [recordArray, setRecordArray] = useState([]);
    const [category, setCategory] = useState('공통교육');
    const [value, setValue] = useState();
    const [selectPerson, setSelectPerson] = useState('');
    const admin = true;
    function valueChange (e) {
        const value = e.target.value;
        setValue(value);
        adminAxios.post('manage/member/management/output')
        .then((res) => {
            setSelectList(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }
    function categoryHandler(e) {
        const value = e.target.innerHTML;
        setCategory(value);
        if (selectPerson !== '') {
            adminAxios.post('manage/member/management/records/output', {
                category: value,
                memberNumber: selectPerson,
            })
            .then((res) => {
                setRecordArray(res.data.reverse());
            })
            .catch((err) => {
                console.error(err);
            })
        }

    }
    return (
        <MainLayout page={'성찰일지'} content={
            <MainRecordContainer>
                <div className="record_nav_container">
                    <select value={value} className="nav_box" onChange={(e) => valueChange(e)}>
                        <option value={8}>8기</option>
                        <option value={7}>7기</option>
                        <option value={6}>6기</option>
                        <option value={5}>5기</option>
                        <option value={4}>4기</option>
                        <option value={3}>3기</option>
                        <option value={2}>2기</option>
                        <option value={1}>1기</option>
                    </select>
                    <button style={category === '공통교육' ? {backgroundColor: COLOR.Primary,} : {backgroundColor: 'white',}} onClick={(e) => categoryHandler(e)}>공통교육</button>
                    <button style={category === '심화교육' ? {backgroundColor: COLOR.Primary,} : {backgroundColor: 'white',}} onClick={(e) => categoryHandler(e)}>심화교육</button>
                </div>
                <div className="record_select_person">
                    {selectList.map((item, index) => {
                        return <SelectListBox 
                                    setSelectPerson={setSelectPerson}
                                    member={setMember}
                                    reset={resetColor} 
                                    setReset={setResetColor} 
                                    key={index} 
                                    title={item.name}
                                    category={category}
                                    setRecordArray={setRecordArray}
                                    memberNumber={item.memberNumber}
                                />
                    })}
                </div>
                <div className="record_content_container">
                    {recordArray.map((item, index) => {
                        return <RecordMainBox memberNumber={member} category={category} admin={admin} id={item.id} key={index} item={item} />
                    })}
                </div>
            </MainRecordContainer>
        }/>
    )
};
const SelectItemBox = styled.div`
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    ${BoxShadow};
    border-radius: 0.8rem;
    text-align: center;
    margin-bottom: 1rem;
    cursor: pointer;
    background-color: ${props => props.color};

    &:hover {
        background-color: ${COLOR.Primary};
    }
`;
const MainRecordContainer = styled.div`
    z-index: 1;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 0.8rem;
    padding: 1.6rem;
    ${BoxShadow};
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-template-rows: 1fr 10fr;
`;
export default RecordManage;