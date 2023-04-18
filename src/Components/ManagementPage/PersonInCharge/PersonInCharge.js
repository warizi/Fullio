import styled from "styled-components";
import MainLayout from "../ManagementLayout/MainLayout";
import BoxShadow from "../../MainPage/StyleComponents";
import "./personInCharge.css";
import DndBox from "./DnDBox/DndBox";
import { useState } from "react";

const personDB = ['강성훈', '강인희', '강지용', '강지환', '고기훈', '고영준', '고재영', '김건우', '김광범', '김나연', '김남희', '김대한', '김동휘', '김로은', '김미정', '김민서', '김병준', '김보영', '김상훈', '김성서', '김소연', '김소은', '김정예', '김정원', '김지현', '김진성', '김진호', '김푸름', '김하정', '남병준', '문군호', '문승현', '문창현', '박경진', '박성영', '박세환', '변경환', '변재성', '송민혁', '송인정', '신지윤', '안수지', '양지선', '오주연', '원세종', '유승범', '이경헌', '이남호', '이수진', '이승현', '이재은', '이지현', '이채연', '이현아', '임소은', '임창현', '장재영', '장호', '정광호', '정루시아', '정유진', '정재석', '정지원', '조민지', '조송욱', '조수안', '조아라', '조윤수', '지예슬', '진승현', '최소영', '한주희', '황란경'];
const selectDB = [];
function PersonInChargeMove () {
    //기존 서버 데이터
    const [person, setPerson] = useState(personDB);
    const [dropPerson, setDropPerson] = useState(selectDB);
    //picker 데이터
    const [pickPerson, setPickPerson] = useState([]);
    const [pickDropPerson, setPickDropPerson] = useState([]);
    function pickSubmit () {
        const personArray = person;
        const dropPersonArray = dropPerson;
        const pickArray = pickPerson;
        //기존 관리대상이 아닌 데이터에서 pick 데이터와 겹치는 요소를 삭제합니다.
        for (let i = 0; i < pickArray.length; i++ ) {
            const index = personArray.indexOf(pickArray[i], 0);
            if (index !== -1) {
                personArray.splice(index, 1);
            };
        };
        //pick 데이터를 관리대상 데이터에 추가합니다.
        for (let i = 0; i < pickArray.length; i++) {
            //추후 push한 요소를 가나다 순으로 정렬해야 합니다. 
            dropPersonArray.push(pickArray[i]);
        }
        //가나다 순으로 정렬합니다.
        personArray.sort((a, b) => a.localeCompare(b));
        dropPersonArray.sort((a, b) => a.localeCompare(b));
        //마지막으로 state에 적용합니다.
        setPerson([...personArray]);
        setDropPerson([...dropPersonArray]);
        //picker를 초기화 합니다.
        setPickPerson([]);
    };
    function dropSubmit () {
        //db의 종류를 모두 역순으로 적용했습니다.
        const personArray = dropPerson;
        const dropPersonArray = person;
        const pickArray = pickDropPerson;
        //기존 관리대상이 아닌 데이터에서 pick 데이터와 겹치는 요소를 삭제합니다.
        for (let i = 0; i < pickArray.length; i++ ) {
            const index = personArray.indexOf(pickArray[i], 0);
            if (index !== -1) {
                personArray.splice(index, 1);
            };
        };
        //pick 데이터를 관리대상 데이터에 추가합니다.
        for (let i = 0; i < pickArray.length; i++) {
            //추후 push한 요소를 가나다 순으로 정렬해야 합니다. 
            dropPersonArray.push(pickArray[i]);
        }
        //가나다 순으로 정렬합니다.
        personArray.sort((a, b) => a.localeCompare(b));
        dropPersonArray.sort((a, b) => a.localeCompare(b));
        //마지막으로 state에 적용합니다.
        setPerson([...dropPersonArray]);
        setDropPerson([...personArray]);
        //picker를 초기화 합니다.
        setPickDropPerson([]);
    };
    return <MainLayout page={'담당 인재 설정'} content={
        <MainContainer>
            <div className="top_container">
                <select>
                    <option>8기</option>
                    <option>7기</option>
                    <option>6기</option>
                    <option>5기</option>
                    <option>4기</option>
                    <option>3기</option>
                    <option>2기</option>
                    <option>1기</option>
                </select>
            </div>
            <div className="main_container">
                <DndBox 
                    type={'플러스'} 
                    dbArray={person} 
                    onClick={pickSubmit} 
                    picker={pickPerson} 
                    setPicker={setPickPerson}
                />
                <div className="arrow"></div>
                <DndBox 
                    type={'마이너스'} 
                    dbArray={dropPerson} 
                    onClick={dropSubmit} 
                    picker={pickDropPerson}
                    setPicker={setPickDropPerson}
                />
            </div>
        </MainContainer>
    }/>
}
const MainContainer = styled.section`
    z-index: 1;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 0.8rem;
    padding: 1.6rem;
    ${BoxShadow};
`;
export default PersonInChargeMove;