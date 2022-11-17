export function reverseVowels(s: string): string {
    let letters = [...s]
    let left = 0
    let right = letters.length - 1

    while (left <= right) {
        if (!isVowel(letters[left])) {
            left++
        } else if (!isVowel(letters[right])) {
            right--
        } else {
            const temp = letters[left]
            letters[left] = letters[right]
            letters[right] = temp

            left++
            right--
        }
    }

    return letters.join('')
}

function isVowel(str: string) {
    return (
        ['a', 'e', 'i', 'o', 'u'].filter((c) => c === str.toLowerCase())
            .length > 0
    )
}
