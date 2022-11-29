import './App.css';

function Message(props) {
    return (
        <div className="Message">
            <div className="Message-bg">
                <h3>Это сообщение выводится через проп для задания 2 и 3 из App.js:</h3>
                <h2>{props.name}</h2>
            </div>
        </div>
    );
}

export default Message;