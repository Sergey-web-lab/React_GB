import { useState } from "react"
import { useDispatch } from "react-redux"
import { addMessage, addMessageWithReply } from "../store/messages/actions"
import { useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function Form() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const { chatId } = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()
        setText('')
        const input = document.querySelector('.formTextInput');
        input.focus()

        dispatch(addMessageWithReply(chatId, {
            author: 'user',
            text: text
        }))
    }

    return (
        <>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <TextField autoFocus id="standard-basic" label="Standard" variant="standard"
                    className="formTextInput"
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                ></TextField>
                <Button variant="contained" size="small" color="secondary" type="submit">Add message</Button>
            </form>
        </>
    )
}