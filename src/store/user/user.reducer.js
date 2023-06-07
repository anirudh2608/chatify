import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action

    switch (type) {

        case USER_ACTION_TYPES.SIGN_UP_START:
            return {
                ...state,
                isLoading: true
            }

        case USER_ACTION_TYPES.SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null
            }

        case USER_ACTION_TYPES.EMAIL_LOG_IN_START:
        case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
            return {
                ...state,
                isLoading: true
            }

        case USER_ACTION_TYPES.LOG_IN_SUCCESS:
            return {
                ...state,
                currentUser: payload,
                isLoading: false,
                error: null
            }

        case USER_ACTION_TYPES.LOG_OUT_START:
            return {
                ...state,
                isLoading: true
            }

        case USER_ACTION_TYPES.LOG_OUT_SUCCESS:
            return {
                ...state,
                currentUser: payload,
                isLoading: false
            }

        case USER_ACTION_TYPES.LOG_IN_FAILED:
        case USER_ACTION_TYPES.LOG_OUT_FAILED:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
            return {
                ...state,
                error: payload,
                isLoading: false
            }

        case USER_ACTION_TYPES.CLEAR_USER_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}