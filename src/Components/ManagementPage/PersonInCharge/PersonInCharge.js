import styled from "styled-components";
import MainLayout from "../ManagementLayout/MainLayout";
import BoxShadow from "../../MainPage/StyleComponents";
import "./personInCharge.css";
import DndBox from "./DnDBox/DndBox";
import { useEffect, useState } from "react";
import adminAxios from "../../adminAxios";


const selectDB = [];
//새로운 테스트

const tselectDB = [];
//테스트 끝
function PersonInChargeMove () {
    //기수 
    const [generation, setGeneration] = useState();
    //기존 서버 데이터
    const [person, setPerson] = useState([]);
    const [dropPerson, setDropPerson] = useState(selectDB);
    //picker 데이터
    const [pickPerson, setPickPerson] = useState([]);
    const [pickDropPerson, setPickDropPerson] = useState([]);
    useEffect(() => {
        adminAxios.post('manage/member/management/output')
        .then((res) => {
            setDropPerson([...res.data]);
        })
        .catch((err) => {
            console.error(err);
        })
    }, [])
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
        personArray.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        dropPersonArray.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        //마지막으로 state에 적용합니다.
        setPerson([...personArray]);
        setDropPerson([...dropPersonArray]);
        //picker를 초기화 합니다.
        setPickPerson([]);
        //axios 넣기
        const axiosPerson = [];
        for(let i = 0; i < person.length; i ++) {
            axiosPerson.push(person[i].memberNumber);
        }
        const axiosDropPerson = [];
        for(let i = 0; i < dropPerson.length; i ++) {
            axiosDropPerson.push(dropPerson[i].memberNumber);
        }
        const axiosPick = [];
        for (let i = 0; i < pickArray.length; i++) {
            axiosPick.push(pickArray[i].memberNumber);
        }
        //
        const putArray = [];
        for (let i = 0; i < dropPerson.length; i++) {
            putArray.push(dropPerson[i].memberNumber);
        }
        adminAxios.put('manage/input', putArray)
        .then((res) => {
            
        })
        .catch((err) => {
            console.error(err);
        })
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
        personArray.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        dropPersonArray.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        //마지막으로 state에 적용합니다.
        setPerson([...dropPersonArray]);
        setDropPerson([...personArray]);
        //picker를 초기화 합니다.
        setPickDropPerson([]);
        //aixos 넣기
        const axiosPerson = [];
        for(let i = 0; i < person.length; i ++) {
            axiosPerson.push(person[i].memberNumber);
        }
        const axiosDropPerson = [];
        for(let i = 0; i < dropPerson.length; i ++) {
            axiosDropPerson.push(dropPerson[i].memberNumber);
        }
        const putArray = [];
        for (let i = 0; i < dropPerson.length; i++) {
            putArray.push(dropPerson[i].memberNumber);
        }
        adminAxios.put('manage/input', putArray)
        .then((res) => {
            
        })
        .catch((err) => {
            console.error(err);
        })
    };
    function generationChange(e) {
        const value = e.target.value;
        setGeneration(value);
        //value값으로 axios 넣을 것
        adminAxios.post('manage/member/output', {
            generation: value,
        })
        .then((res) => {
            let personDB = res.data;
            let dropPersonDB = dropPerson;
            for (let i = 0; i < dropPersonDB.length; i++) {
                personDB = [...personDB.filter(a => a.name !== dropPersonDB[i].name)];
            }
            setPerson(personDB);
        })
        .catch((err) => {
            console.error(err);
        })
    }
    return <MainLayout page={'담당 인재 설정'} content={
        <MainContainer>
            <div className="top_container">
                <select value={generation} onChange={(e) => generationChange(e)}>
                    <option value={8}>8기</option>
                    <option value={7}>7기</option>
                    <option value={6}>6기</option>
                    <option value={5}>5기</option>
                    <option value={4}>4기</option>
                    <option value={3}>3기</option>
                    <option value={2}>2기</option>
                    <option value={1}>1기</option>
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