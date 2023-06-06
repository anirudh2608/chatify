import { BaseButton,GoogleSignInButton ,LogoutButton,SendButton} from "./button.style"

export const BUTTON_TYPE_CLASSES={
    base:"base",
    google:"google_sign_in",
    sendButton:"send_button",
    logOutButton:"log_out_button"
}

const getButton = (buttonType=BUTTON_TYPE_CLASSES.base)=>(
    {
        [BUTTON_TYPE_CLASSES.base]:BaseButton,
        [BUTTON_TYPE_CLASSES.google]:GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.sendButton]:SendButton,
        [BUTTON_TYPE_CLASSES.logOutButton]:LogoutButton
    }[buttonType]
)

const Button = ({children,buttonType,...otherProps}) =>{
    const CustomButton =getButton(buttonType)
    return(
        <CustomButton {...otherProps}>{children}</CustomButton>
    )
}

export default Button