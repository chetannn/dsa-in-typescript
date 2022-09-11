export default function arraySum(
    arr: number[],
    index: number = 0,
    total: number = 0
): number {
    total += arr[index]

    if (index == arr.length - 1) {
        return total
    }

    return arraySum(arr, index + 1, total)
}
