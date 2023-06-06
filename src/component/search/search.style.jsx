import styled from "styled-components"

export const FriendContainer = styled.div`
display: flex;
padding: 10px 20px;
align-items: center;
gap: 30px;     
color: white;
border-bottom: 1px solid lightgray;
cursor: pointer;

&:hover{
    background-color: #5c5b5b;
}
`
export const SearchResultContainer = styled.div`
border-bottom: 1px solid lightgray;

h5{
    color: white;
    margin: 5px 5px 5px 10px;
}
`