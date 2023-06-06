import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { doc, onSnapshot } from "firebase/firestore";

import { getDb } from "../../utils/firebase/firebase.utils";

import { selectCurrentUser } from "../../store/user/user.selector"

import { changeUserChat } from "../../store/chat/chat.action"

import Friend from "../friend/Friend.component"
import Search from "../search/Search.component"
import Navigation from "../../routes/navigation/Navigation.component";

import { FriendListContainer, FriendContainer, Divider } from "./friends-list.style"


const FriendList = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [chats, setChats] = useState({});

    const currentUser = useSelector(selectCurrentUser)


    useEffect(() => {
        if (currentUser) {
            const db = getDb()
            const unSub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data())
            });

            return () => {
                unSub();
            };
        }
    }, [currentUser]);


    const handleSelect = (user) => {
        dispatch(changeUserChat(user, currentUser))
        const { displayName } = user
        navigate(displayName)
    }

    return (
        <>
            <FriendListContainer >
                <Navigation />
                <h3>Chats</h3>
                <Search />
                {
                    chats && Object.entries(chats).sort((a, b) => b[1].date - a[1].date).map((chat) => (
                        <FriendContainer key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
                            <Friend user={chat[1]} />
                            <Divider />
                        </FriendContainer>
                    ))
                }
            </FriendListContainer>
        </>
    )
}

export default FriendList