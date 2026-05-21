import express from 'express';


const app = express()



app.get('/', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
})


app.get('/data', (req, res) => {
    res.json({ data: 'This is some data from the backend.' });
})


app.get('/user' , (req , res) =>{
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];
    res.json(users);
})



app.get('/api/new' , (req , res) =>{
    res.json({ message: 'Hello World!' });
})




export default app;