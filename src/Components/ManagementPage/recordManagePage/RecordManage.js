import styled from "styled-components";
import MainLayout from "../ManagementLayout/MainLayout";
import "./main.css";
import BoxShadow from "../../MainPage/StyleComponents";
import COLOR from "../../MainPage/COLOR";
import { useState } from "react";
import { useEffect } from "react";
import RecordMainBox from "../../RecordPage/RecordBox/RecordMainBox";
import adminAxios from "../../adminAxios";

// const recordDB = [
//     {   
//         category: 'category',
//         activityName: 'activityName',
//         team: 'team',
//         result: 'result',
//         capabilities: 'capability',
//         activity: 'activity',
//         reflection: 'reflection',
//         week: '1',
//         dateStart: 'dateStart',
//         dateEnd: 'dateEnd',
//     },
//     {
//         category: 'category',
//         activityName: 'activityName',
//         team: 'team',
//         result: 'result',
//         capabilities: 'capability',
//         activity: 'activity',
//         reflection: 'reflection',
//         week: '2',
//         dateStart: 'dateStart',
//         dateEnd: 'dateEnd',
//     },
//     {
//         category: 'category',
//         activityName: 'activityName',
//         team: 'team',
//         result: 'result',
//         capabilities: 'capability',
//         activity: 'activity',
//         reflection: 'reflection',
//         week: '3',
//         dateStart: 'dateStart',
//         dateEnd: 'dateEnd',
//     },
// ];
// const selectList = ['강성훈', '강인희', '강지용', '강지환', '고기훈', '고영준', '고재영', '김건우', '김광범', '김나연', '김남희', '김대한', '김동휘', '김로은', '김미정', '김민서', '김병준', '김보영', '김상훈', '김성서', '김소연', '김소은', '김정예', '김정원', '김지현', '김진성', '김진호', '김푸름', '김하정', '남병준', '문군호', '문승현', '문창현', '박경진', '박성영', '박세환', '변경환', '변재성', '송민혁', '송인정', '신지윤', '안수지', '양지선', '오주연', '원세종', '유승범', '이경헌', '이남호', '이수진', '이승현', '이재은', '이지현', '이채연', '이현아', '임소은', '임창현', '장재영', '장호', '정광호', '정루시아', '정유진', '정재석', '정지원', '조민지', '조송욱', '조수안', '조아라', '조윤수', '지예슬', '진승현', '최소영', '한주희', '황란경'];
function SelectListBox ({onClick, member, memberNumber, title, reset, setReset, category, setRecordArray}) {
    const [backColor, setBackColor] = useState('white');
    useEffect(() => {
        if (reset === 2) {
            setReset(0);
            setBackColor('white');
        }
    }, [reset])
    function colorHandler () {
        if (backColor === 'white') {
            setReset(2);
            setTimeout(() => {
                setBackColor(COLOR.Primary); 
            }, 1) 
        } else {
            setBackColor('white');
        }
        //adminAxios 작성 -> 해당 인재 기록 불러오기
        member(memberNumber);
        adminAxios.post('manage/member/management/records/output', {
            category: category,
            memberNumber: memberNumber,
        })
        .then((res) => {
            setRecordArray(res.data);
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
                    <button onClick={(e) => categoryHandler(e)}>공통교육</button>
                    <button onClick={(e) => categoryHandler(e)}>심화교육</button>
                </div>
                <div className="record_select_person">
                    {selectList.map((item, index) => {
                        return <SelectListBox 
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