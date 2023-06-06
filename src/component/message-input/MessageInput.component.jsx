import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { updateChatMessagesStart } from "../../store/chat/chat.action"

import { selectChatId, selectUser } from "../../store/chat/chat.selector"
import { selectCurrentUser } from "../../store/user/user.selector"

import Input, { INPUT_TYPE_CLASSES } from "../input/Input.component"
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.component"

import { MessageInputContainer, SendContainer } from "./message-input.style"

import Attach from '../../assets/attach.png'
import SendImage from '../../assets/img.png'



const MessageInput = () => {

    const dispatch = useDispatch()

    const currentUser = useSelector(selectCurrentUser)
    const user = useSelector(selectUser)
    const chatId = useSelector(selectChatId)

    const [text, setText] = useState("")
    const [image, setImage] = useState(null)

    const textHandler = (event) => {
        const { value } = event.target
        setText(value)
    }

    const imgHandler = (event) => {
        const { files } = event.target
        setImage(files[0])
    }

    const sendMessageHandler = () => {
        dispatch(updateChatMessagesStart(image, text, chatId, currentUser, user))
        setText('')
        setImage(null)
    }
    
    return (
        <MessageInputContainer>

            <Input
                inputType={INPUT_TYPE_CLASSES.messageInput}
                type="text"
                value={text}
                placeholder="Type message....."
                onChange={textHandler}
            />

            <SendContainer>
                <img src={Attach} alt="" />
                <input
                    type="file"
                    style={{ display: "none" }}
                    id="file"
                    onChange={imgHandler}
                />
                <label htmlFor="file">
                    <img src={SendImage} alt="" />
                </label>

                <Button buttonType={BUTTON_TYPE_CLASSES.sendButton} onClick={sendMessageHandler}>Send</Button>
            </SendContainer>

        </MessageInputContainer>
    )
}

export default MessageInput