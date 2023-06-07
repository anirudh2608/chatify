import { USER_ACTION_TYPES } from "./user.types";

const errorFinder = (error) => {
    switch (error.code) {
        case "auth/user-not-found":
            return "No user found"
        case "auth/wrong-password":
            return "Please enter correct password"
        case "auth/email-already-in-use":
            return "Email already in use"
        case "auth/weak-password":
            return "Password should be atleast 6 characters"
        default:
            return ""
    }
}

export const setCurrentUser = (user) => {
    return ({
        type: USER_ACTION_TYPES.SET_CURRENT_USER,
        payload: user
    })
}

export const checkUserSession = () => {
    return ({
        type: USER_ACTION_TYPES.CHECK_USER_SESSION
    })
}

export const googleLogInStart = () => {
    return ({
        type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START
    })
}

export const emailLogInStart = (email, password) => {
    return ({
        type: USER_ACTION_TYPES.EMAIL_LOG_IN_START,
        payload: { email, password }
    })
}

export const logInSuccess = (user) => {
    return ({
        type: USER_ACTION_TYPES.LOG_IN_SUCCESS,
        payload: user
    })
}

export const logInFailed = (error) => {
    const loginError = errorFinder(error)
    return ({
        type: USER_ACTION_TYPES.LOG_IN_FAILED,
        payload: loginError
    })
}

export const signUpstart = (email, password, { displayName }) => {
    return ({
        type: USER_ACTION_TYPES.SIGN_UP_START,
        payload: { email, password, displayName }
    })
}

export const signUpSuccess = () => {
    return ({
        type: USER_ACTION_TYPES.SIGN_UP_SUCCESS
    })
}

export const signUpFailed = (error) => {
    const signUpError = errorFinder(error)
    return ({
        type: USER_ACTION_TYPES.SIGN_UP_FAILED,
        payload: signUpError
    })
}

export const logOutStart = () => {
    return ({
        type: USER_ACTION_TYPES.LOG_OUT_START
    })
}

export const logOutSuccess = () => {
    return ({
        type: USER_ACTION_TYPES.LOG_OUT_SUCCESS,
        payload: null
    })
}

export const logOutFailed = (error) => {
    return ({
        type: USER_ACTION_TYPES.LOG_OUT_FAILED,
        payload: error
    })
}

export const clearUserErrors = () =>{
    return({
        type:USER_ACTION_TYPES.CLEAR_USER_ERRORS
    })
}