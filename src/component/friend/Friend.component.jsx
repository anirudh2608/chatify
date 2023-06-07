import { useEffect, useState } from "react"

import {
    UserImage,
    UserChatInfo,
    UserName,
    UserLatestMessage,
    FriendInfoContainer
} from "./friend.style"


const Friend = ({ user, searchedUser }) => {

    const [name, setName] = useState("")
    const [lastMessage, setLastMessage] = useState("")

    useEffect(() => {

        if (searchedUser) {
            const { displayName } = searchedUser
            setName(displayName)
        } else if (user) {
            const { displayName } = user.userInfo
            if (user.lastMessage) setLastMessage(user.lastMessage.text)
            setName(displayName)
        }

    }, [user, searchedUser])

    return (
        <>
            <FriendInfoContainer>
                <UserImage src="https://images.pexels.com/photos/5558238/pexels-photo-5558238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <UserChatInfo>
                    <UserName>{name}</UserName>
                    {lastMessage && <UserLatestMessage>{lastMessage}</UserLatestMessage>}
                </UserChatInfo>
            </FriendInfoContainer>
        </>
    )
}

export default Friend