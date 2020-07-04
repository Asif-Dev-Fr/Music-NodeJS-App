const express = require('express')
const app = express();
const fetch = require('node-fetch');

app.listen(3000, () => console.log('Listening at port 3000'));
app.use(express.static('public'));