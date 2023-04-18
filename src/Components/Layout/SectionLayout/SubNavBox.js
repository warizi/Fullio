import styled from "styled-components";
import COLOR from "../../MainPage/COLOR";
import BoxShadow from "../../MainPage/StyleComponents";
import { Fragment } from "react";

function MyButton ({active, title }) {
    return <MyBtn active={active}>{title}</MyBtn>
}
const MyBtn = styled.div`
    height: 2.4rem;
    font-size: 2rem;
    line-height: 2.4rem;
    margin-bottom: 2rem;
    cursor: pointer;
    display: inline-block;
    color: ${props => props.active ? COLOR.Primary : COLOR.Black};
    ${props => props.active ? `border-bottom: 2px solid ${COLOR.Primary}` : ``};
    &:hover {
        color: ${COLOR.Primary};
        border-bottom: 2px solid ${COLOR.Primary};
    }
`;
function SubNavBox ({title, btnArray}) {
    return (
        <>
        <NavContainer>
            <Mytitle>{title}</Mytitle>
            {btnArray.map((item, index) => {
                return (
                    <Fragment key={index}>
                    <MyButton active={true} title={item.title}/>
                    <br />
                    </Fragment>
                )
            })}
        </NavContainer>
        </>
    )
};
const NavContainer = styled.div`
    width: 21.6rem;
    height: 73.6rem;
    border-radius: 0.8rem;
    background-color: ${COLOR.White};
    margin: 8.8rem 1.6rem 0;
    ${BoxShadow};
    padding: 4rem 0 0 2.7rem;
`;
const Mytitle = styled.h2`
    font-size: 2.4rem;
    line-height: 2.4rem;
    font-weight: 400;
    margin:0;
    margin-bottom: 3.5rem;
`;
export default SubNavBox;