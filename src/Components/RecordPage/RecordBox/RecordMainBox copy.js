import styled from "styled-components";
import COLOR from "../../MainPage/COLOR";
import checkImg from "../../../image/noneCircle.png";
import PrimaryUpBtn from "../../../image/primaryUpBtn.png";
import DownBtn from "../../../image/downBtn.png";
import meatBallImg from "../../../image/meatball.png";
import profileImg from "../../../image/Profile.png";
import { useState } from "react";
import BoxShadow from "../../MainPage/StyleComponents";

function RMB () {
    const [commentToggle, setCommentToggle] = useState('none');
    const [colorToggle, setColorToggle] = useState('Black');
    const [imgToggle, setImgToggle] = useState(DownBtn);
    const [crudToggle, setCrudToggle] = useState('none');
    function commentClick () {
        if(commentToggle === 'none') {
            setCommentToggle('block');
            setColorToggle('#3b85a3');
            setImgToggle(PrimaryUpBtn);
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
    return (
        <MainContainer>
            <SideContainer>
                <Week>9주차</Week>
                <Date>23.02.27</Date>
                <Date>-</Date>
                <Date>23.02.27</Date>
                <Check src={checkImg} />
                <Line />
            </SideContainer>
            <ContentContainer>
                <InfoContainer>
                    <InfoItem>
                        <ItemTitle>활동명</ItemTitle>
                        <ItemContent><InputT placeholder="활동명을 입력해 주세요." height={'4rem'} width={'31.5rem'}/></ItemContent>
                    </InfoItem>
                    <InfoItem>
                        <ItemTitle>팀명/인원/역할</ItemTitle>
                        <ItemContent><InputT placeholder="팀원과 인원, 그리고 역할을 입력해 주세요." height={'4rem'} width={'26rem'}/></ItemContent>
                    </InfoItem>
                    <InfoItem>
                        <ItemTitle>결과/성과</ItemTitle>
                        <ItemContent><InputT placeholder="결과 또는 성과를 적어 보세요.ex)BP" height={'4rem'} width={'29.7rem'}/></ItemContent>
                    </InfoItem>
                    <InfoItem>
                        <ItemTitle>역량</ItemTitle>
                        <ItemContent><InputT placeholder="활동을 통해 얻은 역량을 키워드로 적어보세요. ex)협동" height={'4.2rem'} width={'33rem'}/></ItemContent>
                    </InfoItem>
                </InfoContainer>
                <RecordContent>
                <InputT placeholder="활동에 대해 기록해 보세요!" height={'9.6rem'} width={'72.8rem'}/>
                    <Hr/>
                <InputT placeholder="본 경험을 통하여 느낀, 앞으로 개선할 점 등 성찰 내용을 적어보세요!" height={'9.6rem'} width={'72.8rem'}/>
                </RecordContent>

                <CommentContainer>
                    <CommentHead>
                        <CrudBox display={crudToggle}>
                            <CrudBtn color={'black'}>수정하기</CrudBtn>
                            <CrudBtn color={COLOR.Red}>삭제하기</CrudBtn>
                        </CrudBox>
                    </CommentHead>
                </CommentContainer>
                        <CommentSubmit >완료</CommentSubmit>

            </ContentContainer>
        </MainContainer>
    )
}
const InputT = styled.input`
    border: 1px solid ${COLOR.GSD9};
    border-radius: 0.8rem;
    padding: 0.9rem 1.2rem;
    height: ${props => props.height};
    width: ${props => props.width};
    &::placeholder {
        font-size: 1.2rem;
    }
    
`;
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
const CommentInput = styled.input`
    margin: 1.4rem 0;
    width: 78.2rem;
    border: 1px solid ${COLOR.GSD9};
    padding: 0.8rem 1.2rem;
    font-size: 1.2rem;
`;
const CommentContent = styled.div`
    width: 78.2rem;
    margin-top: 0.7rem;
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
const Week = styled.div`
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
    margin: 2rem 0;
`;
export default RMB;