export function reverseStringStack(inputStr: string[]): void {
    const stack = []

    for (let i = 0; i < inputStr.length; i++) {
        stack.push(inputStr[i])
    }

    for (let i = 0; i < inputStr.length; i++) {
        inputStr[i] = stack.pop() as string
    }
}
