import styled from "styled-components";
import COLOR from "../MainPage/COLOR";
import BoxShadow from "../MainPage/StyleComponents";

function NavLayout ({ content }) {
    return (
        <NavContainer>
            {content}
        </NavContainer>
    )
}
const NavContainer =styled.div`
    background-color: ${COLOR.White};
    width: 21.6rem;
    border-radius: 0.8rem;
    padding: 2rem 1.6rem 0.5rem;
    
    ${BoxShadow}
`;
export default NavLayout;