const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.raw({ type: '*/*', limit: '20mb' }));

app.post('/upload', (req, res) => {
    fs.appendFileSync('audio.raw', req.body);
    console.log('Received chunk:', req.body.length);
    res.sendStatus(200);
});

app.get('/', (req, res) => {
    res.send('Somni audio server running');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running');
});
