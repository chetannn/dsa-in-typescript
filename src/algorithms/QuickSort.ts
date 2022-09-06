export default function quickSort(
    arr: number[],
    lowerBound: number,
    upperBound: number
) {
    let loc = partition(arr, lowerBound, upperBound)

    quickSort(arr, lowerBound, loc - 1)
    quickSort(arr, loc + 1, upperBound)
}

function partition(arr: number[], lb: number, ub: number) {
    let pivot = arr[lb]
    let start = lb
    let end = ub
    let temp = 0

    while (start < end) {
        while (arr[start] <= pivot) {
            start++
        }

        while (arr[end] > pivot) {
            end--
        }

        if (start < end) {
            temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
        }
    }

    temp = arr[lb]
    arr[lb] = arr[end]
    arr[end] = temp

    return end
}
