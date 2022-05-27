import { Request , Response } from 'express'
import { validator } from '../../domain/validator'
import { divisibleNumbers } from '../../domain/use_cases/divisible_numbers'
import { primeNumbers } from '../../domain/use_cases/prime_numbers'


export default class CalculateDivisible {

    async index(req: Request, res : Response){
        const param: string = req.params.number
        const checkValidator = validator(param, 'web')
        const numeratorNumber: number = parseInt(param)

        if(checkValidator) {
            return res.json({ error: checkValidator.message })
        }

        const getDivisbleNumbers = divisibleNumbers(numeratorNumber)
        const getPrimes = primeNumbers(getDivisbleNumbers)


        return res.json({
            númeroEscolhido: numeratorNumber,
            divisiveis: JSON.stringify(getDivisbleNumbers),
            primos: JSON.stringify(getPrimes)

        });
    }
}

