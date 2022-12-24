// import MainPage from "./MainPage"
import { ChatList } from "../components/ChatList"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
// import { selectMessage } from "../store/messages/selectors"

export function ChatPage() {

    // const { chatId } = useParams()
    // const messages = useSelector(selectMessage)


    return (
        <>
            <h1>ChatPage</h1>
            <ChatList></ChatList>
        </>
    )
}