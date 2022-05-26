import { cyanLog, yellowLog, greenLog, magentaLog } from './console_colors'

export function welcomeMessage(argNumber: string): void {
    cyanLog('########################### Bem Vindo ###########################')
    yellowLog(` Número de entrada: ${argNumber}`)
}

export function finishMessage(divisibleNumbers: number[], primeNumbers: number[]): void {
    greenLog(`Número de divisores: ${divisibleNumbers}`)
    magentaLog(`Números primos: ${primeNumbers}`)
    cyanLog('#################################################################')
}
