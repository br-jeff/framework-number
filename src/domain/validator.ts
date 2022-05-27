import { ValidatorError} from '../utils/erros/validator'

export function validator(argNumber: string, type: 'web' | 'cli') {
    
    const number: number = parseInt(argNumber)

    if(Number.isNaN(number)) {
        return new ValidatorError(`Erro o parâmetro não é um número`, type)
    }
    if(number < 0) {
        return new ValidatorError(`Erro o número não pode ser negativo`, type)
    }

    if(number < 2 && number >= 0) {
        return new ValidatorError(`Error o número não pode ser "${argNumber}"`, type)
    }
}