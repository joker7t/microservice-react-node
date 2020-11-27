import {ValidationError} from 'express-validator';

export class RequestValidationError extends Error {
    errorCode = 400;
    constructor(private errors: ValidationError[]){
        super();

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    synchronizeError() {
        return this.errors.map(err => {
            return {
                message: err.msg,
                field: err.param
            };
        });
    }
}