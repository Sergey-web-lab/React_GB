import { ChatList } from "../components/ChatList"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

export function ChatPage() {

    return (
        <>
            <h1>ChatPage</h1>
            <ChatList></ChatList>
        </>
    )
}