import React, {useState, useEffect} from 'react';
import {ListGroup} from 'react-bootstrap';
import axios from 'axios';

const CommentList = ({postId} : {postId: String}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const loadComments = async () => {
            try {
                const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
                setComments(res.data);
            } catch (error) {
                console.error(error);
            }
        }

        loadComments();

        //eslint-disable-next-line
    }, []);

    const showComments = () => comments.map((comment: any, i: number) => 
        <ListGroup.Item key={i}>
            <div>{comment.id}</div>
            <div>{comment.content}</div>
        </ListGroup.Item>
    );

    return (
        <ListGroup>
            {showComments()}
        </ListGroup>
    );
}

export default CommentList;
