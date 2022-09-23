export function isValidParentheses(s: string) : boolean {

    if(s.length === 1) return false

    const stack = []


    for(let i=0; i < s.length; i++) {

        let current = s[i]

        if(current == '(' || current == '{' || current == '[') {
            stack.push(current)
        }

        else {
            const top = stack.at(-1)
            if((top == '(' && current == ')') || (top == '{' && current == '}') || (top == '[' && current == ']') ) {
                stack.pop()
            }
            else {
                return false
            }
        }

    }

    return stack.length == 0
}
