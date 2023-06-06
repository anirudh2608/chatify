import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { selectCurrentUser } from "../../store/user/user.selector"

import { changeUserChat } from "../../store/chat/chat.action"

import { addUserToChat, searchUser } from "../../utils/firebase/firebase.utils"

import { INPUT_TYPE_CLASSES } from "../input/Input.component"
import Input from "../input/Input.component"
import Friend from "../friend/Friend.component"

import { FriendContainer, SearchResultContainer } from "./search.style"



const Search = () => {

    const dispatch = useDispatch()

    const searchRef = useRef()

    const [users, setUsers] = useState([])

    const currentUser = useSelector(selectCurrentUser)

    const handleSearchChange = async (event) => {
        const { value } = event.target
        const searchUsers = await searchUser(value)
        setUsers(searchUsers)
    }

    const handleSelect = async (user) => {
        try {
            await addUserToChat(currentUser, user)
            dispatch(changeUserChat(user, currentUser))
            setUsers([])
            searchRef.current.value = ""
        } catch (error) {
            console.log(error)
        }
    }
    console.log(users.length)
    return (
        <>
            <Input
                inputType={INPUT_TYPE_CLASSES.searchInput}
                placeholder="Search a friend"
                type="search"
                onChange={handleSearchChange}
                ref={searchRef}
            />

            {(users.length !== 0)
                && <SearchResultContainer>
                    <h5>Search results</h5>

                    {
                        users.map((user) => (
                            <FriendContainer onClick={() => handleSelect(user)} key={user.uid}>
                                <Friend searchedUser={user} />
                            </FriendContainer>
                        ))
                    }
                </SearchResultContainer>}

        </>
    )
}

export default Search