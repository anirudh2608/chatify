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
    const currentUser = useSelector(selectCurrentUser)

    // console.log(message)
    const { text, senderId, image,date } = message

    const checkOwnerMessage = currentUser.uid === senderId

    return (


        <>
            {
                checkOwnerMessage
                    ? <OwnerMessageContainer>
                        <MessageInfo>
                            <img src="https://images.pexels.com/photos/5558238/pexels-photo-5558238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <span>{date}</span>
                        </MessageInfo>
                        <OwnerMessageContent>
                            <p> {text}</p>
                            {image && <img src={image} alt="" />}
                        </OwnerMessageContent>
                    </OwnerMessageContainer>

                    : <MessageContainer>
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