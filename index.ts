import { cyanLog, yellowLog } from './src/utils/console_messages'
import { validator } from './src/domain/validator'

function welcomeMessage(): void {
    cyanLog('########################### Bem Vindo ########################### ')
    yellowLog(`Número escolhido: ${argNumber}`)
}

const argNumber = process.argv[2]
welcomeMessage()
validator(argNumber)

const number = parseInt(process.argv[2])

