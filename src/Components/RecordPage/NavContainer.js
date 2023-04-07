import styled from "styled-components";
import COLOR from "../MainPage/COLOR";
import BoxShadow from "../MainPage/StyleComponents";
import waveRecord from "../../image/recordWave.png";
import rightBtn from "../../image/rightBtn.png";
import downABtn from "../../image/downBtn.png";
import plusBtn from "../../image/plusBtn.png";
import { useState } from "react";

function NavContainer ({ title }) {
    const tagImgSrc = waveRecord;
    const rightImgSrc = rightBtn;
    const plusImgSrc = plusBtn;

    const [img, setImg] = useState(rightBtn);
    const [dis, setDis] = useState('none');


    function downClick () {
        if(img === rightBtn) {
            setImg(downABtn);
            setDis('block');
        } else {
            setImg(rightBtn);
            setDis('none');
        }
    }

    

    return (
        <NavBoxContainer>
            <Title>{title}</Title>
            <BasicCategory>
                <ListBox>
                    <TagImg  src={tagImgSrc} />
                    <Div title={true}>주간 성찰 일지</Div>
                </ListBox>
                <ListBox>
                    <TagImg src={rightImgSrc} />
                    <Div>공통교육</Div>
                </ListBox>
                <ListBox>
                    <TagImg src={rightImgSrc} />
                    <DivA>심화교육</DivA>
                </ListBox>
            </BasicCategory>
            <CustomCategory>
                <ListBox>
                    <TagImg  src={tagImgSrc} />
                    <Div title={true}>활동 기록</Div>
                    <TagImg btn={true}  src={plusImgSrc} />
                </ListBox>
                
                <ListBox draggable={true}>
                    <TagImg onClick={downClick} btn={true} src={img} />
                    <Div>내일프로젝트</Div>
                </ListBox>
                        <DownCon display={dis}>
                        <ListBox>
                            <TagImg btn={true} src={rightImgSrc} />
                            <Div>내일프로젝트1</Div>
                        </ListBox>
                        <ListBox>
                            <TagImg btn={true} src={rightImgSrc} />
                            <Div>내일프로젝트2</Div>
                        </ListBox>
                        </DownCon>
                <ListBox>
                    <TagImg btn={true} src={rightImgSrc} />
                    <Div>특강</Div>
                </ListBox>
                <ListBox>
                    <TagImg btn={true} src={rightImgSrc} />
                    <Div>CoP</Div>
                </ListBox>
                <ListBox>
                    <TagImg btn={true} src={rightImgSrc} />
                    <Div>토익 스터디</Div>
                </ListBox>
                <ListBox>
                    <TagImg btn={true} src={rightImgSrc} />
                    <Div>GA4 스터디</Div>
                </ListBox>

            </CustomCategory>
        </NavBoxContainer>
    )
}
const DownCon = styled.div`
    display: ${props => props.display};
    margin-left: 2rem;
`;
const CustomCategory = styled.div`
    width: 21.6rem;
`;
const DivA = styled.span`
    vertical-align: 20%;
    cursor: ${props => props.title ? 'default' : 'pointer'};
    margin-right: 0.5rem;
    color: #3B85A3;
    text-decoration-line: underline;

    &:hover {
        color: ${props => props.title ? 'black' : '#3B85A3'};
        text-decoration-line: ${props => props.title ? 'none': 'underline'};
    }
`;
const Div = styled.span`
    vertical-align: 20%;
    cursor: ${props => props.title ? 'default' : 'pointer'};
    margin-right: 0.5rem;

    &:hover {
        color: ${props => props.title ? 'black' : '#3B85A3'};
        text-decoration-line: ${props => props.title ? 'none': 'underline'};
    }
`;
const TagImg = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.3rem;
    cursor: ${props => props.btn ? 'pointer' : 'default'};
`;
const ListBox = styled.div`
    width: 21.6rem;
    height: 2.4rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-decoration-line: ${'none'};
    margin-bottom: 1rem;
`;
const NavBoxContainer = styled.div`
    width: 21.6rem;
    height: 73.6rem;
    border-radius: 0.8rem;
    background-color: ${COLOR.White};
    margin: 8.8rem 1.6rem 0;
    ${BoxShadow};
    padding: 2rem 0 0 2.7rem;
`;
const Title = styled.h2`
    font-size: 2.4rem;
    line-height: 2.4rem;
    font-weight: 400;
    margin:0;
    margin-bottom: 3.5rem;
`;
const BasicCategory = styled.div`
    margin-bottom: 1rem;
    height: 11.4rem;
    width: 16.8rem;
    border-bottom: 1px solid black;
`;
export default NavContainer;