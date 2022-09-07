export default function insertionSort(arr: number[]) {
    let temp = 0
    let j = 0

    for (let i = 1; i < arr.length; i++) {
        temp = arr[i]
        j = i - 1

        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = temp
    }
}
