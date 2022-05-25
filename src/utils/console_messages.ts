import consoleColorsEnum from './console_colors_enum'

export function cyanLog(message: string = ''): void {
    console.log(consoleColorsEnum.CYAN, message)
}

export function yellowLog(message: string = ''): void {
    console.log(consoleColorsEnum.YELLOW, message)
}
