import binarySearch from '../../src/algorithms/binarySearch'

describe('binary search tests', () => {
    it('search with positive numbers', () => {
        let numbers = [1, 2, 3, 4, 5, 7]
        let foundIndex = binarySearch(numbers, 5)

        expect(foundIndex).toBe(4)
        expect(numbers[foundIndex]).toBe(5)
    })
})
