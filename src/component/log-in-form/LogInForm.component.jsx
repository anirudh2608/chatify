import { useState } from "react"
import { useDispatch } from "react-redux"

import { emailLogInStart, googleLogInStart } from "../../store/user/user.action"

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.component"
import Input from "../input/Input.component"

import {
    LogInBox,
    LogInContainer,
    LogInHeading,
    ButtonContainer,
    Separater,
    Divider,
    GoToSignUp,
    GoToSignUpLink
} from "./log-in-form.style"



const defaultFormFields = {
    email: "",
    password: ""
}


const LogInForm = () => {

    const dispatch = useDispatch()

    const [formFields, setFormFieids] = useState(defaultFormFields)
    const { email, password } = formFields

    const changeHandler = (event) => {
        const { name, value } = event.target
        setFormFieids({ ...formFields, [name]: value })
    }

    const resetFormFields = () => {
        setFormFieids(defaultFormFields)
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailLogInStart(email, password))
            resetFormFields();
        }
        catch (error) {
            console.log(error)
        }
    }

    const logInWithGoogle = () => {
        dispatch(googleLogInStart())
    }

    return (
        <LogInBox>

            <LogInContainer>
                <h1>Chatify</h1>

                <LogInHeading>Log In</LogInHeading>

                <form onSubmit={submitHandler}>

                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={changeHandler}
                        required
                    />

                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={changeHandler}
                        required
                    />
                    <ButtonContainer>
                        <Button type="submit">Log In</Button>
                        <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={logInWithGoogle}>Log in with Google</Button>
                    </ButtonContainer>

                </form>

                <Separater>
                    <Divider />
                    <span>OR</span>
                    <Divider />
                </Separater>

                <GoToSignUp>Don't have an account? <GoToSignUpLink to="/signup">Sign Up</GoToSignUpLink></GoToSignUp>
            </LogInContainer>
        </LogInBox>
    )
}

export default LogInForm