export function longestCommonPrefix(strs: string[]) : string {
    let result = ''

    for(let i=0; i < strs[0].length; i++) {
        let character = strs[0][i]
        for(let j=0; j < strs.length; j++) {
            if(i === strs[j].length || strs[j][i] !== character) {
                return result
            }
        }
            result +=  character
           }

    return result

}