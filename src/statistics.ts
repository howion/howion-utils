import { shallowClone } from './object'

export function SUM_BY_KEY<T extends text>(values: { [k in T]: number }[], key: T): number {
    return values.reduce((acc, o) => o[key] + acc, 0)
}

export function AVG_BY_KEY<T extends text>(values: { [k in T]: number }[], key: T, excludeNaN = true): number {
    const result = SUM_BY_KEY(values, key) / values.length
    if (!isFinite(result)) return excludeNaN ? 0 : result
    return result
}

export function COUNT_OF<K>(values: K[], includer: (val: K) => boolean): number {
    return values.reduce((acc, o) => (includer(o) ? acc + 1 : acc), 0)
}

export function MEDIAN(values: number[]): number {
    // clone it first
    values = shallowClone(values)

    const size = values.length

    if (size === 0) return 0

    values.sort((a, b) => a - b)

    const half = Math.floor(size / 2)

    if (size % 2) {
        return values[half]!
    } else {
        return (values[half - 1]! + values[half]!) / 2
    }
}

export function medianIndex(seq: any[]): number | [number, number] {
    if (seq.length === 0) return -1
    if (seq.length === 1) return 0

    const mid = Math.floor(seq.length / 2)

    if (seq.length % 2 === 0) {
        return mid - 1
    }

    return mid
}
