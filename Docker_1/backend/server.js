import express from 'express';

const app = express();

app.get('/', (req, res) => {
   return res.json({ message: 'Hello from the backend!' });
});

app.listen(5000, () => {
   console.log('Listening on port 5000');
});
