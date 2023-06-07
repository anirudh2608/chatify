import styled from "styled-components";

export const FriendContainer = styled.div`
display: flex;
padding: 10px;
align-items: center;
gap: 30px;     
color: white;
margin: 0px 10px;
cursor: pointer;

&:hover{
    background-color: #5c5b5b;
}
`
export const FriendInfoContainer= styled.div`
display: flex;
padding: 10px 20px;
align-items: center;
gap: 30px;     
color: white;
width: 100%;
cursor: pointer;
`

export const UserChatInfo = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

export const UserName = styled.span`
font-weight: 600;
font-size: 18px;
color: white;
font-family: 'Open Sans', sans-serif;
letter-spacing: 1px;
`

export const UserLatestMessage = styled.p`
font-size: 14px;
color: lightgray;
width: 100%;
padding-bottom: 5px;
border-bottom: 1px solid lightgray; 
`

export const UserImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
object-fit: cover;
`
