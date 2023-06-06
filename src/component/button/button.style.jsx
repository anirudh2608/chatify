import styled from "styled-components"

export const BaseButton = styled.button`
width: 100%;
height: 30px;
border: none;
border-radius: 5px;
margin-bottom: 5px;
background-color: #117ac9;
color: white;

&:hover{
    background-color: #073894;
}
`

export const SendButton = styled.button`
border: none;
padding: 10px 15px;
color: white;
background-color: black;
cursor: pointer;
`

export const GoogleSignInButton = styled(BaseButton)`
background-color: #ea4335;

&:hover{
    background-color: #b51104;
}
`
export const LogoutButton = styled.button`
background-color: lightgrey;
width: 60px;
height: 25px;
border: none;
font-family: 'Open Sans', sans-serif;
font-weight: 800;
border-radius: 5px;

&:hover{
    background-color: grey;
}
`