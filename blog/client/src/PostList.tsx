import React, {useState, useEffect} from 'react';
import {ListGroup} from 'react-bootstrap';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState({});
    useEffect(() => {
        const loadPosts = async () => {
            try {
                const res = await axios.get('http://localhost:4000/posts');
                setPosts(res.data);
            } catch (error) {
                console.error(error);
            }
        }

        loadPosts();
        Object.values(posts).forEach(r => console.log(r));

        //eslint-disable-next-line
    }, []);

    const showPost = () => Object.values(posts).map((post: any, i: number) => 
        <ListGroup.Item key={i}>
            <div>{post.id}</div>
            <div>{post.title}</div>
        </ListGroup.Item>
    );

    return (
        <ListGroup>
            {showPost()}
        </ListGroup>
    );
}

export default PostList;
