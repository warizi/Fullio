import styled from "styled-components";
import COLOR from "../MainPage/COLOR";
import BoxShadow from "../MainPage/StyleComponents";
import searchImg from "../../image/search.png";
import RecordMainBox from "./RecordBox/RecordMainBox";
import RMB from "./RecordBox/RecordMainBox copy";
import plusBtn from "../../image/plusBtn.png";
import { useState } from "react";


function MainContainer () {
    const [array, setArray] = useState([]);
    let count = 0;
    function plusClick () {
        count +=1;
        setArray([...array, count]);
    
    }
    return (
        <MainBox>
            <SearchBar>
                <SearchBtn src={searchImg}/>
                <SearchInput placeholder="검색..."></SearchInput>
            </SearchBar>
            <MainScroll>
            <RecordMainBox />
            {array.map((item) => {
                    return <RMB key={item} />
            })}
            <Plus onClick={plusClick} src={plusBtn} />
            </MainScroll>
        </MainBox>
    )
}
const Plus = styled.img`
    margin-left: 1.1rem;
    width: 2.8rem;
    height: 2.8rem;
    margin-bottom: 2rem;

    &:hover {
        cursor: pointer;
    }
`;
const MainScroll = styled.div`
    height: 63.2rem;
    width: 88.5rem;
    overflow: scroll;
`;
const SearchInput = styled.input`
    height: 2.4rem;
    width: 44rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    vertical-align: 20%;
    border: none;

    &:focus {
        outline: none;
    }
`;
const SearchBtn = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1rem;

    &:hover {
        cursor: pointer;
    }
`;
const SearchBar = styled.div`
    width: 52rem;
    height: 4rem;
    border: 2px solid ${COLOR.GSD9};
    border-radius: 0.8rem;
    margin: 0 auto 3.2rem;
    padding: 0.5rem 1.6rem;
`;
const MainBox = styled.div`
    width: 91.2rem;
    height: 73.6rem;
    background-color: ${COLOR.White};
    margin: 8.8rem 0 0;
    ${BoxShadow};
    border-radius: 0.8rem;
    padding: 3.2rem 2.6rem;
`;

export default MainContainer;