import styled from "styled-components";
import MainLayout from "../ManagementLayout/MainLayout";
import COLOR from "../../MainPage/COLOR";
import BoxShadow from "../../MainPage/StyleComponents";
import AnnouncementLayout from "../../Layout/announcement/AnnouncementLayout";
import { useState } from "react";
import NewAnnouncement from "./NewAnnouncement";

function AnnouncementMain () {
    const [newToggle, setNewToggle] = useState(false);
    return (
        <MainLayout page={'공지'} content={
            <MainCon>
                {newToggle ?<NewAnnouncement setNewToggle={setNewToggle} /> : <AnnouncementLayout setNewToggle={setNewToggle} newDisplay={'block'}/>}
            </MainCon>
        } />
    )
};

const MainCon = styled.div`
    width: 111.4rem;
    height: 73.4rem;
    background-color: ${COLOR.White};
    border-radius: 0.8rem;
    ${BoxShadow};
`;

export default AnnouncementMain;