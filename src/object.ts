export function shallowClone(obj: any) {
    if (Array.isArray(obj)) {
        return obj.slice()
    }

    return { ...obj }
}

export function deepClone(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(deepClone)
    }

    if (typeof obj === 'object' && obj !== null) {
        return objectMap(obj, deepClone)
    }

    return obj
}

export function objectMap(obj: any, fn: (v: any, k: text, i: number) => any): any {
    return Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]))
}

export function isRecord(any: any): any is Record<text, any> {
    return typeof any === 'object' && any !== null && !Array.isArray(any)
}

export function isRecordWithKey(any: any, key: text): any is Record<text, any> {
    return isRecord(any) && any[key] !== undefined
}

export function isJsonEquivalent(a: any, b: any): boolean {
    try {
        return JSON.stringify(a) === JSON.stringify(b)
    } catch (e) {
        return a === b
    }
}

export function partition<T>(input: T[], size: number): T[][] {
    const output: T[][] = []

    for (let i = 0; i < input.length; i += size) {
        output[output.length] = input.slice(i, i + size)
    }

    return output
}

export function computePowerArray<T = any>(arr: T[]): T[][] {
    return arr.reduce(
        (subsets, value) =>
            subsets.concat(
                subsets.map((set: T[]) => [value, ...set]) as any
            ),
        [[]]
    )
}

/**
 * [1, 2, 3] ---> [[1], [1, 2], [1, 2, 3]]
 * @param arr
 * @returns
 */
export function computeHorizontalPowerArray<T = any>(arr: T[]): T[][] {
    const result: T[][] = []

    for (const index in arr) {
        result.push(arr.slice(0, Number(index) + 1))
    }

    return result
}
