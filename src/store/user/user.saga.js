import { all, takeLatest, call, put } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.types';

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    getCurrentUser,
    logInWithGooglePopUp,
    signInAuthUserWithEmailAndPassword,
    logOutUser
} from '../../utils/firebase/firebase.utils';

import {
    logInFailed,
    logInSuccess,
    logOutFailed,
    logOutSuccess,
    signUpFailed,
    signUpSuccess
} from './user.action';



export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
        yield put(logInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(logInFailed(error))
    }
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield call(createAuthUserWithEmailAndPassword, email, password)
        yield call(createUserDocumentFromAuth, user, { displayName })
        yield put(signUpSuccess())

    } catch (error) {
        yield put(signUpFailed(error))
    }

}

export function* logInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password)
        yield call(getSnapshotFromUserAuth, user)
    } catch (error) {
        yield put(logInFailed(error))
    }
}

export function* logInWithGoogle() {
    try {
        const { user } = yield call(logInWithGooglePopUp)
        yield call(getSnapshotFromUserAuth, user)
    } catch (error) {
        yield put(logInFailed(error))
    }
}

export function* logOut() {
    try {
        yield call(logOutUser)
        yield put(logOutSuccess())
    } catch (error) {
        yield put(logOutFailed(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser)
        if (!userAuth) return
        yield call(getSnapshotFromUserAuth, userAuth)

    } catch (error) {
        yield put(logInFailed(error))
    }
}


export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onEmailLogInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_LOG_IN_START, logInWithEmail)
}

export function* onGoogleLogInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, logInWithGoogle)
}

export function* onLogOutStart() {
    yield takeLatest(USER_ACTION_TYPES.LOG_OUT_START, logOut)
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}


export function* userSagas() {
    yield all([
        call(onSignUpStart),
        call(onEmailLogInStart),
        call(onGoogleLogInStart),
        call(onLogOutStart),
        call(onCheckUserSession)
    ])
}