import styled from "styled-components";

import { ReactComponent as ProfileSvg } from "../../assets/back-arrow.svg";

export const ChatBoxContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
border-radius: 10px;
`

export const ChatBoxNavbar = styled.div`
height: 50px;
width: 100%;
display: flex;
align-items: center;
padding: 10px;
background-color: gray;
gap: 10px;

span {
    color: white;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
}

img{
width: 35px;
height: 35px;
border-radius: 50%;
object-fit: cover;
}
`

export const BackIcon = styled(ProfileSvg)`
  display:block;
  width: 24px;
  height: 24px;
`