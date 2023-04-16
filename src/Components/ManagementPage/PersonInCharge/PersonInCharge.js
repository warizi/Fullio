import styled from "styled-components";
import MainLayout from "../ManagementLayout/MainLayout";
import BoxShadow from "../../MainPage/StyleComponents";
import "./personInCharge.css";
import DndBox from "./DnDBox/DndBox";

const personDB = ['강지용', '고기훈', '고재영', '오주연', '진승현','강지용', '고기훈', '고재영', '오주연', '진승현','강지용', '고기훈', '고재영', '오주연', '진승현','강지용', '고기훈', '고재영', '오주연', '진승현','강지용', '고기훈', '고재영', '오주연', '진승현','강지용', '고기훈', '고재영', '오주연', '진승현','강지용', '고기훈', '고재영', '오주연', '진승현'];

function PersonInChargeMove () {
    return <MainLayout content={
        <MainContainer>
            <div className="top_container">
                <select value={'기수선택'}>
                    <option>8기</option>
                    <option>7기</option>
                    <option>6기</option>
                    <option>5기</option>
                    <option>4기</option>
                    <option>3기</option>
                    <option>2기</option>
                    <option>1기</option>
                </select>
            </div>
            <div className="main_container">
                <DndBox type={'플러스'} dbArray={personDB}/>
                <div className="arrow"></div>
                <DndBox type={'마이너스'} dbArray={personDB}/>
            </div>
        </MainContainer>
    }/>
}
const MainContainer = styled.section`
    z-index: 1;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 0.8rem;
    padding: 1.6rem;
    ${BoxShadow};
`;
export default PersonInChargeMove;