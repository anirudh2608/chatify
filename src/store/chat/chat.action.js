import { CHAT_ACTION_TYPES } from "./chat.types";

const getCombinedId = (user, currentUser) => {
    const combinedId =
        currentUser.uid > user.uid
            ? currentUser.uid + user.uid
            : user.uid + currentUser.uid

    return combinedId
}

export const changeUserChat = (user, currentUser) => {
    const combinedId = getCombinedId(user, currentUser)
    return ({
        type: CHAT_ACTION_TYPES.CHANGE_USER_CHAT,
        payload: { user, combinedId }
    })
}

export const fetchCurrentUserChatsStart = (currentUser) => {
    return ({
        type: CHAT_ACTION_TYPES.FETCH_CURRENT_USER_CHATS_START,
        payload: currentUser
    })
}

export const fetchCurrentUserChatsSuccess = (userChats) => {
    return ({
        type: CHAT_ACTION_TYPES.FETCH_CURRENT_USER_CHATS_SUCCESS,
        payload: userChats
    })
}

export const fetchCurrentUserChatsFailed = (error) => {
    return ({
        type: CHAT_ACTION_TYPES.FETCH_CURRENT_USER_CHATS_FAILED,
        payload: error
    })
}

export const fetchUserMessagesStart = (messages) => {
    return ({
        type: CHAT_ACTION_TYPES.FETCH_USER_MESSAGES_START,
        payload: messages
    })
}

export const fetchUserMessagesSuccess = (messages) => {
    return ({
        type: CHAT_ACTION_TYPES.FETCH_USER_MESSAGES_SUCCESS,
        payload: messages
    })
}

export const fetchUserMessagesFailed = (error) => {
    return ({
        type: CHAT_ACTION_TYPES.FETCH_USER_MESSAGES_FAILED,
        payload: error
    })
}

export const updateChatMessagesStart = (image, text, chatId, currentUser, user) => {
    return ({
        type: CHAT_ACTION_TYPES.UPDATE_CHAT_MESSAGES_START,
        payload: { image, text, chatId, currentUser, user }
    })
}

export const updateChatMessagesSuccess = () => {
    return ({
        type: CHAT_ACTION_TYPES.UPDATE_CHAT_MESSAGES_SUCCESS
    })
}

export const updateChatMessagesFailed = (error) => {
    return ({
        type: CHAT_ACTION_TYPES.UPDATE_CHAT_MESSAGES_FAILED,
        payload: error
    })
}