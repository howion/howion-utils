export const BYTE = 1
export const KILOBYTE = 1024 * BYTE
export const MEGABYTE = 1024 * KILOBYTE
export const GIGABYTE = 1024 * MEGABYTE

export const BYTES = (m: number): number => m * BYTE
export const KILOBYTES = (m: number): number => m * KILOBYTE
export const MEGABYTES = (m: number): number => m * MEGABYTE
export const GIGABYTES = (m: number): number => m * GIGABYTE
