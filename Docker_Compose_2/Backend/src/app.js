import express from 'express';

const app = express()
app.use(express.static('public'))





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


app.get('*name' , (req , res) => {
 res.sendFile('public/index.html' , {root : __dirname})
})



export default app;



// docker build . -t fullstack:latest
// docker run -p 5000:5000 fullstack:latest