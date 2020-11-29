import express from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import {currentUserRouter} from './routes/current-user';
import {signInRouter} from './routes/signin';
import {signOutRouter} from './routes/signout';
import {signUpRouter} from './routes/signup';
import {errorHandler} from './middlewares/error-handler';
import {NotFoundError} from './errors/not-found-error';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: true
}));

//routers
app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);
//handle invalid routes
app.get('*', async () => {
    throw new NotFoundError();
});
//end routers

app.use(errorHandler);

const start = async () => {
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Connected to mongodb...');
    } catch (error) {
        console.error(error);
    }
}

start();

app.listen(3000, () => {
    console.log("Listening on port 3000!!!");
});

