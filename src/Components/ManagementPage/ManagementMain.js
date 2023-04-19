import { useNavigate } from "react-router-dom";
import WaveButton from "../MainPage/ButtonStyle";
import "./CSS/main.css";
import loginAxios from "../loginAxios";
import NavLayout from "../Layout/NavLayout";
import ButtonLayout from "../Layout/ButtonLayout";
import COLOR from "../MainPage/COLOR";
import WavePrimary from "../../image/wavePrimary.png";
import styled from "styled-components";
import BoxShadow from "../MainPage/StyleComponents";
import NoticeLayout from "../Layout/Notice";
import CalendarBox from "../skill/CalendarBox";
import ready from "../../image/ready.png";
import profileImg from "../../image/Profile.png";
import PrimaryBasicButton from "../Layout/PrimaryBasicButton";
import CheckLog from "./recordManage/CheckLog";
import logoImg from "../../image/LogoImage.png";
import adminLoginAxios from "../adminLoginAxios";

const noticeDB = [
    {
        ballColor: 'green',
        checked: 0,
        content: '이 신규 일정 컨설팅을 등록했습니다.',
        who: '배성무 팀장님',
        date: '오늘',
        type: '일정',
    },
    {
        ballColor: 'green',
        checked: 0,
        content: '일정 \'특강\'이/가 곧 시작됩니다.',
        who: '',
        date: '오늘',
        type: '일정',
    },
    {
        ballColor: 'blue',
        checked: 0,
        content: '이 댓글을 달았습니다.',
        who: '김하정님',
        date: '오늘',
        type: '기록',
    },
    {
        ballColor: 'blue',
        checked: 0,
        content: '확인하지 않은 기록이 \'2개\'있습니다.',
        who: '',
        date: '오늘',
        type: '기록',
    },
    {
        ballColor: 'yellow',
        checked: 1,
        content: '순위 변동! 바로 확인해 보세요.',
        who: '',
        date: '그저께',
        type: '챌린지',
    },

]

const checkDB = [
    ['강지용', true, false, undefined, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false],
    ['고기훈', false, true, null, true, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null],
    ['고재영', true, null, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null],
    ['오주연', false, true, null, false, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null],
    ['진승현', null, true, false, true, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null],
    ['강지용', true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false],
    ['고기훈', false, true, null, true, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null],
    ['고재영', true, null, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null],
    ['오주연', false, true, null, false, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null],
    ['진승현', null, true, false, true, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null],
    ['강지용', true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false, true, false, null, false],
    ['고기훈', false, true, null, true, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null],
    ['고재영', true, null, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null],
    ['오주연', false, true, null, false, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null],
    ['진승현', null, true, false, true, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null, null, false, true, false, null, false, true, false, null],
];

const checkAxiosDB = [
    [
        {
            profilPath: null,
            name: "MERGE",
            nickName: null,
            position: '보스',
        }
    ],
    [
        {
            member: '강지용',
            week1: false,
            week2: false,
            week3: true,
        },
        {
            member: '고기훈',
            week1: false,
            week2: false,
            week3: true,
        },
        {
            member: '고재영',
            week1: false,
            week2: false,
            week3: true,
        },
        {
            member: '오주연',
            week1: false,
            week2: false,
            week3: true,
        },
        {
            member: '진승현',
            week1: false,
            week2: false,
            week3: true,
        }
    ]
]

function ManagementMain () {

    const movePage = useNavigate();
    function clickLogout () {
        alert('로그아웃.');
        //url수정 필요
        adminLoginAxios.post("/logout")
        // .then((res) => res.json())
        .then((res) => {
            movePage('/');
        })
        .catch((error) => {
            console.error(new Error("로그아웃 중 에러 발생"));
        });
    };
    function movePageClick(e) {
        const title = e.target.innerHTML;
        if (title === '성찰일지 관리') {
            movePage('/management/record');
        } else if (title === '공지 관리') {
            movePage('/management/announcement');
        } else {
            alert('업데이트 예정');
        }
    };
    function moveSetting () {

    };
    function myPageMove () {
        movePage('/management/mypage');
    };

    const renderArray = [];
    for (let i = 1; checkDB[0].length > i ; i++) {
        renderArray.push(<TitleItem key={i}>{i}주차</TitleItem>)
    }
    
    return (
        <div className="main_container">
            <div className="left_container">
                <Logimg  src={logoImg} alt="로고 이미지" />
                <NavLayout content={<>
                    <ButtonLayout title={'인재관리'} onClick={(e) => movePageClick(e)}/>
                    <ButtonLayout title={'성찰일지 관리'} onClick={(e) => movePageClick(e)}/>
                    <ButtonLayout title={'공지 관리'} onClick={(e) => movePageClick(e)}/>
                    <ButtonLayout title={'챌린지'} onClick={(e) => movePageClick(e)}/>
                    </>
                } />
                <PrimaryButton onClick={moveSetting}>설정</PrimaryButton>
                <WaveButton onClick={clickLogout}>로그아웃</WaveButton>
            </div>
            <div className="center_container management_grid">
                <NoticeLayout noticeArray={noticeDB}/>
                <section className="next_content">
                    <img src={ready} alt="준비중인 컨텐츠" id="ready_img"/>
                    <span>{`다음 콘텐츠를 기다려주세요 :)`}</span>
                </section>
                <section className="manager_info">
                    <img src={profileImg} alt="프로필 사진" />
                    <span>{`김윤석 / 교육훈련팀`}</span> 
                    <span>{`@dnstjr619`}</span>
                    <PrimaryBasicButton 
                        width={"100%"} 
                        height={'5.2rem'} 
                        content={'마이페이지'} 
                        onClick={myPageMove}
                    />
                </section>
                <CalendarBox />
                <section className="record_management">
                    <div className="record_scroll">
                        {/* <div className="border"></div> */}
                        <div className="week_container">
                            <div className="week_title">
                                {renderArray}
                            </div>
                            {checkDB.map((item, index) => {
                                return(
                                    <CheckLog index={index} key={index} item={item} />
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};
const Logimg = styled.img`
    position: absolute;
    width: 3.7rem;
    height: 5.6rem;
    transform: translateY(-7.2rem);
    cursor: pointer;
`;
const TitleItem = styled.div`
    width: 6.4rem;
    height: 2.4rem;
    line-height: 2.4rem;
    font-size: 1.6rem;
    text-align: center;
`;
const PrimaryButton = styled.button`
    width: 21.6rem;
    height: 5.2rem;
    border: 1px solid ${COLOR.Primary};
    text-align: center;
    line-height: 5rem;
    color: ${COLOR.Primary};
    background-color: ${COLOR.White};
    border-radius: 0.8rem;
    font-size: 1.6rem;
    cursor: pointer;
    background-image: url(${WavePrimary});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: 0.3s;
    background-position-y: 5rem;
    ${props => props.selectColor};
    margin: 1.6rem 0;
    ${BoxShadow};
    &:hover {
        color: ${COLOR.White};
        background-position-y: -10rem;
        background-size: 400% 400%;

    }
`;

export default ManagementMain;