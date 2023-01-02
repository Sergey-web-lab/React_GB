import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../store/profile/actions'
import { signUp } from '../services/firebase'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function SignUp() {
    const [inputs, setInputs] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            await signUp(inputs.email, inputs.password)
            navigate('/signin')
        } catch (error) {
            setError(error.message)
            setInputs({ email: '', password: '' })
        } finally {
            setLoading(false)
        }

        // if (inputs.email === 'GB' && inputs.password == 'GB') {
        //     dispatch(auth(true))
        //     navigate('/')
        // } else {
        //     setError('Password or email is failed')
        //     setInputs({ email: '', password: '' })
        // }
    }

    return (
        <>
            <div>SignIn</div>
            <form onSubmit={handleSubmit}>
                <p>Email</p>
                <input type="text" name="email" value={inputs.email}
                    onChange={(e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))}>
                </input>
                <p>Password</p>
                <input type="text" name="password" value={inputs.password}
                    onChange={(e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))}>
                </input>
                <button>Login</button>
            </form>
            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    )
}
