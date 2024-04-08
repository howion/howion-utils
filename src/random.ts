export function insecureRandomIntFromInterval(min: number, max: number): number {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// See: https://stackoverflow.com/questions/16801687/javascript-random-ordering-with-seed
export function insecureRandomizeNumber(seed: number): number {
    const x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
}

// See: https://stackoverflow.com/questions/16801687/javascript-random-ordering-with-seed
export function insecureShuffleWithSeed<T>(list: T[], seed: number): T[] {
    let m = list.length
    let t
    let i

    while (m) {
        i = Math.floor(insecureRandomizeNumber(seed) * m--)

        t = list[m]
        list[m] = list[i]
        list[i] = t
        ++seed
    }

    return list
}
