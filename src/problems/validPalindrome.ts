export default function validPalindrome(s: string) : boolean {
    
    let left = 0
    let right = s.length - 1

    while(left < right) {

        while(left < right && !isAlphaNum(s[left])) {
            left++
        }

        while(right > left && !isAlphaNum(s[right])) {
                right--
        }

            if(s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false
            }

            left++
            right--

    }

    return true
}


function isAlphaNum(c: string) : boolean {

  return (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90)
        || (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122)
        || (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57)   
}
