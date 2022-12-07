import '../App.css';
import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }
    render() {
        return (
            <>
                <h1>Поле для ввода текста</h1>
                <form
                    onSubmit={this.onSubmit}>
                    <input
                        onChange={this.onValueChange}
                        value={this.state.text}
                    ></input>
                    <button type='submit'>Ok</button>
                </form>
            </>
        )
    }
}

