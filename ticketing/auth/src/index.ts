import express from 'express';
import { json } from 'body-parser';
import {currentUserRouter} from './routes/current-user';
import {signInRouter} from './routes/signin';
import {signOutRouter} from './routes/signout';
import {signUpRouter} from './routes/signup';
import {errorHandler} from './middlewares/error-handler';
import {NotFoundError} from './errors/not-found-error';

const app = express();

app.use(json());

//routers
app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);
//handle invalid routes
app.get('*', () => {
    throw new NotFoundError();
});
//end routers

app.use(errorHandler);

app.listen(3000, () => {
    console.log("Listening on port 3000!!!");
});