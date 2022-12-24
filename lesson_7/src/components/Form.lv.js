import { useState } from "react"
import { useDispatch } from "react-redux"
import { addMessage, addMessageWithReply } from "../store/messages/actions"
import { useParams } from "react-router-dom"

export function Form() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const { chatId } = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()
        // addMessage({
        //     author: 'user',
        //     text: text
        // })
        // dispatch(addMessage(chatId, text))
        dispatch(addMessageWithReply(chatId, {
            author: 'user',
            text: text
        }))

        setText('')
    }

    return (
        <>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                ></input>
                <button type="submit">Add message</button>
            </form>
        </>
    )
}