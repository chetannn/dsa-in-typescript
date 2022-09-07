import insertionSort from '../../src/algorithms/insertionSort'

describe('insertionSort tests', function () {
    it('should sort unsorted array', function () {
        const nums = [5, 6, 3, 3, 1, 9]
        insertionSort(nums)

        expect(nums[0]).toBe(1)
    })
})
