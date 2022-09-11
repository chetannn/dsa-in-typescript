export default function selfDividing(left: number, right: number): number[] {
    const selfDividingNumbers = []

    for (let i = left; i <= right; i++) {
        let num = i
        let isSelfDividing = true

        while (num != 0) {
            let remainder = num % 10

            if (remainder === 0) {
                isSelfDividing = false
                break
            }

            if (i % remainder !== 0) {
                isSelfDividing = false
            }

            num = parseInt(String(num / 10))
        }

        if (isSelfDividing) {
            selfDividingNumbers.push(i)
        }
    }

    return selfDividingNumbers
}
