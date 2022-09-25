export function happyNumber(num: number) : boolean {

        let slow: number = num
        let fast: number = nextSumofSquareOfDigits(num)

        while(fast !== 1 && slow !== fast) {
            slow = nextSumofSquareOfDigits(num)
            fast = nextSumofSquareOfDigits(nextSumofSquareOfDigits(fast))
        }

        return fast === 1
}

function nextSumofSquareOfDigits(num: number) {
        let sum = 0

        while(num > 0) {
           let lastDigit = num % 10
           sum += lastDigit * lastDigit
           num = parseInt(String(num / 10))
        }

        return sum
}
