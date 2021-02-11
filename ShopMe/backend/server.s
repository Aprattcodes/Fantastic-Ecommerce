import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});
app.listen(5000, () => {
    console.log('Serve at http://localhost:5000');
});