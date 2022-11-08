export function goodString(s: string) : string {
        if(s && s.length === 1) return s

        let stack = []

        for(let character of s) {
                if(stack.length > 0 && Math.abs(stack && stack.at(-1)?.charCodeAt(0)! - character.charCodeAt(0)) === 32) {
                        stack.pop()
                }
                else {
                  stack.push(character)
                }
        }

        return stack.join('')
}
