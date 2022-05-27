import { validator } from './src/domain/validator'
import { primeNumbers } from './src/domain/use_cases/prime_numbers'
import { divisibleNumbers } from './src/domain/use_cases/divisible_numbers'
import { welcomeMessage, finishMessage} from './src/utils/console/information_messages'

const argNumber: string = process.argv[2]
welcomeMessage(argNumber)
validator(argNumber, 'cli')

const numeratorNumber: number = parseInt(process.argv[2])
const getDivisbleNumbers = divisibleNumbers(numeratorNumber)
const getPrimes = primeNumbers(getDivisbleNumbers)

finishMessage(getDivisbleNumbers, getPrimes)