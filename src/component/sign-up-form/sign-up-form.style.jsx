import styled from "styled-components"

import { Link } from "react-router-dom"


export const SignUpFormBox = styled.div`
position: fixed;
background-color: #f6f7f7;
width: 100vw;
height: 100vh;
`

export const SignUpFormContainer = styled.div`
max-height: fit-content;
background-color: #f6f7f7;
width: 25%;
display: flex;
flex-direction: column;
position: absolute;
top:0;
bottom: 0;
left: 0;
right: 0;    
margin: auto;
padding: 10px 1%;
border-radius: 20px;

h1{
    color: #202020;
    font-size: xxx-large;
    text-align: center;
    margin-bottom: 30px;
}


@media screen and (max-width:1000px) {
    width: 45%;
}

@media screen and (max-width:750px) {
    width: 65%;
}

@media screen and (max-width:500px) {
    width: 80%;
}

@media screen and (max-width:400px) {
    width: 95%;
}

`

export const SignUpFormHeading = styled.h2`
margin-bottom: 15px;
font-family: Recoleta,"Noto Serif",Georgia,Times New Roman,Times,serif;
font-size: 30px;
font-weight: 400;
letter-spacing: -.4px;

`

export const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
margin: 20px 0px;
`

export const Divider = styled.div`
width: 50%;
border: none;
border-bottom: 1px solid #cacccf;
`
export const Separater = styled.div`
display: flex;
flex-direction: row;
align-items: center;

span{
    font-size: 15px;
    font-weight: 400;
    margin: 0px 10px;
    color: #646970;
}
`

export const GoToLogIn = styled.span`
text-align: center;
margin: 5px 0px;
font-size: .875rem;
font-weight: 600;
line-height: 1.5;
color: #50575e;
`
export const GoToLogInLink = styled(Link)`
text-decoration: none;
color: blue;
`
