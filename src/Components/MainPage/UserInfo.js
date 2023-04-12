import { useNavigate } from 'react-router-dom';
import Button from './Button';
import InfoComment from './InfoComment';
import './Userinfo.css';
import catImg from '../../image/cat.png';
import Challenge from './Challenge';
import styled from 'styled-components';
import NoticeImg from '../../image/mark_mark.png'
import COLOR from './COLOR';
import { useEffect, useState } from 'react';
import preAxios from '../axios';

const userInfoImg = catImg;

const RedDot = styled.div`
    border: 0.3rem solid ${COLOR.White};
    border-radius: 9999px;
    width: 1rem;
    height: 1rem;
    background-color: ${COLOR.Red};
    position: absolute;
    top: 1.8rem;
    right: 1.7rem;
    cursor: pointer;
`;
const ImageT = styled.img`
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    top: 2rem;
    right: 1.7rem;
    cursor: pointer;
`;
const NoticeBoxContainer = styled.div`
    position: absolute;
    top: 4rem;
    right: 2rem;
    width: 25.3rem;
    height: 34.4rem;
    border-radius: 0.8rem;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
    background-color: ${COLOR.White};
    overflow: hidden;
    transition: 1s;
    padding: 1.6rem;
    z-index: 1000;
`;
const NoticeTitleCon = styled.div`
    width: 22.1rem;
    height: 1.6rem;
    display: flex;
    justify-content: space-between;
`;
const NoticeAL = styled.div`
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 500;
`;
const NoticeAll = styled.div`
    font-size: 1.2rem;
    line-height: 1.6rem;
    cursor: pointer;
    color: ${COLOR.GS14};
`;
const NoticeMainCon = styled.div`
    width: 22.1rem;
    height: 28.2rem;
    overflow: scroll;
    margin-top: 1.4rem;
`;
const NoticeListContainer = styled.div`
    width: 22.1rem;
    height: 3.2rem;
    margin-bottom: 1.8rem;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`;
const NoticeBall = styled.div`
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 999rem;
    display: inline-block;
    background-color: #${props => props.ballColor};
    margin: 0.9rem 0;
    margin-right: 0.7rem;
`;

