import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addChat, deleteChat, addMessage } from "../store/messages/actions"
import { selectChat } from "../store/messages/selectors"
import { Form } from "../components/Form.lv"
import { MessageList } from "../components/MessageList"
import { selectMessage } from "../store/messages/selectors"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


export function ChatList() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    // const [messages, setMessages] = useState([])
    const { chatId } = useParams()
    const messages = useSelector(selectMessage)
    // const addMessage = (newMessage) => {
    //     setMessages([...messages, newMessage])
    // }

    useEffect(() => {
        // if (messages.length > 0 && messages[messages.length - 1].author === 'user') {
        if (chatId &&
            messages[chatId]?.length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === 'user') {
            const timeout = setTimeout(() => {
                addMessage(chatId, {
                    author: 'bot',
                    text: 'Thank you for your message'
                })
            }, 1500)
            return () => {
                clearTimeout(timeout)
            }
        }
    }, [chatId, messages])

    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const chats = useSelector(selectChat)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addChat(value))
    }

    return (
        <>
            <Container maxWidth="md">
                <h1>Welcome to chat</h1>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Item>
                                <ul>
                                    {chats.map((chat) => (
                                        <ListItemText key={chat.id} primary={
                                            <>
                                                <Link to={`/chats/${chat.name}`}>
                                                    {chat.name}
                                                </Link>
                                                <Button variant="text" onClick={() => dispatch(deleteChat(chat.name))}>X</Button>
                                            </>
                                        } />
                                        // <li key={chat.id}>
                                        //     <Link to={`/chats/${chat.name}`}>
                                        //         {chat.name}
                                        //     </Link>
                                        //     <Button variant="text" onClick={() => dispatch(deleteChat(chat.name))}>X</Button>
                                        // </li>
                                    ))}
                                </ul>
                                <h1>ChatList</h1>
                                <form onSubmit={handleSubmit}>
                                    <TextField id="standard-basic" label="Standard" variant="standard" type="text" value={value} onChange={(e) => setValue(e.target.value)}></TextField>
                                    <Button variant="contained" size="small" color="secondary" type="submit">Create Chat</Button>
                                </form>
                            </Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>
                                <Form></Form>
                                <MessageList messages={messages}></MessageList>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>


        </>
    )
}