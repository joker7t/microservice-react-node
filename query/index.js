const express = require('express');
const {randomBytes}  = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.post('/posts', (req,res) => {
    res.send(posts);
});

app.post('/events', (req,res) => {
    const {type, data} = req.body;
    if (type === 'PostCreated') {
        const {title, id} = data;
        posts[id] = {
            id,
            title,
            comments: []
        };
    }
    if (type === 'CommentCreated') {
        const {id, content, postId} = data;
        const post = posts[postId];
        post.comments.push({id, content});
    }
    console.log(posts);
    res.send({});
});

app.listen(4002, () => {
    console.log('listening on port 4002');
});