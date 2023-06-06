import styled from "styled-components";

export const FriendListContainer = styled.div`
height: 100%;
width: 100%;
background-color: #252525;
diplay: flex;
flex-direction: column;
border-radius: 0px 0px 10px 10px;

@media screen and (max-width:768px) {
    border-radius: 0px;
}

h3{
    margin: 0px 0px 6px 12px;
    color: white;
    font-weight: 500;
}
`

export const FriendContainer = styled.div`
display: flex;
flex-direction: column;

&:hover{
    background-color: #5c5b5b;
}
`
export const Divider = styled.div`
border-bottom: 1px solid lightgray;
width: 96%;
margin-left: auto;
margin-right: auto;
`