const NoticeCommentCon = styled.div`
    width: 20rem;
    height: 3.2rem;
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: ${props => props.color? COLOR.GSBF:COLOR.Black};
    display: inline-block;
`;
const DateTag = styled.div`
    font-size: 0.5rem;
    color: ${COLOR.GSBF};
    margin-left: 0.5rem;
    display: inline-block;
`;
const SpanCon = styled.div`
    height: 3.2rem;
    display: inline-block;
    font-size: 1.2rem;
    line-height: 1.6rem;
    white-space: pre-line;
`;
const CommentInput = styled.input`
    width: 100%;
    padding: 1.3rem;
    height: 6rem;
    font-size: 1.4rem;
    border: 4px solid #8cc9e1;
    border-radius: 0.8rem;
    text-align: center;
`;
function UserInfo({ name, nickname, motto, number, strength, profilPath }) {
    const [noticeToggle, setNoticeToggle] = useState(false);
    const NoticeImage = NoticeImg;
    const movePage = useNavigate();
    const noticeArray =[
        {
            noticeType: '기록',
            noticeContent: '이번 주에 있었던 활동을 기록해 보세요.',
            date: '오늘',//date는 마지막 등록날짜를 넣어주세요.
            id: 1,
            checked: false,
        },
        {
            noticeType: '일정',
            noticeContent: '신규 일정  \'특강\'이/가 등록되었어요.',
            date: '오늘',
            id: 2,
            checked: false,
        },
        {
            noticeType: '일정',
            noticeContent: '이번 주에 있었던 활동을 기록해 보세요.',
            date: '어제',
            id: 3,
            checked: true,
        },
        {
            noticeType: '챌린지',
            noticeContent: '순위 변동! 바로 확인해 보세요.',
            date: '그저께',
            id: 4,
            checked: true,
        },
        {
            noticeType: '기록',
            noticeContent: '\'김윤석 매니저\'님이 기록을 확인했어요.',
            date: '2월 19일',
            id: 5,
            checked: true,
        },
        {
            noticeType: '기록',
            noticeContent: '\'김윤석 매니저\'님이 댓글을 달았어요.',
            date: '2월 19일',
            id: 6,
            checked: true,
        },
    ];
    

    
    function NoticeClick () {
        setNoticeToggle(!noticeToggle);
       
    }
    function NoticeListBox({ nType, nContent, date, checked }) {
        let ballColor = '5FC59D';
        if(nType === '일정') {
            ballColor = '5FC59D';
        } else if (nType === '챌린지') {
            ballColor = 'FCCB05';
        } else if (nType === '기록') {
            ballColor = '81AAE8';
        }
        return (
            <NoticeListContainer>
                <NoticeBall ballColor={ballColor}/>
                    <NoticeCommentCon color={checked}>
                        <SpanCon>
                            [{nType}] {nContent}
                            <DateTag>{date}</DateTag>
                        </SpanCon>
                    </NoticeCommentCon>
            </NoticeListContainer>
        )
    }

    function NoticeBox () {
        
        return (
            <NoticeBoxContainer>
                <NoticeTitleCon>
                    <NoticeAL>알림</NoticeAL>
                    <NoticeAll>모두읽음</NoticeAll>
                </NoticeTitleCon>
                <NoticeMainCon>
                    {noticeArray.map((item) => {
                        return (
                            <NoticeListBox 
                            key={item.id}
                            nType={item.noticeType} 
                            nContent={item.noticeContent} 
                            date={item.date}
                            checked={item.checked}/>
                        )
                    })}
                </NoticeMainCon>
            </NoticeBoxContainer>
        )
    }

    function Notice({ onClick }) {
        return (
            <ImageT src={NoticeImage} onClick={onClick}/>
        )
    }

    function moveMypage () {
        movePage('/main/mypage');
    }
    const [infoToggle, setInfoToggle] = useState(false);
    const [commentValue, setCommentValue] = useState(motto);
    function commentClick(e) {
        switch (e.detail) {
            case 2: {
                setInfoToggle(infoToggle => !infoToggle);
                break;
            }
            default: {
                break;
            }
        }
    }
    function commentEnter (e) {
        if (e.key === 'Enter') {
            preAxios.put('/mypage/userupdate', {
                motto: commentValue,
            })
            .catch((error) => {console.error(error)})
            setInfoToggle(!infoToggle);
        }
    }
    function commentValueHandler(e) {
        const valueComment = e.target.value;
        setCommentValue(valueComment);
    }

    //강점 카테고리 클릭시 선택모드
        //1단계 
    const [circleToggle, setCircleToggle] = useState(false);
        //2단계
    const [selectToggle, setSelectToggle] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    //선택 시 반영 정보
    const [selectFirst, setSelectFirst] = useState();
    const [selectId, setSelectId] = useState('');
    const [selectSt, setSelectSt] = useState('');
    // 실제 데이터 
        //서클
    const [circleA, setCircleA] = useState('-');
    const [circleB, setCircleB] = useState('-');
    const [circleC, setCircleC] = useState('-');
    const [circleD, setCircleD] = useState('-');
    const [circleE, setCircleE] = useState('-');
        //내용
    const [contentA, setContentA] = useState('자신의 강점을 선택해주세요!');
    const [contentB, setContentB] = useState('자신의 강점을 선택해주세요!');
    const [contentC, setContentC] = useState('자신의 강점을 선택해주세요!');
    const [contentD, setContentD] = useState('자신의 강점을 선택해주세요!');
    const [contentE, setContentE] = useState('자신의 강점을 선택해주세요!');
    const [colorA, setColorA] = useState(COLOR.Primary);
    const [colorB, setColorB] = useState(COLOR.Primary);
    const [colorC, setColorC] = useState(COLOR.Primary);
    const [colorD, setColorD] = useState(COLOR.Primary);
    const [colorE, setColorE] = useState(COLOR.Primary);
    useEffect(() => {
        preAxios.get('/main/strengthoutput')
        .then((res) => {//eris
            for(let i = 0; i < strengthE.length ; i++) {
                if (res.data[0].title === strengthE[i]){
                    setCircleA('E');
                    setColorA('#bc59eb');
                    setContentA(res.data[0].title);
                }
            }
            for(let i = 0; i < strengthR.length ; i++) {
                if (res.data[0].title === strengthR[i]){
                    setCircleA('R')
                    setColorA('#3791FA')
                    setContentA(res.data[0].title);
                }
            }
            for(let i = 0; i < strengthI.length ; i++) {
                if (res.data[0].title === strengthI[i]){
                    setCircleA('I')
                    setColorA('#f1ad2a')
                    setContentA(res.data[0].title);
                }
            }
            for(let i = 0; i < strengthS.length ; i++) {
                if (res.data[0].title === strengthS[i]){
                    setCircleA('S')
                    setColorA('#3cc069')
                    setContentA(res.data[0].title);
                }
            }
            //두번째
            for(let i = 0; i < strengthE.length ; i++) {
                if (res.data[1].title === strengthE[i]){
                    setCircleB('E');
                    setColorB('#bc59eb');
                    setContentB(res.data[1].title);
                }
            }
            for(let i = 0; i < strengthR.length ; i++) {
                if (res.data[1].title === strengthR[i]){
                    setCircleB('R')
                    setColorB('#3791FA')
                    setContentB(res.data[1].title);
                }
            }
            for(let i = 0; i < strengthI.length ; i++) {
                if (res.data[1].title === strengthI[i]){
                    setCircleB('I')
                    setColorB('#f1ad2a')
                    setContentB(res.data[1].title);
                }
            }
            for(let i = 0; i < strengthS.length ; i++) {
                if (res.data[1].title === strengthS[i]){
                    setCircleB('S')
                    setColorB('#3cc069')
                    setContentB(res.data[1].title);
                }
            }
            //세번째
            for(let i = 0; i < strengthE.length ; i++) {
                if (res.data[2].title === strengthE[i]){
                    setCircleC('E');
                    setColorC('#bc59eb');
                    setContentC(res.data[2].title);
                }
            }
            for(let i = 0; i < strengthR.length ; i++) {
                if (res.data[2].title === strengthR[i]){
                    setCircleC('R');
                    setColorC('#3791FA')
                    setContentC(res.data[2].title);
                }
            }
            for(let i = 0; i < strengthI.length ; i++) {
                if (res.data[2].title === strengthI[i]){
                    setCircleC('I');
                    setColorC('#f1ad2a')
                    setContentC(res.data[2].title);
                }
            }
            for(let i = 0; i < strengthS.length ; i++) {
                if (res.data[2].title === strengthS[i]){
                    setCircleC('S');
                    setColorC('#3cc069')
                    setContentC(res.data[2].title);
                }
            }
            //네번째
            for(let i = 0; i < strengthE.length ; i++) {
                if (res.data[3].title === strengthE[i]){
                    setCircleD('E');
                    setColorD('#bc59eb');
                    setContentD(res.data[3].title);
                }
            }
            for(let i = 0; i < strengthR.length ; i++) {
                if (res.data[3].title === strengthR[i]){
                    setCircleD('R');
                    setColorD('#3791FA')
                    setContentD(res.data[3].title);
                }
            }
            for(let i = 0; i < strengthI.length ; i++) {
                if (res.data[3].title === strengthI[i]){
                    setCircleD('I');
                    setColorD('#f1ad2a')
                    setContentD(res.data[3].title);
                }
            }
            for(let i = 0; i < strengthS.length ; i++) {
                if (res.data[3].title === strengthS[i]){
                    setCircleD('S');
                    setColorD('#3cc069')
                    setContentD(res.data[3].title);
                }
            }
            //다섯번째
            for(let i = 0; i < strengthE.length ; i++) {
                if (res.data[4].title === strengthE[i]){
                    setCircleE('E');
                    setColorE('#bc59eb');
                    setContentE(res.data[4].title);
                }
            }
            for(let i = 0; i < strengthR.length ; i++) {
                if (res.data[4].title === strengthR[i]){
                    setCircleE('R');
                    setColorE('#3791FA');
                    setContentE(res.data[4].title);
                }
            }
            for(let i = 0; i < strengthI.length ; i++) {
                if (res.data[4].title === strengthI[i]){
                    setCircleE('I');
                    setColorE('#f1ad2a');
                    setContentE(res.data[4].title);
                }
            }
            for(let i = 0; i < strengthS.length ; i++) {
                if (res.data[4].title === strengthS[i]){
                    setCircleE('S');
                    setColorE('#3cc069');
                    setContentE(res.data[4].title);
                }
            }
        })
        .catch((error) => {console.error(error)});
        preAxios.get('/mypage/motto')
        .then((res) => {
            if (res.status === 200) {
                setCommentValue(res.data.motto);
            }
        })
        .catch((error) => {
            console.error(error);
        })
    }, [])
    useEffect(() => {
        if (selectFirst === 'A') {
            let list = selectSt.substr(1,1);
            //id : R / E / S / I 중 하나
            setCircleA(selectId);
            if (circleA === 'R') {
                setColorA('#3791fa');
                setContentA(strengthR[list]);
            } else if (circleA === 'E') {
                setColorA('#bc59eb')
                setContentA(strengthE[list]);
            } else if (circleA === 'I') {
                setColorA('#f1ad2a')
                setContentA(strengthI[list]);
            }else if (circleA === 'S') {
                setColorA('#3cc069')
                setContentA(strengthS[list]);
            }
            preAxios.put('/main/strengthinput',[
                {
                    title: contentA,
                    key: 1,
                }
            ])
            .catch((error) => {console.error(error)})
        } else if (selectFirst === 'B') {
            let list = selectSt.substr(1,1);
            //id : R / E / S / I 중 하나
            setCircleB(selectId);
            if (circleB === 'R') {
                setColorB('#3791fa');
                setContentB(strengthR[list]);
            } else if (circleB === 'E') {
                setColorB('#bc59eb');
                setContentB(strengthE[list]);
            } else if (circleB === 'I') {
                setColorB('#f1ad2a');
                setContentB(strengthI[list]);
            }else if (circleB === 'S') {
                setColorB('#3cc069');
                setContentB(strengthS[list]);
            }
            preAxios.put('/main/strengthinput',[
                {
                    title: contentB,
                    key: 2,
                }
            ])
            .catch((error) => {console.error(error)})
        } else if (selectFirst === 'C') {
            let list = selectSt.substr(1,1);
            //id : R / E / S / I 중 하나
            setCircleC(selectId);
            if (circleC === 'R') {
                setColorC('#3791fa');
                setContentC(strengthR[list]);
            } else if (circleC === 'E') {
                setColorC('#bc59eb');
                setContentC(strengthE[list]);
            } else if (circleC === 'I') {
                setColorC('#f1ad2a');
                setContentC(strengthI[list]);
            }else if (circleC === 'S') {
                setColorC('#3cc069');
                setContentC(strengthS[list]);
            }
            preAxios.put('/main/strengthinput',[
                {
                    title: contentC,
                    key: 3,
                }
            ])
            .catch((error) => {console.error(error)})
        } else if (selectFirst === 'D') {
            let list = selectSt.substr(1,1);
            //id : R / E / S / I 중 하나
            setCircleD(selectId);
            if (circleD === 'R') {
                setColorD('#3791fa');
                setContentD(strengthR[list]);
            } else if (circleD === 'E') {
                setColorD('#bc59eb');
                setContentD(strengthE[list]);
            } else if (circleD === 'I') {
                setColorD('#f1ad2a');
                setContentD(strengthI[list]);
            }else if (circleD === 'S') {
                setColorD('#3cc069');
                setContentD(strengthS[list]);
            }
            preAxios.put('/main/strengthinput',[
                {
                    title: contentD,
                    key: 4,
                }
            ])
            .catch((error) => {console.error(error)})
        } else if (selectFirst === 'E') {
            let list = selectSt.substr(1,1);
            //id : R / E / S / I 중 하나
            setCircleE(selectId);
            if (circleE === 'R') {
                setColorE('#3791fa');
                setContentE(strengthR[list]);
            } else if (circleE === 'E') {
                setColorE('#bc59eb');
                setContentE(strengthE[list]);
            } else if (circleE === 'I') {
                setColorE('#f1ad2a');
                setContentE(strengthI[list]);
            }else if (circleE === 'S') {
                setColorE('#3cc069');
                setContentE(strengthS[list]);
            }
            preAxios.put('/main/strengthinput',[
                {
                    title: contentE,
                    key: 5,
                }
            ])
            .catch((error) => {console.error(error)})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ circleA, circleB, circleC, circleD, circleE, contentA, contentB, contentC, contentD,contentE, selectSt])
    function circleClick (e) {
        if(clickCount === 0) {
            setSelectFirst(e.currentTarget.id);
            setCircleToggle(true);
            setClickCount(clickCount + 1);
        } else if (clickCount === 1) {
            setSelectId(e.currentTarget.id);
            setSelectToggle(true);
            setCircleToggle(false);
            setClickCount(clickCount + 1);
        } else if (clickCount === 2) {
            setSelectSt(e.currentTarget.id);
            setSelectToggle(false);
            setClickCount(0);
        }
    }
    return (
        <div className="userinfo-container container">
            {noticeToggle ? <NoticeBox/> : null}
            <Notice onClick={NoticeClick}/>
            {true ?<RedDot onClick={NoticeClick}/> : null}
            <img src={!profilPath ? userInfoImg : profilPath} className='info-img' alt='프로필 사진' />
            <span>{name + '/' + number}</span>
            <span className='info-email'>{nickname}</span>
            <Button 
                value={'마이페이지'} 
                className={'infoMypage'} 
                onClick={moveMypage}
            />
            {infoToggle ?
                <CommentInput onKeyDown={commentEnter} onChange={commentValueHandler} value={commentValue}/> 
                : <InfoComment value={commentValue} onClick={commentClick}/>
             }
            <StrongTestContainer>
                {selectToggle && selectId === 'E' ? <SelectBoxE onClick={circleClick}/> : <></>}
                {selectToggle && selectId === 'I' ? <SelectBoxI onClick={circleClick}/> : <></>}
                {selectToggle && selectId === 'R' ? <SelectBoxR onClick={circleClick}/> : <></>}
                {selectToggle && selectId === 'S' ? <SelectBoxS onClick={circleClick}/> : <></>}
                {circleToggle && selectFirst === 'A' ? <CircleSelect onClick={circleClick} /> : <ItemStrong color={colorA} content={contentA} circle={circleA} id={'A'} onClick={circleClick}/>}
                {circleToggle && selectFirst === 'B' ? <CircleSelect onClick={circleClick} /> : <ItemStrong color={colorB} content={contentB} circle={circleB} id={'B'} onClick={circleClick}/>}
                {circleToggle && selectFirst === 'C' ? <CircleSelect onClick={circleClick} /> : <ItemStrong color={colorC} content={contentC} circle={circleC} id={'C'} onClick={circleClick}/>}
                {circleToggle && selectFirst === 'D' ? <CircleSelect onClick={circleClick} /> : <ItemStrong color={colorD} content={contentD} circle={circleD} id={'D'} onClick={circleClick}/>}
                {circleToggle && selectFirst === 'E' ? <CircleSelect onClick={circleClick} /> : <ItemStrong color={colorE} content={contentE} circle={circleE} id={'E'} onClick={circleClick}/>}
            </StrongTestContainer>
            <Challenge value={'Zzz'}/>
        </div>
    );
}
const strengthE = ['공정성(Consistency)', '정리(Arranger)', '복구(Restorative)', '집중(Focus)', '성취(Achiever)', '책임(Responsibility)', '신념(Belief)', '체계(Discipline', '심사숙고(Deliberative)'];
const strengthI = ['사교성(Woo)', '주도력(Command)', '승부(Competition)', '최상화(Maximizer)', '자기 확신(Self-Assurance)', '커뮤니케이션(Communication)', '존재감(Significance)', '행동(Activator)'];
const strengthR = ['개발(Developer)', '적응(Adaptability)', '개별화(Individualization)', '절친(Relator)', '공감(Empathy)', '포용(Includer)', '긍정(Positivity)', '화합(Harmony)', '연결성(Connectedness)'];
const strengthS = ['미래지향(Futuristic)', '수집(Input)', '발상(Ideation)', '전략(Strategic)', '배움(Learner)', '지적사고(Intellection)', '분석(Analytical)', '회고(Context)'];
function CircleSelect ({ onClick }) {
    return(
    <StrongItemContainer>
        <StrongCircle color={'#3791FA'} id='R' onClick={onClick}>R</StrongCircle>
        <StrongCircle color={'#BC59EB'} id='E' onClick={onClick}>E</StrongCircle>
        <StrongCircle color={'#3CC069'} id='S' onClick={onClick}>S</StrongCircle>
        <StrongCircle color={'#F1AD2A'} id='I' onClick={onClick}>I</StrongCircle>
    </StrongItemContainer>
    )
}
function SelectBoxI ({ onClick }) {
    return (
        <SelectContainer>
            <SelectItemCon id='I0' onClick={onClick}>{strengthI[0]}</SelectItemCon>
            <SelectItemCon id='I1' onClick={onClick}>{strengthI[1]}</SelectItemCon>
            <SelectItemCon id='I2' onClick={onClick}>{strengthI[2]}</SelectItemCon>
            <SelectItemCon id='I3' onClick={onClick}>{strengthI[3]}</SelectItemCon>
            <SelectItemCon id='I4' onClick={onClick}>{strengthI[4]}</SelectItemCon>
            <SelectItemCon id='I5' onClick={onClick}>{strengthI[5]}</SelectItemCon>
            <SelectItemCon id='I6' onClick={onClick}>{strengthI[6]}</SelectItemCon>
            <SelectItemCon id='I7' onClick={onClick}>{strengthI[7]}</SelectItemCon>
        </SelectContainer>
    )
}
function SelectBoxR ({ onClick }) {
    return (
        <SelectContainer>
            <SelectItemCon id='R0' onClick={onClick}>{strengthR[0]}</SelectItemCon>
            <SelectItemCon id='R1' onClick={onClick}>{strengthR[1]}</SelectItemCon>
            <SelectItemCon id='R2' onClick={onClick}>{strengthR[2]}</SelectItemCon>
            <SelectItemCon id='R3' onClick={onClick}>{strengthR[3]}</SelectItemCon>
            <SelectItemCon id='R4' onClick={onClick}>{strengthR[4]}</SelectItemCon>
            <SelectItemCon id='R5' onClick={onClick}>{strengthR[5]}</SelectItemCon>
            <SelectItemCon id='R6' onClick={onClick}>{strengthR[6]}</SelectItemCon>
            <SelectItemCon id='R7' onClick={onClick}>{strengthR[7]}</SelectItemCon>
            <SelectItemCon id='R8' onClick={onClick}>{strengthR[8]}</SelectItemCon>
        </SelectContainer>
    )
}
function SelectBoxS ({ onClick }) {
    return (
        <SelectContainer>
            <SelectItemCon id='S0' onClick={onClick}>{strengthS[0]}</SelectItemCon>
            <SelectItemCon id='S1' onClick={onClick}>{strengthS[1]}</SelectItemCon>
            <SelectItemCon id='S2' onClick={onClick}>{strengthS[2]}</SelectItemCon>
            <SelectItemCon id='S3' onClick={onClick}>{strengthS[3]}</SelectItemCon>
            <SelectItemCon id='S4' onClick={onClick}>{strengthS[4]}</SelectItemCon>
            <SelectItemCon id='S5' onClick={onClick}>{strengthS[5]}</SelectItemCon>
            <SelectItemCon id='S6' onClick={onClick}>{strengthS[6]}</SelectItemCon>
            <SelectItemCon id='S7' onClick={onClick}>{strengthS[7]}</SelectItemCon>
        </SelectContainer>
    )
}
function SelectBoxE ({ onClick }) {
    return (
        <SelectContainer>
            <SelectItemCon id='E0' onClick={onClick}>{strengthE[0]}</SelectItemCon>
            <SelectItemCon id='E1' onClick={onClick}>{strengthE[1]}</SelectItemCon>
            <SelectItemCon id='E2' onClick={onClick}>{strengthE[2]}</SelectItemCon>
            <SelectItemCon id='E3' onClick={onClick}>{strengthE[3]}</SelectItemCon>
            <SelectItemCon id='E4' onClick={onClick}>{strengthE[4]}</SelectItemCon>
            <SelectItemCon id='E5' onClick={onClick}>{strengthE[5]}</SelectItemCon>
            <SelectItemCon id='E6' onClick={onClick}>{strengthE[6]}</SelectItemCon>
            <SelectItemCon id='E7' onClick={onClick}>{strengthE[7]}</SelectItemCon>
            <SelectItemCon id='E8' onClick={onClick}>{strengthE[8]}</SelectItemCon>
        </SelectContainer>
    )
}

function ItemStrong ({ color, onClick, id, circle, content }) {
    return (
        <StrongItemContainer>
            <StrongCircle color={color} id={id} onClick={onClick}>{circle}</StrongCircle>
            <StrongCountCircle>0</StrongCountCircle>
            <StrongTextContainer>{content}</StrongTextContainer>
        </StrongItemContainer>
    )
}
//컨테이너 입니다.
const SelectItemCon = styled.div`
    width 20.5rem;
    height: 3rem;
    background-color: ${COLOR.Primary};
    font-size: 1.4rem;
    line-height: 3rem;
    padding-left: 1rem;
    border-radius: 0.8rem;
    margin-bottom: 0.5rem;
    color: ${COLOR.White};
    

    &:hover {
        cursor: pointer;
    }
`;
const StrongTestContainer = styled.div`
    width: 22.5rem;
    height: 13.1rem;
    margin: 3rem 0;
    position: relative;
`;
const StrongItemContainer = styled.div`
    width: 22.5rem;
    height: 2.5rem;
    position: relative;
    margin-bottom: 0.3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const StrongTextContainer = styled.div`
    width: 15rem;
    heigth: 2.5rem;
    overflow: hidden;
    
`;
const SelectContainer = styled.div`
    background-color: white;
    width: 21rem;
    height: 14.2rem;
    position: absolute;
    z-index: 1000;
    top: 0;
    right: -0.9rem;
    overflow: scroll;
`;

//원 입니다.
const StrongCircle = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 999rem;
    background-color: ${props => props.color};
    text-align: center;
    line-height: 2.5rem;

    &:hover {
        cursor: pointer;
    }
`;
const StrongCountCircle = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 999rem;
    background-color: ${COLOR.GSD9};
    margin-left: 0.6rem;
    text-align: center;
    line-height: 2.5rem;
    margin-right: 1.4rem;
`;

export default UserInfo;

