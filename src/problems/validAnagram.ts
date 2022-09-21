export default function validAnagram(s: string, t: string) : boolean {

    if(s.length !== t.length) return false
    
    const firstMap = new Map()
    const secondMap = new Map()

    let isValid = true
    

    for(let i=0; i < s.length; i++) {
        
        if(firstMap.has(s[i])) {
            firstMap.set(s[i], firstMap.get(s[i])  + 1)
        }
        else {
            firstMap.set(s[i], 1)
        }


        if(secondMap.has(t[i])) {
            secondMap.set(t[i], secondMap.get(t[i])  + 1)
        }
        else {
            secondMap.set(t[i], 1)
        }

    }

    firstMap.forEach((value, key, map) => {

        if(firstMap.get(key) != secondMap.get(key)) {
            isValid = false
            return isValid
        }
    })

    return isValid

}
