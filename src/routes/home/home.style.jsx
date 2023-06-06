import styled from "styled-components";


export const HomeBackgroundContainer = styled.div`
position: relative;
height: 100vh;
width: 100vw;

background-color: #202020;

`

export const HomeContainer = styled.div`
position: absolute;
height: 80%;
width: 768px;

left:0;
right:0;
top: 50%;
transform: translateY(-50%);

margin-left: auto;
margin-right: auto;

@media screen and (max-width:768px) {
    width: 100%;
    height: 100%;
}
`