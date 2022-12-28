// import PropTypes from 'prop-types'

export function MessageList({ messages }) {
    return (
        <>
            <h2>Message list</h2>
            <ul>
                {/* {messages.map((message, index) => (
                    <li key={index}>
                        {message.author} : {message.text}
                    </li>
                ))} */}
            </ul>
        </>
    )
}

// MessageList.propTypes = {
//     messages: PropTypes.array
// }