import {
    baseBallGame,
    findDuplicates,
    firstUniqueChar,
    selfDividingNumber,
    maxSubArray,
    missingNumber,
    isPowerOfThree,
    reverseStringInPlace,
    reverseStringStack,
    isValidParentheses,
    twoSum,
    validAnagram,
    validPalindrome,
    happyNumber,
    goodString,
    longestCommonPrefix,
    reverseWithoutSpecialCharacters,
    numUniqueEmails,
    reverseVowels,
} from '../../src/problems/index'

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
        const nums = selfDividingNumber(1, 22)

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

    it('valid parentheses', function () {
        expect(isValidParentheses('[')).toBeFalsy()
        expect(isValidParentheses('[]')).toBeTruthy()
        expect(isValidParentheses(']()')).toBeFalsy()
        expect(isValidParentheses('()[]{}')).toBeTruthy()
        expect(isValidParentheses('[({})]')).toBeTruthy()
    })

    it('valid anagrams', function () {
        expect(validAnagram('anagram', 'nagaram')).toBeTruthy()
        expect(validAnagram('rat', 'car')).toBeFalsy()
    })

    it('valid palindrome string', function () {
        expect(validPalindrome('race a car')).toBeFalsy()
        expect(validPalindrome('A man, a plan, a canal: Panama')).toBeTruthy()
        expect(validPalindrome(' ')).toBeTruthy()
    })

    it('first unique character in string', function () {
        expect(firstUniqueChar('leetcode')).toEqual(0)
        expect(firstUniqueChar('loveleetcode')).toEqual(2)
        expect(firstUniqueChar('l')).toEqual(0)
    })

    it('missing single number', function () {
        expect(missingNumber([3, 0, 1])).toEqual(2)
        expect(missingNumber([0, 1])).toEqual(2)
        expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toEqual(8)
    })

    it('happy number', function () {
        expect(happyNumber(19)).toBeTruthy()
        expect(happyNumber(2)).toBeFalsy()
    })

    it('good string', function () {
        expect(goodString('leEeetcode')).toEqual('leetcode')
        expect(goodString('')).toEqual('')
        expect(goodString('abBAcC')).toEqual('')
    })

    it('longest common prefix', function () {
        expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl')
        expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('')
    })

    it('reverse string without special characters', function () {
        expect(reverseWithoutSpecialCharacters('ab-cd')).toEqual('dc-ba')
        expect(reverseWithoutSpecialCharacters('7]28_')).toEqual('7]28_')
    })

    it('unique email addresses', function () {
        expect(
            numUniqueEmails([
                'a@leetcode.com',
                'b@leetcode.com',
                'c@leetcode.com',
            ])
        ).toEqual(3)
        expect(
            numUniqueEmails([
                'test.email+alex@leetcode.com',
                'test.e.mail+bob.cathy@leetcode.com',
                'testemail+david@lee.tcode.com',
            ])
        ).toEqual(2)
    })

    it('reverse vowels of a string', function () {
        expect(reverseVowels('hello')).toEqual('holle')
        expect(reverseVowels('leetcode')).toEqual('leotcede')
    })
})
