import styled from "styled-components"

export const LabelInputContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`
export const LogInInput = styled.input`
width: 100%;
height: 30px;
margin: auto;
padding: 7px 14px;
border-radius: 4px;
background-color: #fff;
border: 1px solid #c3c4c7;
outline: none;
transition: all .15s ease-in-out;
margin-bottom: 10px;

&:focus {
    box-shadow: #282ced 0px 0px 8px;
}
`
export const Label = styled.label`
display: block;
font-size: .875rem;
font-weight: 600;
line-height: 1.5;
margin-bottom: 2px;
color: #50575e;
`
export const SearchInput = styled.input`
width: 95%;
height: 50px;
margin: auto;
padding: 7px 14px;
background-color: #0A0A0A;
border-radius: 25px;
color: lightgray;
border: none;
outline: none;
transition: all .15s ease-in-out;
margin-bottom: 10px;
`
export const SendMessageInput = styled.input`
width: 100%;
height: 50px;
border: none;
outline: none;
color: #2f2d52;
font-size: 18px;
border-radius: 0px;
padding: 5px;

&:: placeholder {
    color: lightgray;
}
`