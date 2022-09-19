export default function reverseStringRecursion(
    str: string[],
    left: number,
    right: number
): void {
    if (left <= right) {
        const temp = str[left]

        str[left] = str[right]
        str[right] = temp

        return reverseStringRecursion(str, left + 1, right - 1)
    }

    return
}
