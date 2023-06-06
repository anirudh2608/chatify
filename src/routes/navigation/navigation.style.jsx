import styled from "styled-components"

export const NavigationConatiner = styled.div`
height: 60px;
width: 100%;
background: rgb(0,0,0);
background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(37,37,37,1) 100%);
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
border-bottom: 1px solid #DDDDDD;
border-radius: 10px 10px 0px 0px;
`

export const LogoContainer = styled.div`
h3{
font-size: 25px;
color: white;
font-family: 'Abril Fatface', cursive;
font-weight: 400;
}
`
export const NavLinks = styled.div`
color: white;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: 'Open Sans', sans-serif;
`;


export const NavLink = styled.span`
color: white;
  cursor: pointer;

  @media screen and (max-width:450px) {
    font-size: 13px;
}
`
