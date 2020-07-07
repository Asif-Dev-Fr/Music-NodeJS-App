const express = require('express')
const app = express();
const fetch = require('node-fetch');
require('dotenv').config();

app.listen(3000, () => console.log('Listening at port 3000'));
app.use(express.static('public'));


const API_KEY = process.env.API_KEY;

app.get('/api/:searched', async (request, response) => {

   const search = request.params.searched;

   const fetched_response = await fetch(`${API_KEY}${search}`);
   const fetched_data = await fetched_response.json();
   response.json(fetched_data); 
});