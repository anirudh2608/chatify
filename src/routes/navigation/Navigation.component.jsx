import { useDispatch } from "react-redux"

import { logOutStart } from "../../store/user/user.action"

import Button, { BUTTON_TYPE_CLASSES } from "../../component/button/Button.component"
import SignInDropDwon from "../../component/sign-in-dropdown/SignInDropDown.component"

import {
    NavigationConatiner,
    LogoContainer,
    NavLinks
} from "./navigation.style"


const Navigation = () => {

    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(logOutStart())
    }

    return (
        <NavigationConatiner>
            <LogoContainer>
                <h3>Chatify</h3>
            </LogoContainer>
            <NavLinks>
                <SignInDropDwon />
                <Button buttonType={BUTTON_TYPE_CLASSES.logOutButton} onClick={logOut}>Logout</Button>
            </NavLinks>
        </NavigationConatiner>
    )
}

export default Navigation