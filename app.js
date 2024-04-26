const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());


app.listen(process.env.PORT, () =>{

    console.log(`Listening on ${process.env.PORT} ...`);
})