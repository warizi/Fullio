import styled from "styled-components";
import COLOR from "../MainPage/COLOR";
import BoxShadow from "../MainPage/StyleComponents";
import searchImg from "../../image/search.png";
import RecordMainBox from "./RecordBox/RecordMainBox";
import RecordInput from "./RecordBox/RecordInput";
import plusBtn from "../../image/plusBtn.png";
import { useState } from "react";
import { useEffect } from "react";


// 공통 더미데이터 입니다.
let commenDB = [
    {
        activityName: '업프로젝트',
        team: 'merge/5인/프론트엔드',
        result: 'BP',
        capabilities: '성취, React',
        activity: '기획 / 디자인 / 프론트엔드 / 백엔드와 협업하여 Fullio 홈페이지를 제작하였습니다.',
        reflection: 'React를 습득하면서 어려운 부분이 많았습니다. 특히 state 관리와 컴포넌트를 나누기가 어려웠습니다.',
        week: 9,
        dateStart: '23.02.27',
        dateEnd: '23.02.27',
        count:0,
        id: 1,
    },
    {
        activityName: '내일프로젝트',
        team: 'merge/5인/프론트엔드',
        result: 'BP',
        capabilities: '성취, React',
        activity: '기획 / 디자인 / 프론트엔드 / 백엔드와 협업하여 Fullio 홈페이지를 제작하였습니다.',
        reflection: 'React를 습득하면서 어려운 부분이 많았습니다. 특히 state 관리와 컴포넌트를 나누기가 어려웠습니다.',
        week: 9,
        dateStart: '23.02.27',
        dateEnd: '23.02.27',
        count:0,
        id: 2,
    },
    {
        activityName: '내일프로젝트',
        team: 'merge/5인/프론트엔드',
        result: 'BP',
        capabilities: '성취, React',
        activity: '기획 / 디자인 / 프론트엔드 / 백엔드와 협업하여 Fullio 홈페이지를 제작하였습니다.',
        reflection: 'React를 습득하면서 어려운 부분이 많았습니다. 특히 state 관리와 컴포넌트를 나누기가 어려웠습니다.',
        week: 9,
        dateStart: '23.02.27',
        dateEnd: '23.02.27',
        count:0,
        id: 3,
    },
    {
        activityName: '내일프로젝트',
        team: 'merge/5인/프론트엔드',
        result: 'BP',
        capabilities: '성취, React',
        activity: '기획 / 디자인 / 프론트엔드 / 백엔드와 협업하여 Fullio 홈페이지를 제작하였습니다.',
        reflection: 'React를 습득하면서 어려운 부분이 많았습니다. 특히 state 관리와 컴포넌트를 나누기가 어려웠습니다.',
        week: 9,
        dateStart: '23.02.27',
        dateEnd: '23.02.27',
        count:0,
        id: 4,
    },
    {
        activityName: '내일프로젝트',
        team: 'merge/5인/프론트엔드',
        result: 'BP',
        capabilities: '성취, React',
        activity: '기획 / 디자인 / 프론트엔드 / 백엔드와 협업하여 Fullio 홈페이지를 제작하였습니다.',
        reflection: 'React를 습득하면서 어려운 부분이 많았습니다. 특히 state 관리와 컴포넌트를 나누기가 어려웠습니다.',
        week: 9,
        dateStart: '23.02.27',
        dateEnd: '23.02.27',
        count:0,
        id: 5,
    },
    {
        activityName: '내일프로젝트',
        team: 'merge/5인/프론트엔드',
        result: 'BP',
        capabilities: '성취, React',
        activity: '기획 / 디자인 / 프론트엔드 / 백엔드와 협업하여 Fullio 홈페이지를 제작하였습니다.',
        reflection: 'React를 습득하면서 어려운 부분이 많았습니다. 특히 state 관리와 컴포넌트를 나누기가 어려웠습니다.',
        week: 9,
        dateStart: '23.02.27',
        dateEnd: '23.02.27',
        count:0,
        id: 6,
    },
    {
        activityName: '내일프로젝트',
        team: 'merge/5인/프론트엔드',
        result: 'BP',
        capabilities: '성취, React',
        activity: '기획 / 디자인 / 프론트엔드 / 백엔드와 협업하여 Fullio 홈페이지를 제작하였습니다.',
        reflection: 'React를 습득하면서 어려운 부분이 많았습니다. 특히 state 관리와 컴포넌트를 나누기가 어려웠습니다.',
        week: 9,
        dateStart: '23.02.27',
        dateEnd: '23.02.27',
        count:0,
        id: 7,
    },
    {
        activityName: '내일프로젝트',
        team: 'merge/5인/프론트엔드',
        result: 'BP',
        capabilities: '성취, React',
        activity: '기획 / 디자인 / 프론트엔드 / 백엔드와 협업하여 Fullio 홈페이지를 제작하였습니다.',
        reflection: 'React를 습득하면서 어려운 부분이 많았습니다. 특히 state 관리와 컴포넌트를 나누기가 어려웠습니다.',
        week: 9,
        dateStart: '23.02.27',
        dateEnd: '23.02.27',
        count:0,
        id: 8,
    },
]
// 심화 더미데이터 입니다. 
let deepDB = [
    {
        activityName: '업프로젝트',
        team: 'merge/5인/프론트엔드',
        result: 'BP',
        capabilities: '성취, React',
        activity: '기획 / 디자인 / 프론트엔드 / 백엔드와 협업하여 Fullio 홈페이지를 제작하였습니다.',
        reflection: 'React를 습득하면서 어려운 부분이 많았습니다. 특히 state 관리와 컴포넌트를 나누기가 어려웠습니다.',
        week: 9,
        dateStart: '23.02.27',
        dateEnd: '23.02.27',
        count:0,
        id: 1,
    },
    {
        activityName: '업프로젝트',
        team: 'merge/5인/프론트엔드',
        result: 'BP',
        capabilities: '성취, React',
        activity: '기획 / 디자인 / 프론트엔드 / 백엔드와 협업하여 Fullio 홈페이지를 제작하였습니다.',
        reflection: 'React를 습득하면서 어려운 부분이 많았습니다. 특히 state 관리와 컴포넌트를 나누기가 어려웠습니다.',
        week: 9,
        dateStart: '23.02.27',
        dateEnd: '23.02.27',
        count:0,
        id: 2,
    },
    {
        activityName: '업프로젝트',
        team: 'merge/5인/프론트엔드',
        result: 'BP',
        capabilities: '성취, React',
        activity: '기획 / 디자인 / 프론트엔드 / 백엔드와 협업하여 Fullio 홈페이지를 제작하였습니다.',
        reflection: 'React를 습득하면서 어려운 부분이 많았습니다. 특히 state 관리와 컴포넌트를 나누기가 어려웠습니다.',
        week: 9,
        dateStart: '23.02.27',
        dateEnd: '23.02.27',
        count:0,
        id: 3,
    },
    {
        activityName: '업프로젝트',
        team: 'merge/5인/프론트엔드',
        result: 'BP',
        capabilities: '성취, React',
        activity: '기획 / 디자인 / 프론트엔드 / 백엔드와 협업하여 Fullio 홈페이지를 제작하였습니다.',
        reflection: 'React를 습득하면서 어려운 부분이 많았습니다. 특히 state 관리와 컴포넌트를 나누기가 어려웠습니다.',
        week: 9,
        dateStart: '23.02.27',
        dateEnd: '23.02.27',
        count:0,
        id: 4,
    },
    {
        activityName: '업프로젝트',
        team: 'merge/5인/프론트엔드',
        result: 'BP',
        capabilities: '성취, React',
        activity: '기획 / 디자인 / 프론트엔드 / 백엔드와 협업하여 Fullio 홈페이지를 제작하였습니다.',
        reflection: 'React를 습득하면서 어려운 부분이 많았습니다. 특히 state 관리와 컴포넌트를 나누기가 어려웠습니다.',
        week: 9,
        dateStart: '23.02.27',
        dateEnd: '23.02.27',
        count:0,
        id: 5,
    },
    {
        activityName: '업프로젝트',
        team: 'merge/5인/프론트엔드',
        result: 'BP',
        capabilities: '성취, React',
        activity: '기획 / 디자인 / 프론트엔드 / 백엔드와 협업하여 Fullio 홈페이지를 제작하였습니다.',
        reflection: 'React를 습득하면서 어려운 부분이 많았습니다. 특히 state 관리와 컴포넌트를 나누기가 어려웠습니다.',
        week: 9,
        dateStart: '23.02.27',
        dateEnd: '23.02.27',
        count:0,
        id: 6,
    },
    {
        activityName: '업프로젝트',
        team: 'merge/5인/프론트엔드',
        result: 'BP',
        capabilities: '성취, React',
        activity: '기획 / 디자인 / 프론트엔드 / 백엔드와 협업하여 Fullio 홈페이지를 제작하였습니다.',
        reflection: 'React를 습득하면서 어려운 부분이 많았습니다. 특히 state 관리와 컴포넌트를 나누기가 어려웠습니다.',
        week: 9,
        dateStart: '23.02.27',
        dateEnd: '23.02.27',
        count:0,
        id: 7,
    },
    {
        activityName: '업프로젝트',
        team: 'merge/5인/프론트엔드',
        result: 'BP',
        capabilities: '성취, React',
        activity: '기획 / 디자인 / 프론트엔드 / 백엔드와 협업하여 Fullio 홈페이지를 제작하였습니다.',
        reflection: 'React를 습득하면서 어려운 부분이 많았습니다. 특히 state 관리와 컴포넌트를 나누기가 어려웠습니다.',
        week: 9,
        dateStart: '23.02.27',
        dateEnd: '23.02.27',
        count:0,
        id: 8,
    },
    {
        activityName: '업프로젝트',
        team: 'merge/5인/프론트엔드',
        result: 'BP',
        capabilities: '성취, React',
        activity: '기획 / 디자인 / 프론트엔드 / 백엔드와 협업하여 Fullio 홈페이지를 제작하였습니다.',
        reflection: 'React를 습득하면서 어려운 부분이 많았습니다. 특히 state 관리와 컴포넌트를 나누기가 어려웠습니다.',
        week: 9,
        dateStart: '23.02.27',
        dateEnd: '23.02.27',
        count:0,
        id: 9,
    },
]

