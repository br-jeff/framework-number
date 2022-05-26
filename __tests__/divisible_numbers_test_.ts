import { divisibleNumbers } from "../src/domain/use_cases/divisible_numbers";

describe('should test divisible numbers', () => {
    it('should return divisible numbers by 45', () => {
        const number: number = 45 
        const expectedPrimeNumbers = [1,3,5,9, 15,45]
        const result = divisibleNumbers(number)
        expect(result).toEqual(expectedPrimeNumbers)
    })

    it('should return divisible numbers by 80', () => {
        const number: number = 80 
        const expectedPrimeNumbers =  [1,2,4,5,8,10,16,20,40,80]
        const result = divisibleNumbers(number)
        expect(result).toEqual(expectedPrimeNumbers)
    })
    
})