export function missingNumber(nums: number[]) : number {
    let result = nums.length
    for(let i=0; i < nums.length; i++) {
        result += (i - nums[i])
    }
    return result
}
