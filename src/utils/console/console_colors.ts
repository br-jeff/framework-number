import consoleColorsEnum from '../../domain/enums/console_colors_enum'

export function cyanLog(message: string = ''): void {
    (consoleColorsEnum.CYAN, message)
}

export function yellowLog(message: string = ''): void {
    (consoleColorsEnum.YELLOW, message)
}

export function magentaLog(message: string = ''): void {
    (consoleColorsEnum.MAGENTA, message)
}

export function greenLog(message: string = ''): void {
    (consoleColorsEnum.GREEN, message)
}

export function errorLog(message: string = ''): void {
    console.error(consoleColorsEnum.RED, message)
}
