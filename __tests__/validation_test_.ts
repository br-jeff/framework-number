import { validator } from '../src/domain/validator'
import { ValidatorError } from '../src/utils/erros/validator'

describe('should test validator', () => {

    const original = console.error

    beforeEach(() => {
        console.error = jest.fn()
    })

    it('should not create if is not a number and with type CLI', () => {
        const input = 'dada'
        jest.spyOn(process, 'exit').mockImplementation();

        const expected = <ValidatorError>validator(input, 'cli')

        expect(expected).not.toBeNull
        expect(expected.message).toBe("Erro o parâmetro não é um número")
        expect(console.error).toBeCalled();
    })

    it('should not create if input is 1 and with type CLI', () => {
        const input = '1'
        jest.spyOn(process, 'exit').mockImplementation();

        const expected = <ValidatorError>validator(input, 'cli')

        expect(expected).not.toBeNull
        expect(expected.message).toBe("Error o número não pode ser \"1\"")
        expect(console.error).toBeCalled();
    })

    it('should not create if input is 0 and with type CLI', () => {
        const input = '0'
        jest.spyOn(process, 'exit').mockImplementation();

        const expected = <ValidatorError>validator(input, 'cli')

        expect(expected).not.toBeNull
        expect(expected.message).toBe("Error o número não pode ser \"0\"")
        expect(console.error).toBeCalled();
    })

    it('should not create if input is negative and with type CLI', () => {
        const input = '-222'
        jest.spyOn(process, 'exit').mockImplementation();

        const expected = <ValidatorError>validator(input, 'cli')

        expect(expected).not.toBeNull
        expect(expected.message).toBe("Erro o número não pode ser negativo")
        expect(console.error).toBeCalled();
    })


    it('should not create if is not a number and with type web', () => {
        const input = 'dada'
        jest.spyOn(process, 'exit').mockImplementation();

        const expected = <ValidatorError>validator(input, 'web')

        expect(expected).not.toBeNull
        expect(expected.message).toBe("Erro o parâmetro não é um número")
        expect(console.error).toBeCalled();
    })

    it('should not create if input is 1 and with type web', () => {
        const input = '1'
        jest.spyOn(process, 'exit').mockImplementation();

        const expected = <ValidatorError>validator(input, 'web')

        expect(expected).not.toBeNull
        expect(expected.message).toBe("Error o número não pode ser \"1\"")
        expect(console.error).toBeCalled();
    })

    it('should not create if input is 0 and with type web', () => {
        const input = '0'
        jest.spyOn(process, 'exit').mockImplementation();

        const expected = <ValidatorError>validator(input, 'web')

        expect(expected).not.toBeNull
        expect(expected.message).toBe("Error o número não pode ser \"0\"")
        expect(console.error).toBeCalled();
    })

    it('should not create if input is negative and with type web', () => {
        const input = '-222'
        jest.spyOn(process, 'exit').mockImplementation();

        const expected = <ValidatorError>validator(input, 'web')

        expect(expected).not.toBeNull
        expect(expected.message).toBe("Erro o número não pode ser negativo")
        expect(console.error).toBeCalled();
    })  
})

