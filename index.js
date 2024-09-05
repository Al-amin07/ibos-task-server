const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 9000;

app.use(cors);
app.use(express.json());

app.get('/', async(req, res) => {
    res.send('Hello Furni')
})
// WIdyT6wzGDxZ9Wnl
app.listen(port, () => {
    console.log('Port running at :',port)
})