import { MINUTES } from './time'

export function humanizeTime(ms: number): text {
    if (ms < MINUTES(1)) return `${Math.floor(ms / 1000)}s`
    return `${Math.floor(ms / MINUTES(1))}m ${Math.floor((ms % MINUTES(1)) / 1000)}s`
}

export function humanizeNumber(n: number): text {
    const thousandDelimeter = ','
    const result: text[] = n.toString().split('.')
    result[0] = result[0]!.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousandDelimeter)
    return result.join('.')
}

export function humanizeKebab(kebab: text) {
    if (kebab[0]) kebab = kebab[0].toUpperCase() + kebab.slice(1)
    return kebab
        .replace(/-([a-z])/g, (c) => c[1]!.toUpperCase())
        .split(/\.?(?=[A-Z])/)
        .join(' ')
}
