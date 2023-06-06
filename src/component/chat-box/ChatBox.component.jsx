import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { selectUser } from "../../store/chat/chat.selector"

import MessageInput from "../message-input/MessageInput.component"
import Messages from "../messages/Messages.component"

import {
    ChatBoxContainer,
    ChatBoxNavbar,
    BackIcon
} from "./chat-box.style"



const ChatBox = () => {

    const navigate = useNavigate()

    const user = useSelector(selectUser)

    const chatHandler = () => {
        navigate("/chats")
    }

    return (
        <ChatBoxContainer>
            <ChatBoxNavbar>
                <BackIcon onClick={chatHandler} />
                <img src="https://images.pexels.com/photos/5558238/pexels-photo-5558238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>{user?.displayName}</span>
            </ChatBoxNavbar>

            <Messages />

            <MessageInput />

        </ChatBoxContainer>
    )
}

export default ChatBox