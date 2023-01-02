// import '../src/MainPage.css';
import { Component, useEffect } from 'react';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageList: [
            ]
        };
        this.addMessageList = this.addMessageList.bind(this);

        this.maxId = 4;
    }

    addMessageList(body) {
        const newItem = {
            text: body,
            author: 'New user',
            id: this.maxId++
        }
        this.setState(({ messageList }) => {
            const newArr = [...messageList, newItem];
            return {
                messageList: newArr
            }
        })
    }

    render() {
        return (
            <div className="App" >
                <h1>Welcome to the main page</h1>
            </div >
        )
    }
}
