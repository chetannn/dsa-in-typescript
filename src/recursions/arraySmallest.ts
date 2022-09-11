export default function arraySmallest(
    arr: number[],
    index: number,
    smallest: number
): number {
    if (arr[index] < smallest) {
        smallest = arr[index]
    }

    if (index === arr.length - 1) {
        return smallest
    }

    return arraySmallest(arr, index + 1, smallest)
}
