import { Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import MainPage from "./pages/MainPage"
import { ProfilePage } from "./pages/ProfilePage"
import { ChatPage } from "./pages/ChatPage"
import { ChatList } from "./components/ChatList"
import { useState } from "react"

export function App() {
  const onAddChat = (newChat) => {
    console.log(newChat)
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route index element={<MainPage></MainPage>}></Route>
          <Route path="profile" element={<ProfilePage></ProfilePage>}></Route>
          <Route path="chats">
            <Route index element={<ChatList onAddChat={onAddChat}></ChatList>}></Route>
            <Route path=":chatId" element={<ChatPage onAddChat={onAddChat}></ChatPage>}></Route>
          </Route>
        </Route>

        <Route path="*" element={<h2>404 Page not found</h2>}></Route>
      </Routes>
    </>
  )
}