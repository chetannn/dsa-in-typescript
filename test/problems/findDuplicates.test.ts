import findDuplicates from '../../src/problems/findDuplicates'
import selfDividing from '../../src/problems/selfDividingNumber'
import twoSum from '../../src/problems/twoSum'

describe('tests for the practical problems', function () {
    it('check for duplicate in an array', function () {
        const hasDuplicates = findDuplicates([2, 3, 4, 5, 6, 2])
        expect(hasDuplicates).toBeTruthy()
    })

    it('any number adds up to the target sum within an array', function () {
        const indices = twoSum([3, 5, 6, 8, 9], 17)

        expect(indices.length).toBe(2)
        expect(indices).toStrictEqual([3, 4])
    })

    it('returns all the self dividing numbers within a range', function () {
        const nums = selfDividing(1, 22)

        expect(nums.length).toBe(13)
        expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22])
    })
})
