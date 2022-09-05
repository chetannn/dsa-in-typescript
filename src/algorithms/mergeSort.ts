

export default function mergeSort(arr: number[]) : number[] {

    if(arr.length === 1) return arr

    let mid = parseInt(String(arr.length / 2))

   let left: number[] = mergeSort(arr.slice(0, mid))
    let right: number[] = mergeSort(arr.slice(mid))


    return merge(left, right)
}


function merge(firstArr: number[], secondArr: number[]) : number[] {

    let mix = []
    
    let i = 0
    let j = 0

    while(i < firstArr.length && j < secondArr.length) {

        if(firstArr[i] < secondArr[j]) {
            mix.push(firstArr[i])
            i++
        }
        else {
            mix.push(secondArr[j])
            j++
        }
    }

    while(i < firstArr.length) {
        mix.push(firstArr[i++])
    }

    while(j < secondArr.length) {
        mix.push(secondArr[j++])
    }


    return mix


}
