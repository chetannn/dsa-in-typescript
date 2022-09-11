import arraySum from '../../src/recursions/arraySum'

describe('arraySum tests', function () {
    it('should sum all elements in the array using recursions', function () {
        let total = arraySum([1, 2, 3, 4, 5])
        expect(total).toEqual(15)
    })
})
