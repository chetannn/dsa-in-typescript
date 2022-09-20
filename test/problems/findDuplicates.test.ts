import baseBallGame from '../../src/problems/baseBallGame'
import findDuplicates from '../../src/problems/findDuplicates'
import maxSubArray from '../../src/problems/maxSubArray'
import isPowerOfThree from '../../src/problems/powerOfThree'
import reverseStringInPlace from '../../src/problems/reverseStringInPlace'
import reverseStringStack from '../../src/problems/reverseStringStack'
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

    it('should return maximum sub array sum', function () {
        const maxSubArraySum = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])

        expect(maxSubArraySum).toBe(6)
    })

    it('base ball game score', function () {
        const scoreOne = baseBallGame(['5', '2', 'C', 'D', '+'])
        const scoreTwo = baseBallGame(['5', '-2', '4', 'C', 'D', '9', '+', '+'])

        expect(scoreOne).toEqual(30)
        expect(scoreTwo).toEqual(27)
    })

    it('reverse string using in place', function () {
        const arr = ['h', 'e', 'l', 'l', 'o']

        reverseStringInPlace(arr)

        expect(arr).toEqual(['o', 'l', 'l', 'e', 'h'])
    })

    it('reverse string using stack', function () {
        const arr = ['h', 'e', 'l', 'l', 'o']

        reverseStringStack(arr)

        expect(arr).toEqual(['o', 'l', 'l', 'e', 'h'])
    })

    it('power of three', function () {
        expect(isPowerOfThree(1)).toBeTruthy()
        expect(isPowerOfThree(27)).toBeTruthy()
        expect(isPowerOfThree(45)).toBeFalsy()
        expect(isPowerOfThree(-1)).toBeFalsy()
    })
})
