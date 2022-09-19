export default function reverseStringInPlace(str: string[]): void {
    let left = 0
    let right = str.length - 1

    while (left <= right) {
        let temp = str[left]

        str[left] = str[right]
        str[right] = temp

        left++
        right--
    }
}
