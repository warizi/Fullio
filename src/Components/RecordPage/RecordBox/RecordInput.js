import styled from "styled-components";
import COLOR from "../../MainPage/COLOR";
import checkImg from "../../../image/noneCircle.png";

function RecordInput ({week, setWeek, dateStart, setDateStart, dateEnd, setDateEnd, capability, setCapability, activity, setActivity, reflection, setReflection, onClick, id, submit, setActivityName, activityName, team, setTeam, result, setResult }) {
    function activityNameOnChange (e) {
        const text = e.target.value;
        setActivityName(text);
    }
    function teamOnChange (e) {
        const text = e.target.value;
        setTeam(text);
    }
    function resultOnChange (e) {
        const text = e.target.value;
        setResult(text);
    }
    function capabilityOnChange (e) {
        const text = e.target.value;
        setCapability(text);
    }
    function activityOnChange (e) {
        const text = e.target.value;
        setActivity(text);
    }
    function reflectionOnChange (e) {
        const text = e.target.value;
        setReflection(text);
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
    return (
        <MainContainer>
            <SideContainer>
                <Week value={week} onChange={weekChange} />
                <DateModi value={dateStart} onChange={dateStartChange}/>
                <Date>-</Date>
                <DateModi value={dateEnd} onChange={dateEndChange} />
                <Check src={checkImg} />
                <Line />
            </SideContainer>
            <ContentContainer>
                <InfoContainer>
                    <InfoItem>
                        <ItemTitle>활동명</ItemTitle>
                        <ItemContent>
                            <InputT 
                            value={activityName}
                            onChange={activityNameOnChange}
                            marginB={0} 
                            type='text' 
                            placeholder="활동명을 입력해 주세요." 
                            height={'4.2rem'} 
                            width={'31.5rem'} 
                            autoComplete="off" />
                        </ItemContent>
                    </InfoItem>
                    <InfoItem>
                        <ItemTitle>팀명/인원/역할</ItemTitle>
                        <ItemContent>
                            <InputT 
                            value={team}
                            onChange={teamOnChange}
                            marginB={0} 
                            type='text' 
                            placeholder="팀원과 인원, 그리고 역할을 입력해 주세요." 
                            height={'4.2rem'} 
                            width={'26.5rem'} 
                            autoComplete="off" />
                        </ItemContent>
                    </InfoItem>
                    <InfoItem>
                        <ItemTitle>결과/성과</ItemTitle>
                        <ItemContent>
                            <InputT 
                            value={result}
                            onChange={resultOnChange}
                            marginB={0} 
                            type='text' 
                            placeholder="결과 또는 성과를 적어 보세요.ex)BP" 
                            height={'4.2rem'} 
                            width={'29.7rem'} 
                            autoComplete="off" />
                        </ItemContent>
                    </InfoItem>
                    <InfoItem>
                        <ItemTitle>역량</ItemTitle>
                        <ItemContent>
                            <InputT 
                            value={capability}
                            onChange={capabilityOnChange}
                            marginB={0} 
                            type='text' 
                            placeholder="활동을 통해 얻은 역량을 키워드로 적어보세요. ex)협동" 
                            height={'4.2rem'} 
                            width={'34rem'} 
                            autoComplete="off" />
                        </ItemContent>
                    </InfoItem>
                </InfoContainer>
                <RecordContent>
                    <InputPre 
                    value={activity}
                    onChange={activityOnChange}
                    marginB={0.8} 
                    type='text' 
                    placeholder="활동에 대해 기록해 보세요!" 
                    height={'9.6rem'} 
                    width={'78.2rem'} 
                    autoComplete="off"/>
                    <InputT 
                    value={reflection}
                    onChange={reflectionOnChange}
                    marginB={0.8} 
                    type='text' 
                    placeholder="본 경험을 통하여 느낀, 앞으로 개선할 점 등 성찰 내용을 적어보세요!" 
                    height={'9.6rem'} 
                    width={'78.2rem'} 
                    autoComplete="off" />
                </RecordContent>
                <CommentCancel onClick={() => onClick(id)}>작성 취소</CommentCancel>
                <CommentSubmit onClick={submit}>완료</CommentSubmit>
            </ContentContainer>
        </MainContainer>
    )
}
const InputT = styled.textarea`
    font-size: 1.2rem;
    border: 1px solid ${COLOR.GSD9};
    border-radius: 0.8rem;
    padding: 0.9rem 1.2rem;
    height: ${props => props.height};
    width: ${props => props.width};
    resize: none;
    margin-bottom: ${props => props.marginB}rem;
    &:focus {
        outline: none;
        border: 1px solid ${COLOR.Primary};
    }
    &::placeholder {
        font-size: 1.2rem;
    }
    
`;
const InputPre = styled.textarea`
    font-size: 1.2rem;
    border: 1px solid ${COLOR.GSD9};
    border-radius: 0.8rem;
    padding: 0.9rem 1.2rem;
    height: ${props => props.height};
    width: ${props => props.width};
    resize: none;
    margin-bottom: ${props => props.marginB}rem;
    white-space: pre-line;
    &:focus {
        outline: none;
        border: 1px solid ${COLOR.Primary};
    }
    &::placeholder {
        font-size: 1.2rem;
    }
    
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
    margin-left: 1rem;
    display: inline-block;

    &:hover {
        cursor: pointer;
        background-color: ${COLOR.PrimaryDark};
    }
`;
const CommentCancel = styled.div`
    width: 9.3rem;
    height: 3.2rem;
    font-size: 1.4rem;
    color: ${COLOR.Primary};
    border-radius: 0.8rem;
    text-align: center;
    line-height: 3.2rem;
    margin-left: 58.5rem;
    display: inline-block;
    border: 1px solid ${COLOR.Primary};

    &:hover {
        cursor: pointer;
    }
`;
//메인 시작

const RecordContent = styled.div`
    width: 78.2rem;
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
    margin-bottom: 0.8rem;
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
const Week = styled.input`
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
    margin-bottom: 2rem;
`;
export default RecordInput;