import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as types from '../store/profile/types'

export function ProfilePage() {

    const name = useSelector((store) => store.name)
    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch({ type: types.CHANGE_NAME, payload: value })
        setValue('')
    }

    const toggleHero = () => {
        if (name === 'Batman') {
            dispatch({ type: types.TOGGLE_NAME, payload: 'Superman' })
        } else {
            dispatch({ type: types.TOGGLE_NAME, payload: 'Batman' })
        }
    }

    return (
        <>
            <h1>ProfilePage</h1>
            <hr />
            <h2>{name}</h2>
            <input placeholder="your own hero name" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleChange}>Choose your own hero name</button>
            <button onClick={toggleHero}>Toggle hero</button>
        </>
    )
}