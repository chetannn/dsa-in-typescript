function isAlphabet(str: string): boolean {
    return (
        (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) ||
        (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122)
    )
}

export function reverseWithoutSpecialCharacters(s: string): string {
    let result: string[] = [...s]
    let left = 0
    let right = s.length - 1

    while (left <= right) {
        if (!isAlphabet(result[left])) {
            left++
        } else if (!isAlphabet(result[right])) {
            right--
        } else {
            let temp = result[left]

            result[left] = result[right]
            result[right] = temp

            left++
            right--
        }
    }
    return result.join('')
}
