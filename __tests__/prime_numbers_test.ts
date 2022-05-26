import { primeNumbers } from "../src/domain/use_cases/prime_numbers";

describe('should test primeNumbers', () => {
    it('should return prime numbers', () => {
        const numbers: number[] = [1,3,5,9,15,45]
        const expectedPrimeNumbers = [1,3,5]
        const result = primeNumbers(numbers)
        expect(result).toEqual(expectedPrimeNumbers)
    })

    it('should sort prime numbers', () => {
        const numbers: number[] = [20,19,41,4,8,42,1,2,3,5,11,13,43]
        const expectedPrimeNumbers = [1,2,3,5,11,13,19,41,43]
    
        const result = primeNumbers(numbers)

        expect(result).toEqual(expectedPrimeNumbers)
    })

    it('should not show duplicated numbers', () => {
        const numbers: number[] = [20, 20, 13, 13, 9, 9, 3, 3, 3, 3]
        const expectedPrimeNumbers = [1,3,13]
    
        const result = primeNumbers(numbers)

        expect(result).toEqual(expectedPrimeNumbers)
    })
})