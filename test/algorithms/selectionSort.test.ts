import selectionSort from '../../src/algorithms/selectionSort'

describe('selectionSort tests', function () {
    it('should sort all the elements in ascending order', function () {
        const nums = [5, 4, 3, 2, 1]

        selectionSort(nums)

        expect(nums[0]).toBe(1)
    })
})
