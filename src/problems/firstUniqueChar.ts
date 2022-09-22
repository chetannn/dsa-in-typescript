export default function firstUniqueChar(s: string) : number {
    const hashMap = new Map()

    for(let i=0; i < s.length; i++) {
        if(hashMap.has(s[i])) {
            hashMap.set(s[i], hashMap.get(s[i]) + 1) 
        }
        else {
            hashMap.set(s[i], 1)
        }
    }

    for(let i=0; i < s.length; i++) {
        if(hashMap.get(s[i]) === 1) {
            return i
        }
    }

    return -1
}