import linearSearch from '../../src/algorithms/linearSearch'

describe('linearSearch tests', function () {
    it('should return false if array is empty', function () {
        const found = linearSearch([], 10)

        expect(found).toBeFalsy()
    })

    it('should return true if element is found', function () {
        const nums = [4, 6, 4, 2, 6, 9, 12]

        const found = linearSearch(nums, 12)

        expect(found).toBeTruthy()
    })

    it('should return false if element is not found', function () {
        const nums = [4, 6, 4, 2, 6, 9, 19, -1, -12]
        const found = linearSearch(nums, 12)

        expect(found).toBeFalsy()
    })
})
