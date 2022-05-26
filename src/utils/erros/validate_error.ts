import { errorLog } from '../console/console_colors'

export class ValidatorError extends Error {
    constructor(message : string) {
        super(message)
        this.name = this.constructor.name
        this.loggerMessage(message)
    }

    loggerMessage(message: string): NodeJS.Process {
        errorLog(message)
        return process.exit(0);
    }
}