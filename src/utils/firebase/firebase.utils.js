import { initializeApp } from "firebase/app";
import { nanoid } from "nanoid"

import { firebaseConfig } from "./firebase.key";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    query,
    collection,
    where,
    getDocs,
    updateDoc,
    serverTimestamp,
    onSnapshot,
    arrayUnion
} from "firebase/firestore";

import {
    getStorage,
    getDownloadURL,
    ref,
    uploadBytesResumable
} from "firebase/storage";



const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const logInWithGooglePopUp = () => signInWithPopup(auth, googleProvider)

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}


export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return

    const userDocRef = doc(db, "users", userAuth.uid)

    const userChatsDocRef = doc(db, "userChats", userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()


        try {
            await setDoc(userDocRef, {
                uid: userAuth.uid,
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })

            await setDoc(userChatsDocRef, {});

        } catch (error) {
            console.log(error)
        }
    }

    return userSnapshot

}


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}

export const logOutUser = async () => signOut(auth)

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            unsubscribe()
            resolve(authUser)
        },
            reject)
    })
}

export const searchUser = async (searchedName) => {
    const q = query(
        collection(db, "users"),
        where("displayName", "==", searchedName)
    )
    try {
        const querySnapshot = await getDocs(q);

        let snapshotDataArray = []
        querySnapshot.forEach((doc) => {
            snapshotDataArray.push(doc.data())
        });
        return snapshotDataArray
    } catch (error) {
        console.log(error)
    }
}

export const addUserToChat = async (currentUser, user) => {

    const combinedId =
        currentUser.uid > user.uid ?
            currentUser.uid + user.uid :
            user.uid + currentUser.uid

    try {
        const chatDoc = await getDoc(doc(db, "chats", combinedId))

        if (!chatDoc.exists()) {
            const chatDocRef = doc(db, "chats", combinedId)
            await setDoc(chatDocRef, { messages: [] })
        }

        const currentUserChatRef = doc(db, "userChats", currentUser.uid)

        await updateDoc(currentUserChatRef, {
            [combinedId + ".userInfo"]: {
                uid: user.uid,
                displayName: user.displayName
            },
            [combinedId + ".date"]: serverTimestamp()
        })

        const userChatRef = doc(db, "userChats", user.uid)


        await updateDoc(userChatRef, {
            [combinedId + ".userInfo"]: {
                uid: currentUser.uid,
                displayName: currentUser.displayName
            },
            [combinedId + ".date"]: serverTimestamp()
        })
    } catch (error) {
        console.log(error)
    }
}

export const getUserChats = async (currentUser) => {
    return new Promise((resolve, reject) => {
        const userChatsRef = doc(db, "userChats", currentUser.uid)
        const unsubscribe = onSnapshot(userChatsRef, (doc) => {
            resolve(doc.data())
            unsubscribe()

        },
            reject)
    })
}

export const getUserChatMessages = (chatId) => {
    return new Promise((resolve, reject) => {
        const userChatMessagessRef = doc(db, "chats", chatId)
        const unsubscribe = onSnapshot(userChatMessagessRef, (doc) => {
            if (doc.exists()) {
                resolve(doc.data().messages)
                unsubscribe()
            }
        },
            reject)
    })
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    // add a zero in front of numbers<10
    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }
    return (h + ":" + m)
}


export const updateUserMessages = async (image, text, chatId, currentUser, user) => {
    try {
        if (image) {
            const storageRef = ref(storage, nanoid())
            const uploadTask = uploadBytesResumable(storageRef, image)

            uploadTask.on(
                (error) => {
                    console.log(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", chatId), {
                            messages: arrayUnion({
                                id: nanoid(),
                                text,
                                senderId: currentUser.uid,
                                date: startTime(),
                                img: downloadURL
                            })
                        })
                    })
                }
            )
        } else {
            await updateDoc(doc(db, "chats", chatId), {
                messages: arrayUnion({
                    id: nanoid(),
                    text,
                    senderId: currentUser.uid,
                    date: startTime(),
                })
            })
        }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [chatId + ".lastMessage"]: {
                text,
            },
            [chatId + ".date"]: serverTimestamp()
        })


        await updateDoc(doc(db, "userChats", user.uid), {
            [chatId + ".lastMessage"]: {
                text,
            },
            [chatId + ".date"]: serverTimestamp()
        })

    } catch (error) {
        console.log(error)
    }
}

export const getDb = () => {
    return db
}