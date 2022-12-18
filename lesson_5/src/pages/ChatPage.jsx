import { ChatList } from "../components/ChatList"

export function ChatPage({ onAddChat }) {

    return (
        <>
            <h1>ChatPage</h1>
            <ChatList onAddChat={onAddChat}></ChatList>
        </>
    )
}