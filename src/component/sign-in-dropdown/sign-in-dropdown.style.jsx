import styled from "styled-components"


export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    padding: 0px 15px 0px 5px;
  }

  img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    }
`

export const NavLink = styled.span`
  cursor: pointer;
  font-weight: 400;

  @media screen and (max-width:450px) {
    font-size: 13px;
}
`