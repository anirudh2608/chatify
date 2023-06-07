import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  useNavigate } from "react-router-dom"

import { clearUserErrors, emailLogInStart, googleLogInStart } from "../../store/user/user.action"

import { selectAuthError, selectIsLoading } from "../../store/user/user.selector"

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.component"
import Input from "../input/Input.component"
import Spinner from "../spinner/Spinner.component"

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
    const navigate = useNavigate()

    const isLoading = useSelector(selectIsLoading)

    const authError = useSelector(selectAuthError)

    const [error, setError] = useState("")
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
            console.log(error.code)
        }
    }

    const logInWithGoogle = () => {
        dispatch(googleLogInStart())
    }

    const goToSignUp = () => {
        dispatch(clearUserErrors())
        navigate("/signup")
    }


    useEffect(() => {
        setError(authError)
    }, [authError])

    return (
        <LogInBox>
            {isLoading && <Spinner />}
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
                        {error && <p>{error}</p>}
                        <Button type="submit">Log In</Button>
                        <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={logInWithGoogle}>Log in with Google</Button>
                    </ButtonContainer>

                </form>

                <Separater>
                    <Divider />
                    <span>OR</span>
                    <Divider />
                </Separater>

                <GoToSignUp>Don't have an account? <GoToSignUpLink onClick={goToSignUp} >Sign Up</GoToSignUpLink></GoToSignUp>
            </LogInContainer>
        </LogInBox>
    )
}

export default LogInForm