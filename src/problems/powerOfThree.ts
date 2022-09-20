export default function isPowerOfThree(num: number) {
    if (num < 1) return false

    while (num % 3 === 0) {
        num /= 3
    }

    return num === 1
}
