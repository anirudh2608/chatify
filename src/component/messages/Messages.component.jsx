import { useEffect, useState } from "react"
import { doc, onSnapshot } from "firebase/firestore";
import { useSelector } from "react-redux"

import { getDb } from "../../utils/firebase/firebase.utils"

import { selectChatId } from "../../store/chat/chat.selector"

import Message from "../message/Message.component"

import { MessagesContainer } from "./messages.style"


const Messages = () => {

    const chatId = useSelector(selectChatId)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if (chatId) {
            const db = getDb()
            const unSub = onSnapshot(doc(db, "chats", chatId), (doc) => {
                doc.exists() && setMessages(doc.data().messages)
            });

            return () => {
                unSub();
            };
        }
    }, [chatId]);
    return (
        <MessagesContainer>
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </MessagesContainer>
    )
}

export default Messages