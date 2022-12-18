import { useState } from "react"
import { nanoid } from "nanoid"

export function ChatList({ onAddChat }) {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddChat({
            id: nanoid(),
            name: value
        })
    }

    return (
        <>
            <h1>ChatList</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange}></input>
                <button>Create Chat</button>
            </form>
        </>
    )
}