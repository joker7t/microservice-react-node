import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post('/api/users/signup', {
                email: email,
                password: password
            });
            console.log(res.data);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <h1>Sign Up</h1>
            <div className="form-group">
                <label>Email Address</label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                />
            </div>
            <button className="btn btn-primary">Sign Up</button>
        </form>
    );
};

export default SignUp;