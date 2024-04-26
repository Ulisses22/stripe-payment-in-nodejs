const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());
const PORT = 3000;


app.listen(PORT, () =>{

    console.log(`Listening on ${PORT} ...`);
})