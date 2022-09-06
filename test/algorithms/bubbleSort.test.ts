import bubbleSort from '../../src/algorithms/bubbleSort'

describe('bubbleSort tests', () => {
    it('sorts positive numbers', () => {
        const numbers = [5, 7, 2, 28, 7, 1]

        bubbleSort(numbers)

        expect(numbers[0]).toBe(1)
        expect(numbers[numbers.length - 1]).toBe(28)
    })
})
