export function primeNumbers(numbers: number[]): number[] {
    const primeNumbers: number[] = [1]
    numbers.forEach(number => {
        const checkDivisible = []
        for (let i = 2; i <= number; i++) {
            const quotient = number % i

            if (quotient === 0) {
                if (checkDivisible.length === 1) {
                    break;
                }
                checkDivisible.push(i)
            }
            if (i == number) {
                primeNumbers.push(number)
            }
        }
    })

    return primeNumbers
}