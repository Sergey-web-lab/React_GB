// import '../src/MainPage.css';
import { Component, useEffect } from 'react';
import { Form } from '../components/Form';
import PostList from '../components/PostList';
import UseEffectCheck from '../components/UseEffectCheck';


export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageList: [
                // { text: 'Hello', author: 'Sergey', id: 1 },
                // { text: 'Hi', author: 'Andrey', id: 2 },
                // { text: 'Salutation', author: 'Pasha', id: 3 }
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
                <UseEffectCheck></UseEffectCheck>
                <PostList posts={this.state.messageList}></PostList>
                < header className="App-header" >
                    <Form onAdd={this.addMessageList}></Form>
                </header>
            </div >
        )
    }
}
