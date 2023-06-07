import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"

import { selectCurrentUser } from "../../store/user/user.selector"

import {
    MessageContainer,
    MessageContent,
    MessageInfo,
    OwnerMessageContainer,
    OwnerMessageContent
} from "./message.style"


const Message = ({ message }) => {
    const ref = useRef()

    const currentUser = useSelector(selectCurrentUser)

    const { text, senderId, image, date } = message

    const checkOwnerMessage = currentUser.uid === senderId

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message])

    return (


        <>
            {
                checkOwnerMessage
                    ? <OwnerMessageContainer ref={ref}>
                        <MessageInfo>
                            <img src="https://images.pexels.com/photos/5558238/pexels-photo-5558238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <span>{date}</span>
                        </MessageInfo>
                        <OwnerMessageContent>
                            <p> {text}</p>
                            {image && <img src={image} alt="" />}
                        </OwnerMessageContent>
                    </OwnerMessageContainer>

                    : <MessageContainer ref={ref}>
                        <MessageInfo>
                            <img src="https://images.pexels.com/photos/5558238/pexels-photo-5558238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <span>{date}</span>
                        </MessageInfo>

                        <MessageContent>

                            <p> {text}</p>
                            {image && <img src={image} alt="" />}

                        </MessageContent>
                    </MessageContainer>
            }
        </>

    )
}

export default Message