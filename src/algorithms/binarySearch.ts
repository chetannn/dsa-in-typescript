export default function binarySearch(arr: number[], target: number) : number {
  
  let left = 0, right = arr.length - 1;

  let mid =  parseInt(String((left + right) / 2))


  while(left <= right) {
    
    
    if(target === arr[mid]) {
      return mid
    }

    if(target > arr[mid]) {
      left = mid + 1
    }

    else {
      right = mid - 1
    }

   mid = parseInt(String((left + right) / 2))

  }

  return mid

}
