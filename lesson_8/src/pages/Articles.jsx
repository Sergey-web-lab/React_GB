import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { api } from '../constants'

export function Articles() {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const getFetchArticles = async () => {
        setLoading(true)
        setError('')
        try {
            const res = await fetch(api)
            if (res.ok) {
                const data = await res.json()
                setArticles(data)
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        // getFetchArticles()
        // const response = fetch(api)
        //     .then((res) => res.json())
        //     .then((data) => setArticles(data))
    }, [])
    return (
        <>
            <div>Articles</div>
            <Button color="secondary" onClick={getFetchArticles}>Get API</Button>
            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            )}
            {!loading && articles.map((article, index) => (
                <Box sx={{ display: 'flex', justifyContent: 'center' }} key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            {/* <CardMedia
                                component="img"
                                height="140"
                                image={article.imageUrl}
                                alt="green iguana"
                            /> */}
                            <CardContent>
                                <h1>Quote by anime character</h1>
                                <Typography gutterBottom variant="h5" component="div">
                                    {article.anime}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    {article.character}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {article.quote}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            ))}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    )
}


