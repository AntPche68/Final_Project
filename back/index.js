const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello Wolrd')
})

app.listen(PORT, () =>{
    console.log('Server started...')
})