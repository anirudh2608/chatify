import { createSelector } from "reselect"

export const selectChatReducer = (state) => state.chat

export const selectUserChats = (state) => state.chat.currentUserChats

export const selectUser = (state) => state.chat.user

export const selectChatId = (state) => state.chat.chatId

// export const selectChatMessages = (state) => state.chat.messages
export const selectChatMessages = createSelector(
    [selectChatReducer],
    (message) => message.messages
)

export const selectChatsIsLoading = (state) => state.chat.isLoading