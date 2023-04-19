import { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../MainPage/COLOR";
function ItemPick ({onClick, name }) {
    const [colorToggle, setColorToggle] = useState('white');
    function colorHandler () {
        if (colorToggle === 'white') {
            setColorToggle(COLOR.Primary);
        } else {
            setColorToggle('white');
        }
    }
    return <ItemBox onClick={() => {onClick(); colorHandler();}} color={colorToggle} >{name}</ItemBox>
};
function DndBox ({type, dbArray, picker, setPicker, onClick }) {
    //item을 클릭하고 해당 아이템이 picker에 있으면 삭제하고 없으면 추가합니다.
    function pickToggle (name) {
        const pick = picker.indexOf(name, 0);
        if (pick === -1) {
            const pushItem = picker;
            pushItem.push(name);
            setPicker([...pushItem]);
        } else {
            const deleteItem = picker;
            deleteItem.splice(pick, 1);
            setPicker([...deleteItem]);
        }
    }
    return <MainBox>
        <SubmitBtn onClick={onClick}>{type}</SubmitBtn>
        <MainContent>
            {dbArray.map((item) => {
                return <ItemPick onClick={() => pickToggle(item)} key={item.memberNumber} name={item.name} />
            })}
        </MainContent>
    </MainBox>
};
const ItemBox = styled.div`
    width: 11rem;
    height: 5rem;
    background-color: ${props => props.color};
    cursor: pointer;
    text-align: center;
    line-height: 5rem;
    border-radius: 0.8rem;
`;
const MainContent = styled.div`
    overflow: scroll;
    width: 36.8rem;
    height: 50rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 6rem;
    grid-gap: 1rem;
    background-color: green;
`;
const SubmitBtn = styled.button`
    display: block;
    height: 4rem;
    width: auto;
`;
const MainBox = styled.div`
    width: 40rem;
    height: 60rem;
    background-color: blue;
    padding: 1.6rem;
`;
export default DndBox;