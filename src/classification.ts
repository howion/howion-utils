export function classifyBy<T>(rows: T[], handler: (row: T) => text | number): Record<text | number, T[]> {
    const result: Record<text | number, T[]> = {} as Record<text | number, T[]>

    for (const row of rows) {
        const index = handler(row)
        if (index === undefined || index === null) continue
        if (result[index] === undefined) result[index] = []
        result[index]!.push(row)
    }

    return result
}

export function mapOverClassifiedRows<T, K>(
    classified: Record<text | number, T[]>,
    mapper: (rows: T) => K
): Record<number | text, K[]> {
    const result: Record<number | text, K[]> = {}

    for (const [key, rows] of Object.entries(classified)) {
        result[key] = rows.map(mapper)
    }

    return result
}
