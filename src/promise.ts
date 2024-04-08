export function waitFor(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export function setIntervalImmediate(fn: (isFirst?: boolean) => void, ms: number) {
    fn(true)
    return setInterval(fn, ms)
}
