import linearSearch from "../../src/algorithms/linearSearch"


describe('linearSearch tests', function() {

    it('should return true if element is found', function() {

    const nums = [4,6,4,2,6,9,12]

    const found = linearSearch(nums, 12)

    expect(found).toBeTruthy()


    })

})
