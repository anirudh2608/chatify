import { CHAT_ACTION_TYPES } from "./chat.types";

const INITITTAL_STATE = {
    chatId: null,
    user: {},
    currentUserChats: {},
    messages: [],
    error: null
}

export const chatReducer = (state = INITITTAL_STATE, action) => {
    const { type, payload } = action

    switch (type) {
        case CHAT_ACTION_TYPES.CHANGE_USER_CHAT:
            const { user, combinedId } = payload
            return {
                ...state,
                user: user,
                chatId: combinedId
            }

        case CHAT_ACTION_TYPES.FETCH_CURRENT_USER_CHATS_SUCCESS:
            return {
                ...state,
                currentUserChats: payload
            }

        case CHAT_ACTION_TYPES.FETCH_USER_MESSAGES_SUCCESS:
            return {
                ...state,
                messages: payload
            }

        case CHAT_ACTION_TYPES.FETCH_CURRENT_USER_CHATS_FAILED:
        case CHAT_ACTION_TYPES.FETCH_USER_MESSAGES_FAILED:
            return {
                ...state,
                error: payload
            }

        default:
            return state
    }
}