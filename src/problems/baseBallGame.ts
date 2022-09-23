export function baseBallGame(ops: string[]): number {
    let result = 0
    let record: number[] = []

    ops.forEach((o: string) => {
        if (!isNaN(parseInt(o))) {
            record.push(Number(o))
        }

        if (o === 'C') {
            record.pop()
        }

        if (o === 'D') {
            record.push((record.at(-1) || 0) * 2)
        }

        if (o === '+') {
            record.push((record.at(-1) || 0) + (record.at(-2) || 0))
        }
    })

    record.forEach((r) => {
        result += r
    })

    return result
}
