import styled from "styled-components";

export const MessagesContainer = styled.div`
display: flex;
flex-direction: column;
background-color: #f6f7f7;
padding: 10px;
height: calc(100% - 160px);
overflow: scroll;
overflow-x: hidden;

&::-webkit-scrollbar{
    width: 8px;
}
&::-webkit-scrollbar-thumb{
    background-color: black;
    border-radius: 5px;
}

@media screen and (max-width:768px) {
     height: 100%;
}
`