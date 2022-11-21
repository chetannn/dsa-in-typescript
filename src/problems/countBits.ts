export function countBits(n: number): number[] {
    let ans: number[] = new Array(n + 1).fill(0)
    let offset = 1

    for (let i = 1; i < ans.length; i++) {
        if (offset * 2 === i) {
            offset = i
        }

        ans[i] = 1 + ans[i - offset]
    }

    return ans
}
