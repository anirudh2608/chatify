import { Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"

import { selectUser } from "../src/store/chat/chat.selector"

import ChatBox from "../src/component/chat-box/ChatBox.component"
import FriendList from "../src/component/friends-list/FriendsList.component"

import { HomeContainer, HomeBackgroundContainer } from "./home.style"


const Home = () => {
    const user = useSelector(selectUser)
    const { displayName } = user
    return (

        <HomeBackgroundContainer>
            <HomeContainer>
                <Routes>
                    <Route index element={<FriendList />} />
                    <Route path={displayName} element={<ChatBox userName={displayName} />} />
                </Routes>
            </HomeContainer>
        </HomeBackgroundContainer>

    )
}

export default Home