
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import preAxios from "../axios";
import COLOR from "./COLOR";
import BoxShadow from "./StyleComponents";

const MySkillContainer = styled.div`
    width: 44.8rem;
    height: 19.4rem;
    border-radius: 0.8rem;
    ${BoxShadow}
    background-color: ${COLOR.White};
    grid-column: 1/4;
    grid-row: 3/4;
    padding: 1.6rem;
`;

const H2 = styled.h2`
    font-size: 2rem;
    font-weight: 400;
    margin: 0;
`;

const GraphContainer = styled.div`
    width: 6.5rem;
    height: 6.5rem;
    // background-color: ${COLOR.GSF0};
    position: relative;
    margin: 0 auto;
    margin-bottom: 1.5rem;
`;
const GraphCircleBack = styled.circle`
        position: absolute;
        fill: transparent;
        stroke: ${COLOR.GSF0};
        stroke-width: 1.5rem;
        -webkit-text-stroke-dasharray: 105px;
        stroke-dasharray: 160;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        transform: rotate(-90deg);
        transform-origin: center center;
        z-index: 9;
`;
const GraphCircle = styled.circle`
        fill: transparent;
        stroke: ${COLOR.Primary};
        stroke-width: 1.5rem;
        -webkit-text-stroke-dasharray: 105px;
        stroke-dasharray: 160;
        stroke-dashoffset: ${props => props.calcValue};
        stroke-linecap: round;
        transform: rotate(-90deg);
        transform-origin: center center;
        animation: ${props => props.CircleFrame} 2s both linear;
        z-index: 10
`;

function ProgressCircle ({ value }) {
    const calcValue = (100 - value) * 1.6;
    const CircleFrame = keyframes`
        0%{
            stroke-dashoffset: 160;
        }
        100% {
            stroke-dashoffset: ${calcValue};
        }
    `
    
    return(
        <>
            <GraphCircleBack cx='32.5' cy='32.5' r='26'/>  
            <GraphCircle 
                CircleFrame={CircleFrame} 
                calcValue={calcValue} cx='32.5' cy='32.5' r='26'
            />
        </>
    )
}

const ValueG = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);   
    text-overflow: ellipsis;
`;
const ValueInput = styled.input`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 2.5rem;
    border-radius: 0.8rem;
    border: 2px solid ${COLOR.Primary};
    line-height: 1.6rem;
    font-size: 1.2rem;
    padding: 0;

`
const GraphTitle = styled.div`
    font-size: 1.6rem;
    text-align: center;
    text-overflow: ellipsis;
    width: 100%;
    height: 2.6rem;
`;
const GraphTitleInput = styled.input`
    position: absolute;
    font-size: 1.6rem;
    text-align: center;
    width: 6rem;
    border-radius: 0.8rem;
    border: 2px solid ${COLOR.Primary};
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
`;
const Div = styled.div`
    position: relative;
    cursor: pointer;
    width: 10rem;
    display: flex;
    flex-direction: column;
`;
const Float = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 2rem;
`;


function SkillGraph ({ id,value, title, onClick }) {
    const [inputToggle, setInputToggle] = useState(false);
    const [getValue, setGetValue] = useState(value);
    const [getTitle, setGetTitle] = useState(title);
    const [valueText, setValueText] = useState('');
    const [titleText, setTitleText] = useState('');
    let titleA = '';
    let titleB = '';
    let titleC = '';
    let titleD = '';
    
    function valueTextHandler (e) {
        const input = e.target.value;
        if(!isNaN(input) && parseInt(input) >= 0 && parseInt(input) <= 100) {
            setValueText(input);
        } else if (input === '') {
            setValueText(input);
        }
    }
    function titleTextHandler (e) {
        const input = e.target.value;
        if (input.length >= 0 && input.length < 10){
            setTitleText(input);
        }
    }
    function inputSkill (e) {
        const keyvalue = onClick();
        switch (e.detail) {
            case 2: {
                setValueText(getValue);
                setTitleText(getTitle);
                if (inputToggle) {
                    //input에서 넘어갈 경우 axios로 정보 보내기
                   setGetValue(valueText);
                   setGetTitle(titleText);
                   preAxios.put('/main/skillinput', {
                    title: valueText,
                    count: titleText,
                    key: keyvalue,
                   })
                   .then((res) => {
                    setGetValue(res.count);
                    setGetTitle(res.title);
                   })
                   .catch((error) => {
                    console.error(error);
                   })
                }
                setInputToggle(!inputToggle);
                break;
            }
            default: {
                break;
            }
        }
    }
    function enterHandler(e) {
      const keyvalue = onClick();
        if (e.key === 'Enter') {
            setValueText(getValue);
            setTitleText(getTitle);
            if (inputToggle) {
                //input에서 넘어갈 경우 axios로 정보 보내기
            setGetValue(valueText);
            setGetTitle(titleText);
            preAxios.put('/main/skillinput', {
                title: titleText,
                count: valueText,
                key : keyvalue
            })
            .catch((error) => {
                console.error(error);
            })
            if (getTitle.length > 6) {
                const sliceTitle = titleText.slice(0, 5) + '..';
                const keyV = onClick();
                console.log(keyV);
                if (keyV === 1) {
                    titleA = titleText;
                } else if (keyV === 2) {
                    titleB = titleText;
                } else if (keyV === 3) {
                    titleC = titleText;
                    console.log(titleC)
                } else if (keyV === 4) {
                    titleD = titleText;
                }
                setGetTitle(sliceTitle);
            }
            }
            setInputToggle(!inputToggle);
        }
        
    }
    function stopEvent (e) {
        e.stopPropagation();
    }
    return(
        <Div onClick={inputSkill}>
        <GraphContainer>
            <svg viewBox="0 0 65 65">
                <ProgressCircle value={getValue}/>
            </svg>
            {inputToggle ? <ValueInput key={id} onKeyUp={enterHandler} onClick={stopEvent} id="value" type='text' value={valueText} onChange={valueTextHandler} placeholder={getValue + '%'}/> : <ValueG>{getValue}%</ValueG>}
        </GraphContainer>
        {inputToggle ? <GraphTitleInput key={id} onKeyUp={enterHandler} onClick={stopEvent} onChange={titleTextHandler} value={titleText} placeholder={getTitle}/> : <GraphTitle>{getTitle}</GraphTitle>}
        </Div>
    )
}

function MySkill({ onClick }) {
  const [skill, setSkill] = useState([]);

    useEffect(() => {
      preAxios.get('/main/skilloutput')
        .then((res) => {
            setSkill(res.data);
        })
        .catch((error) => {
          console.error(error);
        })
    },[])
    function testClick (index) {
      return index + 1;
  }
    return (
        <MySkillContainer>
            <H2>My Skills</H2>
            <Float>
                {skill.map((item, index) => {
                    let textSlice = '';
                    if(item.title === null){
                        textSlice = '';
                      } else if (item.title.length > 6){
                          textSlice = item.title.slice(0, 5) + '..';
                      } else {
                          textSlice = item.title;
                      }
                    
                    return <SkillGraph 
                            onClick={() => testClick(index)} 
                            value={item.count} 
                            title={textSlice} 
                            key={item.key} id={item.key}/>
                })}
                
            </Float>
        </MySkillContainer>
    )
}

export default MySkill;