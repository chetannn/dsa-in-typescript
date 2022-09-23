// kadane's algorithm
export function maxSubArray(nums: number[]) {
    let currentSum = 0
    let maxSum = nums[0]

    nums.forEach((num) => {
        currentSum = Math.max(currentSum, 0)
        currentSum += num

        maxSum = Math.max(maxSum, currentSum)
    })

    return maxSum
}
