import { USER_ACTION_TYPES } from "./user.types";

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
    return ({
        type: USER_ACTION_TYPES.LOG_IN_FAILED,
        payload: error
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
    return ({
        type: USER_ACTION_TYPES.SIGN_UP_FAILED,
        payload: error
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