import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

const PostCreate = () => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/posts', {
            title
        });
        setTitle('');
    }

    return (
        <div className='container'>
            <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter post title" 
                            value={title} name='title'
                            onChange={e => setTitle(e.target.value)}
                        />
                    </Form.Group>  

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
            </Form>
        </div>
    );
}

export default PostCreate;
