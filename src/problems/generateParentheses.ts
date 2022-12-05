export function generateParentheses(n: number): string[] {
    const result: string[] = []

    function backtrack(open = 0, close = 0, currentString = '') {
        if (currentString.length === n * 2) {
            result.push(currentString)
        }

        if (open < n) backtrack(open + 1, close, currentString + '(')

        if (close < open) backtrack(open, close + 1, currentString + ')')
    }

    backtrack()

    return result
}
