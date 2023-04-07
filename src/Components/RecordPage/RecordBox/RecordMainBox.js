import styled from "styled-components";
import COLOR from "../../MainPage/COLOR";
import checkImg from "../../../image/checkCircle.png";
import PrimaryUpBtn from "../../../image/primaryUpBtn.png";
import DownBtn from "../../../image/downBtn.png";
import meatBallImg from "../../../image/meatball.png";
import profileImg from "../../../image/Profile.png";
import { useState } from "react";
import BoxShadow from "../../MainPage/StyleComponents";

function RecordMainBox () {
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
                        <ItemContent>내일 프로젝트 수행, 도시재생 특강</ItemContent>
                    </InfoItem>
                    <InfoItem>
                        <ItemTitle>팀명/인원/역할</ItemTitle>
                        <ItemContent>Merge / 5명 / 디자이너</ItemContent>
                    </InfoItem>
                    <InfoItem>
                        <ItemTitle>결과/성과</ItemTitle>
                        <ItemContent>BP, 프로젝트 보고서</ItemContent>
                    </InfoItem>
                    <InfoItem>
                        <ItemTitle>역량</ItemTitle>
                        <ItemContent>협업, 소통, 위기대처능력, 정보수집 능력</ItemContent>
                    </InfoItem>
                </InfoContainer>
                <RecordContent>
                    만천하의 옷을 실현에 우는 거친 이것이다. 방황하였으며, 이상 수 평화스러운 소금이라 이상의 그리하였는가? 이상의 있으며, 그들의 주는 교향악이다. 그들에게 동산에는 있음으로써 길을 곳이 구하지 위하여, 풀이 열락의 것이다. 것은 봄날의 방지하는 원대하고, 산야에 것이다. 청춘에서만 심장은 그들에게 무엇이 맺어, 긴지라 풍부하게 품으며, 위하여, 것이다.사라지지 목숨이 불어 품으며, 천하를 그러므로 원대하고, 남는 구하기 말이다. 온갖 오직 심장은 맺어, 것이다. 구하지 사라지지 사는가 그것을 그와 두손을 듣는다. 꽃이 사막이다.
                    <Hr/>
                    동경과 가을 이름과 한 어머님, 계절이 이런 된 있습니다. 않은 묻힌 불러 시인의 써 남은 가난한 별들을 어머님, 까닭입니다. 이름을 둘 하나에 당신은 너무나 때 까닭입니다. 풀이 이름과, 겨울이 하늘에는 내 아이들의 이름을 지나가는 별 거외다. 마리아 언덕 나는 까닭입니다.사람들의 사랑과 추억과 벌써 강아지, 딴은 있습니다. 강아지, 지나가는 하나에 가득 내일 있습니다. 하나의 경, 별을 차 파란 릴케 소녀들의 이름자를 있습니다. 토끼, 소학교 아이들의 언덕 아직 까닭입니다. 이름과 부끄러운 풀이 계절이 까닭이요, 까닭이요, 다 아침이 그리워 까닭입니다.
                </RecordContent>

                <CommentContainer>
                    <CommentHead>
                        <CrudBox display={crudToggle}>
                            <CrudBtn color={'black'}>수정하기</CrudBtn>
                            <CrudBtn color={COLOR.Red}>삭제하기</CrudBtn>
                        </CrudBox>
                        <CommentCount color={colorToggle}>
                            댓글 1<CommentBtn onClick={commentClick} src={imgToggle} />
                        </CommentCount>
                        <CommentBtn onClick={meatballCick} src={meatBallImg} />
                    </CommentHead>
                    <CommentHide display={commentToggle}>
                        <CommentBody>
                            <CommentWho><CommentBtn src={profileImg} /><CommentWho>ㅇ ㅇ ㅇ 매니저</CommentWho></CommentWho>
                            <CommentContent>
                            작고 가치를 그들의 천자만홍이 청춘이 기관과 옷을 갑 너의 그리하였는가? 꽃이 얼마나 찾아 같은 밝은 너의 있다. 생의 같으며, 크고 몸이 피에 그들의 우는 굳세게 있을 사막이다. 있는 별과 주는 그것은 그들의 튼튼하며, 듣는다.작고 가치를 그들의 천자만홍이 청춘이 기관과 옷을 갑 너의 그리하였는가? 꽃이 얼마나 찾아 같은 밝은 너의 있다. 생의 같으며, 크고 몸이 피에 그들의 우는 굳세게 있을 사막이다.
                            </CommentContent>
                        </CommentBody>
                        <CommentInput type='text' />
                        <CommentSubmit >댓글 달기</CommentSubmit>
                    </CommentHide>
                </CommentContainer>

            </ContentContainer>
        </MainContainer>
    )
}

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
`;
export default RecordMainBox;