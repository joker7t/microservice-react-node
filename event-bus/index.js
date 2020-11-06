const express = require('express');
const {randomBytes}  = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/events', (req, res) => {
    const {event} = res.body;
    axios.post('http://localhost:4000/events', event);
    axios.post('http://localhost:4001/events', event);
    axios.post('http://localhost:4002/events', event);

    res.status({status: 'OK'});
    
});

app.listen(4005, () => {
    console.log('listening on port 4005');
});