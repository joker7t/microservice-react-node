import { Request, Response, NextFunction } from 'express';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-conection-error';

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof RequestValidationError) {
        return res.status(error.errorCode).json({errors: error.synchronizeError()});
    }
    if (error instanceof DatabaseConnectionError) {
        return res.status(error.errorCode).json({errors: error.synchronizeError()});
    }
    return res.status(400).json({
        errors: [
            {
                message: "Something went wrong"
            }
        ]
    });
}