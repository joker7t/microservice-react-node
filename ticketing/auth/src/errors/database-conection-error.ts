export class DatabaseConnectionError extends Error {
    errorCode = 500;
    private reason = 'Error while connect to the database';

    constructor(){
        super();
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    synchronizeError() {
        return [
            {
                message: this.reason
            }
        ];
    }
}