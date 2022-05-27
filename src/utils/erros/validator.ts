import { errorLog } from '../console/console_colors'

export class ValidatorError extends Error {
    constructor(message : string, type: 'web' | 'cli') {
        super(message)
        this.name = this.constructor.name
        this.message = message
        this.loggerMessage(this.message, type)
    }

    loggerMessage(message: string, type : string) {
        if(type === 'web')
            this.validatorWeb(message)
        else 
            this.loggerCli(message)
    }

    loggerCli(message: string): NodeJS.Process {
        errorLog(message)
        process.exit(0);
    }

    validatorWeb(message: string) {
        errorLog(message)
        return message
    }
}