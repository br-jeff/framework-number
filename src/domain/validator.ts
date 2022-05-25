import { ValidatorError } from '../utils/erros/validate_error'

export function validator(argNumber: string) {
    const number: number = parseInt(argNumber)

    if(Number.isNaN(number)) {
        throw new ValidatorError(`Erro o parâmetro não é um número`)
    }
    if(number < 0) {
        throw new ValidatorError(`Erro o número não pode ser negativo`)
    }

    if(number < 2 && number >= 0) {
        throw new ValidatorError(`Error o número  não pode ser "${number}"`)
    }

}