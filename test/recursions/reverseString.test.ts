import reverseStringRecursion from '../../src/recursions/reverseStringRecursion'

describe('reverse string using recursion', function () {
    it('should reverse the string using recursion', function () {
        const arr = ['h', 'e', 'l', 'l', 'o']

        reverseStringRecursion(arr, 0, arr.length - 1)

        expect(arr).toEqual(['o', 'l', 'l', 'e', 'h'])
    })
})
