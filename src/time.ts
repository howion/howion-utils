export const SECOND = 1000
export const MINUTE = 60 * SECOND
export const HOUR = 60 * MINUTE
export const DAY = 24 * HOUR
export const WEEK = 7 * DAY
export const MONTH = 30 * DAY

export const MS_TO_SECONDS = (m: number, round = true): number => {
    const secs = m / 1000
    return round ? Math.round(secs) : secs
}

export const SECONDS = (m: number): number => m * SECOND
export const MINUTES = (m: number): number => m * MINUTE
export const HOURS = (m: number): number => m * HOUR
export const DAYS = (m: number): number => m * DAY
export const WEEKS = (m: number): number => m * WEEK
export const MONTHS = (m: number): number => m * MONTH

export const MONTHS_TO_SECONDS = (m: number): number => m * 30 * 24 * 60 * 60
export const SECONDS_TO_MONTHS = (m: number): number => m / (30 * 24 * 60 * 60)

export const HOURS_TO_SECONDS = (m: number): number => m * 60 * 60
export const SECONDS_TO_HOURS = (m: number): number => m / (60 * 60)
