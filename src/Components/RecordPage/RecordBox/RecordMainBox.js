import styled from "styled-components";
import COLOR from "../../MainPage/COLOR";
import checkImg from "../../../image/checkCircle.png";
import PrimaryUpBtn from "../../../image/primaryUpBtn.png";
import DownBtn from "../../../image/downBtn.png";
import meatBallImg from "../../../image/meatball.png";
import profileImg from "../../../image/Profile.png";
import { useState } from "react";
import BoxShadow from "../../MainPage/StyleComponents";
import { useEffect } from "react";
import preAxios from "../../axios";

function RecordMainBox ({ item, id, category, setRecordArray }) {
   
    const [commentToggle, setCommentToggle] = useState('none');
    const [colorToggle, setColorToggle] = useState('Black');
    const [imgToggle, setImgToggle] = useState(DownBtn);
    const [crudToggle, setCrudToggle] = useState('none');
    const [modi, setModi] = useState(true);
    const [activityName, setActivityName] = useState(item.activityName);
    const [team, setTeam] = useState(item.team);
    const [result, setResult] = useState(item.result);
    const [capability, setCapability] = useState(item.capabilities);
    const [activity, setActivity] = useState(item.activity);
    const [reflection, setReflection] = useState(item.reflection);
    const [dateStart, setDateStart] = useState(item.dateStart);
    const [dateEnd, setDateEnd] = useState(item.dateEnd);
    const [week, setWeek] = useState(item.week);
    const [commentArray, setCommentArray] = useState([]);
    const [comment, setComment] = useState('');
    
    useEffect(() => {
        setActivityName(item.activityName);
        setTeam(item.team);
        setResult(item.result);
        setCapability(item.capabilities);
        setActivity(item.activity);
        setReflection(item.reflection);
        setDateStart(item.dateStart);
        setDateEnd(item.dateEnd);
        setWeek(item.week);
    },[item])

    //숫자 적용시 2개 단위로 나눠 .을 넣습니다.
    function modifyEnd () {
        const dateStartArray = dateStart.split('');
        const dateEndArray = dateEnd.split('');

        dateStartArray.splice(2, 0, '.');
        dateStartArray.splice(5, 0, '.');
        dateEndArray.splice(2, 0, '.');
        dateEndArray.splice(5, 0, '.');

        setDateStart(dateStartArray.join(''));
        setDateEnd(dateEndArray.join(''));
        

        setModi(!modi);
        setCrudToggle('none');
        if(!modi) {
            //기록 수정사항 반영 axios를 보냅니다.
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
              id: id,
            })
            .then((res) => {
                //수정된 수정사항을 다시 불러옵니다.
                preAxios.post('/records/output', {
                    category: category,
                })
                .then((res) => {
                    alert('수정완료!');
                })
                .catch((err) => {
                    console.error(err);
                })
            })
            .catch((err) => {
                console.error(err);
            })
        }
    }
    function modifyStart () {
        const dateStartArray = dateStart.split('');
        const dateEndArray = dateEnd.split('');

        dateStartArray.splice(2, 1);
        dateStartArray.splice(4, 1);
        dateEndArray.splice(2, 1);
        dateEndArray.splice(4, 1);

        setDateStart(dateStartArray.join(''));
        setDateEnd(dateEndArray.join(''));
        

        setModi(!modi);
        setCrudToggle('none');
        if(!modi) {
            
        }
    }
    function commentClick () {
        if(commentToggle === 'none') {
            setCommentToggle('block');
            setColorToggle('#3b85a3');
            setImgToggle(PrimaryUpBtn);
            //해당 게시물 댓글 axios 요청을 보냅니다.
            preAxios.post('records/commentoutput', {
                category: category,
                id: id,
            })
            .then((res) => {
                setCommentArray(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
        } else {
            setCommentToggle('none');
            setColorToggle('black');
            setImgToggle(DownBtn);
        }
    }
    function meatballCick () {
        if (crudToggle === 'none'){
            setCrudToggle('flex');
        } else {
            setCrudToggle('none');
        }
    }

    function activityNameChange (e) {
        const text = e.target.value;
        if (text.length <= 50) {
            setActivityName(e.target.value);
        }
    }
    function teamChange (e) {
        const text = e.target.value;
        if (text.length <= 50) {
            setTeam(e.target.value);
        }
    }
    function resultChange (e) {
        const text = e.target.value;
        if (text.length <= 50) {
            setResult(e.target.value);
        }
    }
    function capabilityChange (e) {
        const text = e.target.value;
        if (text.length <= 50) {
            setCapability(e.target.value);
        }
    }
    function activityChange (e) {
        const text = e.target.value;
        if (text.length <= 1000) {
            setActivity(e.target.value);
        }
    }
    function reflectionChange (e) {
        const text = e.target.value;
        if (text.length <= 1000) {
            setReflection(e.target.value);
        }
    }
    function weekChange (e) {
        if(e.target.value >= 0){
            setWeek(e.target.value);
        }
    }
    function dateStartChange (e) {
        const text = e.target.value;
        if(text.length <= 6) {
            setDateStart(text);
        }
    }
    function dateEndChange (e) {
        const text = e.target.value;
        if(text.length <= 6) {
            setDateEnd(text);
        }
    }
    function commentChange (e) {
        const text = e.target.value;
        setComment(text);
    }
    function commentSubmit (e) {
        if (e.key === 'enter') {
            commentSubmitClick();
        }
    }
    function commentSubmitClick () {
        //댓글 정보를 axios로 보냅니다.
        preAxios.put('/records/commentinput', {
            category: category,
            content: comment,
            id: id,
        })
        .then((res) => {
            preAxios.post('/records/commentoutput', {
                category: category,
                id: id,
            })
            .then((res) => {
                setCommentArray(res.data);
            })
            .catch((err) => {
                console.error(err);
            })
            setComment('');
        })
        .catch((err) => {
            console.error(err)
        })
    }
    //게시물 삭제 함수
    function deleteReflection () {
      preAxios.delete('/records/delete', {
        id: id,
        category: category,
      })  
      .then((res) => {
        if (res.data.success) {
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
            setCrudToggle('none');
            alert('삭제 성공!');
        }
      })
      .catch((err) => {
        console.error(err);
      })
      setCrudToggle('none');
    };
    return (
        <MainContainer>
            <SideContainer>
                {modi ? <WeekBox><Week>{week}주차</Week></WeekBox> : <WeekModi value={week} onChange={weekChange}/>}
                {modi ? <Date>{dateStart}</Date> : <DateModi value={dateStart} onChange={dateStartChange}/>}
                <Date>-</Date>
                {modi ? <Date>{dateEnd}</Date> : <DateModi value={dateEnd} onChange={dateEndChange}/>}
                <Check src={checkImg} />
                <Line />
            </SideContainer>
            <ContentContainer>
                <InfoContainer>
                    <InfoItem>
                        <ItemTitle>활동명</ItemTitle>
                        {modi ? <ItemContent>{activityName}</ItemContent> :
                        <InputModiTitle value={activityName} onChange={activityNameChange} width={'31.5rem'}></InputModiTitle>}
                    </InfoItem>
                    <InfoItem>
                        <ItemTitle>팀명/인원/역할</ItemTitle>
                        {modi ? <ItemContent>{team}</ItemContent> :
                        <InputModiTitle value={team} onChange={teamChange} width={'26.5rem'}></InputModiTitle>}
                    </InfoItem>
                    <InfoItem>
                        <ItemTitle>결과/성과</ItemTitle>
                        {modi ? <ItemContent>{result}</ItemContent> : 
                        <InputModiTitle value={result} onChange={resultChange} width={'29.7rem'}></InputModiTitle>}
                    </InfoItem>
                    <InfoItem>
                        <ItemTitle>역량</ItemTitle>
                        {modi ? <ItemContent>{capability}</ItemContent> : 
                        <InputModiTitle value={capability} onChange={capabilityChange} width={'34rem'}></InputModiTitle>}
                    </InfoItem>
                </InfoContainer>
                <RecordContent>
                    {modi ? activity :
                    <InputModiContent value={activity} onChange={activityChange}></InputModiContent>}
                    <Hr/>
                    {modi ? reflection :
                    <InputModiContent value={reflection} onChange={reflectionChange}></InputModiContent>}
                </RecordContent>

                <CommentContainer>
                    <CommentHead>
                        <CrudBox display={crudToggle}>
                            {modi ? <CrudBtn color={'black'} onClick={modifyStart}>수정하기</CrudBtn> :
                            <CrudBtn color={COLOR.Primary} onClick={modifyEnd}>완료하기</CrudBtn>}
                            <CrudBtn color={COLOR.Red} onClick={deleteReflection}>삭제하기</CrudBtn>
                        </CrudBox>
                        <CommentCount color={colorToggle}>
                            {`댓글 ${item.count}`}<CommentBtn onClick={commentClick} src={imgToggle} />
                        </CommentCount>
                        <CommentBtn onClick={meatballCick} src={meatBallImg} />
                    </CommentHead>
                    <CommentHide display={commentToggle}>
                        {/* 댓글 불러오기 시작 */}
                        <CommentBody>
                            {/* 댓글 배열 렌더링 시작 */}
                            {commentArray.map((item) => {
                                return (<div key={item.id}>
                                    <CommentWho><CommentBtn src={!item.image ? profileImg : item.image} /><CommentWho>{item.name}</CommentWho></CommentWho>
                                    <CommentContent>
                                    {item.content}
                                    </CommentContent> 
                                </div>)
                            })}
                            {/* 댓글 배열 렌더링 끝 */}
                        </CommentBody>
                        <CommentInput type='text' value={comment} onChange={commentChange} onKeyDown={commentSubmit}/>
                        <CommentSubmit onClick={commentSubmitClick} >댓글 달기</CommentSubmit>
                        {/* 댓글 불러오기 끝 */}
                    </CommentHide>
                </CommentContainer>

            </ContentContainer>
        </MainContainer>
    )
}
//수정 시작
const InputModiTitle = styled.textarea`
    width: ${props => props.width};
    height: 4.2rem;
    font-size: 1.2rem;
    border: 1px solid ${COLOR.GSD9};
    border-radius: 0.8rem;
    padding: 0.9rem 1.2rem;
    resize: none;
    &:focus {
        outline: none;
        border: 1px solid ${COLOR.Primary};
    }

`;
const InputModiContent = styled.textarea`
    width: 78.2rem;
    height: 9.6rem;
    font-size: 1.2rem;
    border: 1px solid ${COLOR.GSD9};
    border-radius: 0.8rem;
    padding: 0.9rem 1.2rem;
    resize: none;
    &:focus {
        outline: none;
        border: 1px solid ${COLOR.Primary};
    }

`;
//수정 끝
//댓글 시작
const CommentHide = styled.div`
    display: ${props => props.display};
`;
const CommentSubmit = styled.div`
    width: 9.3rem;
    height: 3.2rem;
    font-size: 1.4rem;
    color: white;
    border-radius: 0.8rem;
    background-color: ${COLOR.Primary};
    text-align: center;
    line-height: 3.2rem;
    margin-left: auto;

    &:hover {
        cursor: pointer;
    }
`;
const CommentInput = styled.textarea`
    margin: 1.4rem 0;
    width: 78.2rem;
    border: 1px solid ${COLOR.GSD9};
    padding: 0.8rem 1.2rem;
    resize: none;
    font-size: 1.2rem;
`;
const CommentContent = styled.div`
    width: 78.2rem;
    margin-top: 0.7rem;
    margin-bottom: 1rem;
`;
const CommentWho = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1.2rem;
    line-height: 2.4rem;
    vertical-align: middle;
`;
const CommentBody = styled.div`
    width: 78.2rem;
    padding: 0.8rem;
    border-bottom: 1px solid ${COLOR.GSD9};
`;
const CommentBtn = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
    margin-right: 0.8rem;
`;
const CommentCount = styled.div`
    display: flex;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${props => props.color};
`;
const CommentHead = styled.div`
    position: relative;
    margin-top: 1rem;
    width: 78.2rem;
    height: 2.4rem;
    display: flex;
    justify-content: space-between;
`;
const CommentContainer = styled.div`
    width: 78.2rem;
`;
const CrudBtn = styled.div`
    width: 50%;
    height: 4.2rem;
    line-height: 4.2rem;
    font-size: 1.4rem;
    color: ${props => props.color};
    text-align: center;
    position: relative;
    z-index; 2000;
    background-color: ${COLOR.White};

    &:hover {
        cursor: pointer;
    }
`;
const CrudBox = styled.div`
    position: absolute;
    right: 0;
    top: -4.5rem;
    width: 17rem;
    height: 4.2rem;
    display: ${props => props.display};
    flex-direction: row;
    backgound-color: white;
    ${BoxShadow};
    z-index: 1000;

`;
//댓글 끝
//메인 시작

const Hr = styled.div`
    height: 1px;
    border-top: 1px dashed ${COLOR.GSD9};
    margin: 1.6rem 0;
`;
const RecordContent = styled.div`
    width: 78.2rem;
    border-top: 1px solid ${COLOR.GSD9};
    border-bottom: 1px solid ${COLOR.GSD9};
    padding: 1.6rem;

`;
const ItemContent = styled.div`
    width: 100%
    height: 4.2rem;
    font-size: 1.4rem;
`;
const ItemTitle = styled.div`
    margin-right: 2.1rem;
    width: 100%
    display: inline-block;
    line-height: 4.2rem;
    font-size: 1.6rem;
    font-weight: 500;
`;
const InfoItem = styled.div`
    height: 4.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const InfoContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
`;
const ContentContainer = styled.div`
    position: relative;
    z-index: 1;
    width: 78.2rem;
    padding-bottom: 4rem;
`;
//메인 끝
//사이드 시작
const Line = styled.div`
    width: 2.5rem;
    border-right: 1px solid ${COLOR.GS8c};
    height: 100%;
`;
const Check = styled.img`
    width: 2.8rem;
    height: 2.8rem;
    margin: 1rem auto 0;
`;
const Date = styled.div`
    width: 5rem;
    height: 1.6rem;
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-align: center;
`;
const DateModi = styled.input`
    width: 5rem;
    height: 1.6rem;
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-align: center;
`;
const WeekBox = styled.div`
    position: relative;
    width: 5rem;
    height: 6rem;
`
const Week = styled.div`
    position: absolute;
    top: 0;
    width: 8rem;
    height: 3.5rem;
    font-size: 2rem;
    font-weight: 500;
    color: ${COLOR.Primary};
    margin-bottom: 1.1rem;
`;
const WeekModi= styled.input`
    width: 5rem;
    height: 3.5rem;
    font-size: 2rem;
    font-weight: 500;
    color: ${COLOR.Primary};
    margin-bottom: 1.1rem;
`;
const SideContainer = styled.div`
    width: 5rem;
    display: flex;
    flex-direction: column;
    margin-right: 3.3rem;
`;
//사이드 끝
const MainContainer = styled.div`
    width: 86.7rem;
    display: flex;
    flex-direction: row;
`;
export default RecordMainBox;