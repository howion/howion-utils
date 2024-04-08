export function SIGMOID_3PL(z: number, steepness = 1, midpoint = 0, supremum = 1) {
    return supremum / (1 + Math.exp(-steepness * (z - midpoint)))
}

export function LOGIT_3PL(z: number, steepness = 1, midpoint = 0, supremum = 1) {
    // return Math.log(z / (1 - z))
    return -1 * steepness ** -1 * Math.log(supremum / z - 1) + midpoint
}

export function roundNumber(num: number, decimalPlaces: number | null | undefined = 2): number {
    if (decimalPlaces === undefined || decimalPlaces === null || decimalPlaces < 0) return num
    return Number(num.toFixed(decimalPlaces))
}

export function cartesian(...args: any[][]): any[][] {
    const r: any[][] = []
    const max = args.length - 1

    function helper(arr: any[], i: number) {
        for (let j = 0, l = args[i]!.length; j < l; j++) {
            const a = arr.slice(0) // clone arr
            a.push(args[i]![j])
            if (i == max) r.push(a)
            else helper(a, i + 1)
        }
    }

    helper([], 0)

    return r
}
