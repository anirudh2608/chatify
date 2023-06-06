import { useEffect } from "react";

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { checkUserSession } from "./store/user/user.action";

import { selectCurrentUser } from "./store/user/user.selector";

import SignUp from "./routes/sign-up/SignUp.component";
import LogIn from "./routes/log-in/LogIn.component";
import Home from "./routes/home/Home.component";
  

function App() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const currentUser = useSelector(selectCurrentUser)

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])


  useEffect(() => {
    if (currentUser) navigate("chats")
  }, [currentUser])


  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="login" replace={true} />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="chats/*" element={currentUser ? (
          <Home />
        )
          : (
            <Navigate to="/" replace />
          )
        } />
      </Routes>
    </>
  );
}

export default App;
