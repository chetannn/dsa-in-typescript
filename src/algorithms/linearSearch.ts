export default function linearSearch(arr: number[], target: number): boolean {
    let found = false

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            found = true
            return found
        }
    }

    return found
}
