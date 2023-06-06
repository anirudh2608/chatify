import styled from "styled-components";


export const MessageInputContainer = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: black;

@media screen and (max-width:768px) {
    height: 50px;
}
`

export const SendContainer = styled.div`
display: flex;
align-items: center;
gap: 10px;

img {
    height: 24px;
    cursor: pointer;
}
`

