import arraySmallest from '../../src/recursions/arraySmallest'

describe('arraySmallest tests', function () {
    it('should find smallest number in the array using recursion', function () {
        const numbers = [5, 6, 8, 3, 2, 4, 1]

        const smallest = arraySmallest(numbers, 0, numbers[0])

        expect(smallest).toEqual(1)
    })
})
