import express from 'express';

const app = express()


app.get('/api/greet', (req, res) => {
    res.json('Hello from backend!')
})


app.get('/api/users' , (req , res) =>{

    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Neil Doe' },
    ]
    res.json(users)
})



export default app;