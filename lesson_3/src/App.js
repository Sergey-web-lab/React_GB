import { Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import MainPage from "./pages/MainPage"
import { ProfilePage } from "./pages/ProfilePage"
import { ChatPage } from "./pages/ChatPage"
import { ChatList } from "./components/ChatList"
import { useState } from "react"
import { nanoid } from "nanoid"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store"

const defaultMessages = {
  default: [
    {
      author: 'user',
      text: 'one text'
    },
    {
      author: 'user',
      text: 'two text'
    }
  ]
}

export function App() {

  // const [messages, setMessages] = useState(defaultMessages)

  // const chats = Object.keys(messages).map((chat) => ({
  //   id: nanoid(),
  //   name: chat
  // }))

  // const onAddChat = (newChat) => {
  //   setMessages({
  //     ...messages,
  //     [newChat.name]: []
  //   })
  // }

  // const onAddMessage = (chatId, newMessage) => {
  //   setMessages({
  //     ...messages,
  //     [chatId]: [...messages[chatId], newMessage]
  //   })
  // }

  return (
    <>
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path="/" element={<Header></Header>}>
            <Route index element={<MainPage></MainPage>}></Route>
            <Route path="profile" element={<ProfilePage></ProfilePage>}></Route>
            <Route path="chats">
              <Route index element={<ChatList></ChatList>}></Route>
              <Route path=":chatId" element={<ChatPage></ChatPage>}></Route>
            </Route>
          </Route>
          <Route path="*" element={<h2>404 Page not found</h2>}></Route>
        </Routes>
      </PersistGate>
    </>
  )
}