function MainContainer ({ category, setRemove, remove }) {
    const [recordArray, setRecordArray] = useState([]);
    const [newRender, setNewRender] = useState(false);//리무브 변화에 따라서 newrander가 없어져야 합니다. 수정 요청
    const [activityName, setActivityName] = useState('');
    const [team, setTeam] = useState('');
    const [result, setResult] = useState('');
    const [capability, setCapability] = useState('');
    const [activity, setActivity] = useState('');
    const [reflection, setReflection] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [week, setWeek] = useState('');

    function plusClick () {
        //하나씩만 기록 가능할 때
        if (!newRender) {
            setNewRender(true);
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
        };
        //추후 기록 작성 여러개 동시 가능할 때
        // setArray([...array, array.length]);
        // remove(array.length);
    }
    useEffect(() => {
        if(category === '공통교육'){
            //열려 있는 입력폼을 초기화 합니다.
            //공통교육 카테고리 기록을 axios 요청합니다.
            setRecordArray(commenDB);
        } else if (category === '심화교육') {
            //열려 있는 입력폼을 초기화 합니다.
            //심화교육 카테고리 기록을 axios 요청합니다. 
            setRecordArray(deepDB);
        }
    }, [category])

    function deleteNewRecord (id) {
        if(window.confirm("작성하던 기록을 삭제하겠습니까?") === true) {
            setRemove(0);
            setNewRender(false);
        };
    }
    function submitNewRecord () {
        //추가 axios 요청합니다.
        //요청이 완료 될 시 
        //더미데이터 전용 id값
        //하나씩만 가능할 때
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
        } else if (dateStart === '') {
            alert('시작일을 입력해 주세요.')
        } else if (dateEnd === ''){
            alert('마감일을 입력해 주세요.')
        } else {
            let idCount = recordArray[recordArray.length - 1].id + 1;

            setRecordArray([{
                activityName: activityName,
                team: team,
                result: result,
                capabilities: capability,
                activity: activity,
                reflection: reflection,
                week: week,
                dateStart: dateStart,
                dateEnd: dateEnd,
                id: idCount,
            }, ...recordArray ]);
            alert('적용 완료!:)');
            setRemove(0);
            setNewRender(false);
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
            {/* 하나씩만 수정 가능할 때 */}
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
            {/* 여러개 가능할 때 */}
            {/* {array.map((item) => {
                    return <RecordInput submit={submitNewRecord} onClick={deleteNewRecord} id={item} key={item} />
            })} */}
            {/* 기존 기록 불러오기 */}
            {recordArray.map((item) => {
                return <RecordMainBox item={item} key={item.id}/>
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