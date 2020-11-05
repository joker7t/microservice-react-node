import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

const CommentCreate = ({postId} : {postId: String}) => {
    const [content, setContent] = useState('');

    const handleSubmit: (e: React.FormEvent) => void = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });
        setContent('');
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Content</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter comment content" 
                            value={content} name='content'
                            onChange={e => setContent(e.target.value)}
                        />
                    </Form.Group>  

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
            </Form>
        </div>
    );
}

export default CommentCreate;
