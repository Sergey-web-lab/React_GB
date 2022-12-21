import '../MainPage.css';
import { useState } from 'react';
import React, { Component } from 'react';
import { useDispatch } from 'react-redux'
import { addMessage } from '../store/messages/actions';
import { useParams } from 'react-router-dom'

// export default class Form extends Component {
export function Form({ addMessage }) {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const { chatId } = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addMessage(chatId, text))
        setText('')
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         text: ''
    //     }
    //     this.onValueChange = this.onValueChange.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);
    // }



    // onValueChange(e) {
    //     this.setState({
    //         text: e.target.value
    //     })
    // }

    // onSubmit(e) {
    //     const dispatch = useDispatch()
    //     const { chatId } = useParams()

    //     e.preventDefault();
    //     dispatch(addMessage(chatId, text))
    //     this.props.onAdd(this.state.text);
    //     this.setState({
    //         text: ''
    //     });
    // }

    // render() {
    return (
        <>
            <h1>Поле для ввода текста</h1>
            <form
                onSubmit={handleSubmit}>
                <input
                    onChange={(event) => setText(event.target.value)}
                    value={text}
                ></input>
                <button type='submit'>Ok</button>
            </form>
        </>
    )
    // }
}

