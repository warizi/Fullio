import styled from "styled-components";
import COLOR from "../MainPage/COLOR";
import BoxShadow from "../MainPage/StyleComponents";
import searchImg from "../../image/search.png";
import RecordMainBox from "./RecordBox/RecordMainBox";
import RecordInput from "./RecordBox/RecordInput";
import plusBtn from "../../image/plusBtn.png";
import { useState } from "react";
import { useEffect } from "react";
import preAxios from "../axios";

function MainContainer ({ category, setRemove, remove }) {
    const [recordArray, setRecordArray] = useState([]);
    const [newRender, setNewRender] = useState(false);//리무브 변화에 따라서 newrander가 없어져야 합니다.
    const [activityName, setActivityName] = useState('');
    const [team, setTeam] = useState('');
    const [result, setResult] = useState('');
    const [capability, setCapability] = useState('');
    const [activity, setActivity] = useState('');
    const [reflection, setReflection] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [week, setWeek] = useState('');
    const admin = false;

    function plusClick () {
        //하나씩만 기록 가능할 때
        if (!newRender) {
            setRemove(1);
            setActivityName('');
            setTeam('');
            setResult('');
            setCapability('');
            setActivity('');
            setReflection('');
            setDateEnd('');
            setDateStart('');
            setWeek('');
            setNewRender(true);
        };
    }

    //불러오기
    useEffect(() => {
        console.log(category);
        if (category === '심화교육' || category === '공통교육') {
            preAxios.post('/records/output', {
                category: category,
            })
            .then((res) => {
                console.log(res.data);
              const array = res.data;
              const reverse = array.reverse();
                setRecordArray(reverse);
            })
            .catch((err) => {
                console.error(err);
            })
        } else {
            preAxios.post('/logs/output', {
                category: 'detail',
                id: category,
            })
            .then((res) => {
              const array = res.data;
              const reverse = array.reverse();
                setRecordArray(reverse);
            })
            .catch((err) => {
                console.error(err);
            })
        }
        
    }, [category])

    //카테고리 변경시 입력폼이 있고, 이동 허락될 시 삭제
    useEffect(() => {
        setNewRender(false);
        setRemove(0);
    }, [category])

    function deleteNewRecord (id) {
        if(window.confirm("작성하던 기록을 삭제하겠습니까?") === true) {
            setRemove(0);
            setNewRender(false);
        };
    }
    function submitNewRecord () {
        //작성하지 않은 값이 있으면 적용하지 않습니다.
        if (activityName === '') {
            alert('활동명을 입력해 주세요.')
        } else if (team === '') {
            alert('팀명/인원/역할을 입력해 주세요.')
        } else if (result === '') {
            alert('결과/성과를 입력해 주세요.')
        } else if (capability === '') {
            alert('역량을 입력해 주세요.')
        } else if (activity === '') {
            alert('활동을 입력해 주세요.')
        } else if (reflection === '') {
            alert('성찰을 입력해 주세요.')
        } else if (week === ''){
            alert('주차를 입력해 주세요.')
        } else if (dateStart.split('').length < 6) {
            alert('시작일 6자리를 입력해 주세요. (ex. 230725)')
        } else if (dateEnd.split('').length < 6){
            alert('마감일 6자리를 입력해 주세요. (ex. 230725)')
        } else {
            //추가 게시물 생성 Axios 요청 (추가하기)
            preAxios.put('/records/input', {
                category: category,
                activityName: activityName,
                team: team,
                result: result,
                capabilities: capability,
                activity: activity,
                reflection: reflection,
                week: week,
                dateStart: dateStart,
                dateEnd: dateEnd,
            })
            .then((res) => {
                if (res.data.success) {
                    alert('적용 완료!');
                    setRemove(0);
                    setNewRender(false);
                }
                preAxios.post('/records/output', {
                    category: category,
                })
                .then((res) => {
                  const array = res.data;
                  const reverse = array.reverse();
                    setRecordArray(reverse);
                })
                .catch((err) => {
                    console.error(err);
                })

            })
            .catch((err) => {
                alert('저장 실패했습니다.');
                console.error(err);
            })
        }
    }
    
    return (
        <MainBox>
            <SearchBar>
                <SearchBtn src={searchImg}/>
                <SearchInput placeholder="검색..."></SearchInput>
            </SearchBar>
            <MainScroll>
            <Plus onClick={plusClick} src={plusBtn} />
            {/* 새로운 입력폼 */}
            {newRender ? <RecordInput 
                week={week}
                setWeek={setWeek}
                dateStart={dateStart}
                setDateStart={setDateStart}
                dateEnd={dateEnd}
                setDateEnd={setDateEnd}
                capability={capability}
                setCapability={setCapability}
                activity={activity}
                setActivity={setActivity}
                reflection={reflection}
                setReflection={setReflection}
                result={result}
                setResult={setResult}
                team={team}
                setTeam={setTeam}
                activityName={activityName}
                setActivityName={setActivityName}
                submit={submitNewRecord} 
                onClick={deleteNewRecord}/> : 
            <></>}
            {/* 기존 기록 불러오기 */}
            {recordArray.map((item, index) => {
                return <RecordMainBox admin={admin} setRecordArray={setRecordArray} category={category} item={item} key={index} id={item.id}/>
            })}
            </MainScroll>
        </MainBox>
    )
}

const Plus = styled.img`
    margin-left: 1.1rem;
    width: 2.8rem;
    height: 2.8rem;
    margin-bottom: 1rem;

    &:hover {
        cursor: pointer;
    }
`;
const MainScroll = styled.div`
    height: 63.2rem;
    width: 88.5rem;
    overflow: scroll;
    &::-webkit-scrolbar {
        width: 10rem;
    }
`;
const SearchInput = styled.input`
    height: 2.4rem;
    width: 44rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    vertical-align: 20%;
    border: none;

    &:focus {
        outline: none;
    }
`;
const SearchBtn = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1rem;

    &:hover {
        cursor: pointer;
    }
`;
const SearchBar = styled.div`
    width: 52rem;
    height: 4rem;
    border: 2px solid ${COLOR.GSD9};
    border-radius: 0.8rem;
    margin: 0 auto 3.2rem;
    padding: 0.5rem 1.6rem;
`;
const MainBox = styled.div`
    width: 91.2rem;
    height: 73.6rem;
    background-color: ${COLOR.White};
    margin: 8.8rem 0 0;
    ${BoxShadow};
    border-radius: 0.8rem;
    padding: 3.2rem 2.6rem;
`;

export default MainContainer;