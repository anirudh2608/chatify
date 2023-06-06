import { all, takeLatest, call, put } from 'redux-saga/effects';

import { CHAT_ACTION_TYPES } from './chat.types';

import {
    fetchCurrentUserChatsFailed,
    fetchCurrentUserChatsSuccess,
    fetchUserMessagesFailed,
    fetchUserMessagesSuccess,
    updateChatMessagesFailed,
    updateChatMessagesSuccess
} from './chat.action';
import { getUserChatMessages, getUserChats, updateUserMessages } from '../../utils/firebase/firebase.utils';


export function* fetchCurrentUserChats({ payload: currentUser }) {
    try {
        const userChats = yield call(getUserChats, currentUser)
        yield put(fetchCurrentUserChatsSuccess(userChats))
    } catch (error) {
        yield put(fetchCurrentUserChatsFailed(error))
    }
}

export function* fetchUserMessages({ payload: chatId }) {
    try {
        const messages = yield call(getUserChatMessages, chatId)
        yield console.log(messages)
        yield put(fetchUserMessagesSuccess(messages))
    } catch (error) {
        yield put(fetchUserMessagesFailed(error))
    }
}

export function* updateChatMessage({ payload: { image, text, chatId, currentUser, user } }) {
    try {
        yield call(updateUserMessages, image, text, chatId, currentUser, user)
        yield put(updateChatMessagesSuccess())
    } catch (error) {
        yield put(updateChatMessagesFailed(error))
    }
}


export function* onFetchCurrentUserChatsStart() {
    yield takeLatest(CHAT_ACTION_TYPES.FETCH_CURRENT_USER_CHATS_START, fetchCurrentUserChats)
}

export function* onFetchUserMessagesStart() {
    yield takeLatest(CHAT_ACTION_TYPES.FETCH_USER_MESSAGES_START, fetchUserMessages)
}

export function* onUpdateChatMessagesStart() {
    yield takeLatest(CHAT_ACTION_TYPES.UPDATE_CHAT_MESSAGES_START, updateChatMessage)
}

export function* chatSagas() {
    yield all([
        call(onFetchCurrentUserChatsStart),
        call(onFetchUserMessagesStart),
        call(onUpdateChatMessagesStart)
    ])
}