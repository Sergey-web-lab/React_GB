import './App.css';
import Message from './Message';

const testText = 'Если этот текст видно, то проп работает'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <h3>Hello, my name is {props.name}!</h3>
        <Message name={testText} />
      </header>
    </div>
  );
}

export default App;
