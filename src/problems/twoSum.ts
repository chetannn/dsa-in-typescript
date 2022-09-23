export function twoSum(arr: number[], target: number): number[] {
    const indicesArr: number[] = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                indicesArr.push(i, j)

                return indicesArr
            }
        }
    }

    return indicesArr
}
