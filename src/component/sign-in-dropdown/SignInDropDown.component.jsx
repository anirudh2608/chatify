import { useSelector } from "react-redux"

import { selectCurrentUser } from "../../store/user/user.selector"

import {  ProfileContainer, NavLink } from "./sign-in-dropdown.style"

const SignInDropDwon = () => {

    const currentUser = useSelector(selectCurrentUser)

    return (
        <ProfileContainer>
            <img src="https://images.pexels.com/photos/5558238/pexels-photo-5558238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <NavLink>{currentUser?.displayName}</NavLink>
        </ProfileContainer>
    )
}
export default SignInDropDwon