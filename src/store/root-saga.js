import { all, call } from "redux-saga/effects"

import { userSagas } from "./user/user.saga"
import { chatSagas } from "./chat/chat.saga"


export function* rootSaga() {
    yield all([
        call(userSagas),
        call(chatSagas)
    ])
}