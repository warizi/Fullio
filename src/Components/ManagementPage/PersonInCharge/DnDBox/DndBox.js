import styled from "styled-components";

function DndBox ({type, dbArray}) {
    return <MainBox>
        <SubmitBtn>{type}</SubmitBtn>
        <MainContent>
            {dbArray.map((item, index) => {
                return <ItemBox key={index}>{item}</ItemBox>
            })}
        </MainContent>
    </MainBox>
};
const ItemBox = styled.div`
    width: 11rem;
    height: 5rem;
    background-color: white;
`;
const MainContent = styled.div`
    overflow: scroll;
    width: 36.8rem;
    height: 50rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
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