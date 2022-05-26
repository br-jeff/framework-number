export function divisibleNumbers(number: number): number[] {
    const divisibleNumbers: number[] = [1]
    for (let i = 2; i <= number; i++) {
        const quotient = number % i

        if (quotient === 0) {
            divisibleNumbers.push(i)
        }
    }
    return divisibleNumbers
}