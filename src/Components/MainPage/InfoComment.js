import styled from "styled-components";

const CenterCon = styled.div`
    width: 100%;
`;

function InfoComment ({ value, onClick}) {
    const commentContent = `"${value}"`;
    return (
        <div onClick={onClick} className='info-comment-container'>
            <CenterCon>
            {commentContent}
            </CenterCon>
        </div>
    )
}

export default InfoComment;

