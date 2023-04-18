import styled from "styled-components";
import COLOR from "../../MainPage/COLOR";

function PaginationBtn ({num, setPageNum}) {
    function pageClick() {
        setPageNum(num);
    }
    return (
            <BtnCon onClick={pageClick}>
                {num}
            </BtnCon>
            )
}
const BtnCon = styled.div`
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    border: 1px solid ${COLOR.Primary};
    margin-right: 1rem;
`;
export default PaginationBtn;