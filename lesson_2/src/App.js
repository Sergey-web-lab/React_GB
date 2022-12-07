import './App.css';
import { Component, useEffect } from 'react';
import Form from './components/Form';
import PostList from './components/PostList';
import UseEffectCheck from './components/UseEffectCheck';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [
        { text: 'Hello', author: 'Sergey', id: 1 },
        { text: 'Hi', author: 'Andrey', id: 2 },
        { text: 'Salutation', author: 'Pasha', id: 3 }
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




















// const testText = 'Если этот текст видно, то проп работает'

// function App(props) {
//   const addMessageList = (body) => {
//     const newItem = {
//       text: body,
//       author: 'New user'
//     }
//     setMessageList(({ data }) => {
//       const newArr = [...messageList, newItem];
//       return {
//         newArr
//       }
//     })
//   };
//   useEffect(() => {
//     console.log('ParentDidMount');
//   })
//   const [messageList, setMessageList] = useState(
//     [
//       {
//         text: 'Hello', author: 'Sergey'
//       },
//       {
//         text: 'Hi', author: 'Andrey'
//       },
//       {
//         text: 'Salutation', author: 'Anna'
//       }
//     ])

//   return (
//     <div className="App">
//       <ul>
//         {messageList.map((item) => (
//           <li>{`${item.author} говорит ${item.text}`}</li>
//         ))}
//       </ul>
//       <header className="App-header">
//         <Form onAdd={addMessageList}></Form>
//         <Message name={testText} />
//       </header>
//     </div>
//   );
// }

// export default App;
