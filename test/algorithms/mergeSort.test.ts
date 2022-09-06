import mergeSort from '../../src/algorithms/mergeSort'

describe('merge sort tests', () => {
    it('simple merge sort test', () => {
        let numbers = [5, 4, 3, 2, 1]
        let sorted = mergeSort(numbers)

        expect(sorted[0]).toBe(1)
        expect(sorted.at(-1)).toBe(5)
        expect(sorted.length).toBe(numbers.length)
    })
})
