import { Request, Response, NextFunction } from 'express';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-conection-error';

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof RequestValidationError) {
        const formattedErrors = error.errors.map(err => {
            return {
                message: err.msg,
                field: err.param
            };
        });
        return res.status(400).json({errors: formattedErrors});
    }
    if (error instanceof DatabaseConnectionError) {
        return res.status(500).json({
            errors: [
                {
                    message: error.reason
                }
            ]
        });
    }
    return res.status(400).json({
        errors: [
            {
                message: "Something went wrong"
            }
        ]
    });
}