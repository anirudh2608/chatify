import { forwardRef } from "react"

import {
    LabelInputContainer,
    LogInInput,
    SearchInput,
    SendMessageInput,
    Label
} from "./input.style"



export const INPUT_TYPE_CLASSES = {
    logInInput: "log-in-input",
    searchInput: "search-input",
    messageInput: "message-input"
}


const getInput = (inputType = INPUT_TYPE_CLASSES.logInInput) => (
    {
        [INPUT_TYPE_CLASSES.logInInput]: LogInInput,
        [INPUT_TYPE_CLASSES.searchInput]: SearchInput,
        [INPUT_TYPE_CLASSES.messageInput]: SendMessageInput
    }[inputType]
)


const Input = ({ label, inputType, ...otherProps }, ref) => {
    const CustomInput = getInput(inputType)
    return (
        <LabelInputContainer>
            {label && <Label>{label}</Label>}
            <CustomInput ref={ref} {...otherProps} />
        </LabelInputContainer>
    )
}

export default forwardRef(Input)