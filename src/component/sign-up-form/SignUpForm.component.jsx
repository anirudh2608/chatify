import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { clearUserErrors, signUpstart } from "../../store/user/user.action"

import { selectAuthError, selectIsLoading } from "../../store/user/user.selector"

import Button from "../button/Button.component"
import Input from "../input/Input.component"
import Spinner from "../spinner/Spinner.component"

import {
    SignUpFormBox,
    SignUpFormContainer,
    SignUpFormHeading,
    ButtonContainer,
    Divider,
    Separater,
    GoToLogIn,
    GoToLogInLink
} from "./sign-up-form.style"



const defaultFormFields = {
    name: "",
    email: "",
    password: "",
    cPassword: ""
}

const SignUpForm = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const isLoading = useSelector(selectIsLoading)
    const authError = useSelector(selectAuthError)

    const [error, setError] = useState("")
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { name, email, password, cPassword } = formFields

    const changeHandler = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const submitHandler = async (event) => {
        event.preventDefault()

        if (password !== cPassword) {
            setError("Passwords do not match")
            return
        }

        try {
            dispatch(signUpstart(email, password, { displayName: name }))
            if (error) {
                resetFormFields()
                navigate("/login")
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const goToLogIn = () => {
        dispatch(clearUserErrors())
        navigate("/login")
    }

    useEffect(() => {
        setError(authError)
    }, [authError])

    return (
        <SignUpFormBox>
            {isLoading && <Spinner />}
            <SignUpFormContainer>
                <h1>Chatify</h1>

                <SignUpFormHeading>Create an account</SignUpFormHeading>

                <form onSubmit={submitHandler}>

                    <Input
                        label="Full name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={changeHandler}
                        required
                    />

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

                    <Input
                        label="Confirm password"
                        type="password"
                        name="cPassword"
                        value={cPassword}
                        onChange={changeHandler}
                        required
                    />

                    <ButtonContainer>
                        {error && <p>{error}</p>}
                        <Button type="submit">Sign In</Button>
                    </ButtonContainer>

                </form>

                <Separater>
                    <Divider />
                    <span>OR</span>
                    <Divider />
                </Separater>

                <GoToLogIn>Already have an account? <GoToLogInLink onClick={goToLogIn}>Log In</GoToLogInLink></GoToLogIn>

            </SignUpFormContainer>
        </SignUpFormBox>
    )
}

export default SignUpForm