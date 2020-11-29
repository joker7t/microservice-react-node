import express, {Request, Response} from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-conection-error';
import { BadRequestError } from '../errors/bad-request-error';
import {User} from '../models/user';

const router = express.Router();

router.post('/api/users/signup',
    [
        body('email').isEmail().withMessage('Email must be valid'),
        body('password').trim().isLength({min: 4, max: 20}).withMessage('Password must be between 4 and 20 characters')
    ],
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new RequestValidationError(errors.array());
        }
        // throw new DatabaseConnectionError();

        const {email, password} : {email:string, password:string} = req.body;
        const existedUser = await User.findOne({email});
        if (existedUser) {
            console.log('Email in use');
            throw new BadRequestError('Email in use');
        }
        const user = User.build({
            email, password
        });
        await user.save();
        console.log('Creating user!!!');
        res.status(201).send(user);
});

export {router as signUpRouter};